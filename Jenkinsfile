#!/usr/bin/env groovy

@Library('jenkins-pipeline-utils') _

DOCKER_GROUP = 'cwds'
DOCKER_APP_IMAGE = 'cals'
DOCKER_TEST_IMAGE = 'cals_acceptance_test'

SUCCESS_COLOR = '#11AB1B'
FAILURE_COLOR = '#FF0000'

def notify(String tagNumber) {
    def colorCode = currentBuild.currentResult == 'SUCCESS' ? SUCCESS_COLOR : FAILURE_COLOR
    def tagMessage = (tagNumber != '') ? "\nDocker tag: ${tagNumber}" : ''

    slackSend(
        baseUrl: 'https://hooks.slack.com/services/',
        tokenCredentialId: SLACK_CREDENTIALS_ID,
        channel: '#tech-cals-updates',
        color: colorCode,
        message: "${env.JOB_NAME} #${env.BUILD_NUMBER} - *${currentBuild.currentResult}* after ${currentBuild.durationString}" +
            "${tagMessage}" +
            "\n(Details at ${env.BUILD_URL})"
    )
}


def reports() {
    // step([$class: 'JUnitResultArchiver', testResults: '**/reports/*.xml'])
    publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: 'reports/coverage/karma',
        reportFiles: 'index.html',
        reportName: 'JS Code Coverage'
    ])

    publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: 'reports/coverage/rspec',
        reportFiles: 'index.html',
        reportName: 'Ruby Code Coverage'
    ])
}

def dockerStages(newTag) {
    stage('Docker App Build Publish') {
        pushToDocker(
            "${DOCKER_GROUP}/${DOCKER_APP_IMAGE}:${newTag}",
            "-f ./docker/release/Dockerfile .",
            DOCKER_CREDENTIALS_ID
            )

    }
    stage('Docker Test Build Publish') {
        pushToDocker(
            "${DOCKER_GROUP}/${DOCKER_TEST_IMAGE}:${newTag}",
            "-f ./docker/acceptance-tests/Dockerfile .",
            DOCKER_CREDENTIALS_ID
            )
    }
}

def pushToDocker(imageLocation, args, docker_credential_id) {
    def app = docker.build(imageLocation, args)
    withEnv(["DOCKER_CREDENTIALS_ID=${docker_credential_id}"]) {
        withDockerRegistry([credentialsId: docker_credential_id]) {
            app.push()
        }
    }
}

node('cals-slave') {
    env.DISABLE_SPRING = 1

    final def MAIN_BRANCH = 'master'
    def branch = env.GIT_BRANCH
    String newTag = ''

    def appDockerImage

    try {
        deleteDir()
        stage ('Checkout Github') {
            checkout scm
        }

        // build the container from current code
        stage('Build Docker Image') {
            appDockerImage = docker.build("${DOCKER_GROUP}/${DOCKER_APP_IMAGE}:test-${env.BUILD_ID}",
                "-f ./docker/test/Dockerfile .")
        }

        // run all commands inside container
        appDockerImage.withRun { container ->
            stage('Lint') {
                sh "docker exec -t ${container.id} yarn lint"
            }
            if (branch != MAIN_BRANCH) { // PR build
                stage('Verify SemVer Label') {
                    checkForLabel('cals')
                }
            }
            stage('Test - Jasmine') {
                sh "docker exec -t ${container.id} yarn karma-ci"
            }
            stage('Test - Rspec') {
                def envVariablesRspec = 'CALS_API_URL=https://calsapi.preint.cwds.io' +
                    ' -e GEO_SERVICE_URL=https://geo.preint.cwds.io' +
                    ' -e BASE_SEARCH_API_URL=https://dora.preint.cwds.io' +
                    ' -e AUTHENTICATION_API_BASE_URL=https://web.preint.cwds.io/perry'
                sh "docker exec -e ${envVariablesRspec} -t ${container.id} yarn spec-ci"
            }
            stage('Reports') {
                sh "docker cp ${container.id}:cals/reports ./reports"
                reports()
            }
        }

        if (branch == MAIN_BRANCH) {
            // run test bubble
            // commented till cals-api can work with perry v2
            // stage('Test Bubble') {
            //     withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID]) {
            //         sh "docker-compose -f ./docker/cals-test-bubble/docker-compose.yml up -d --build"
            //         sh "sleep 120"
            //         sh "docker-compose exec -T cals-test TEST_END_TO_END=true SELENIUM_BROWSER=HEADLESS_CHROME bundle exec rspec spec/features/global_header_test_spec.rb"
            //     }
            // }

            stage("Increment Tag") {
                newTag = newSemVer()
            }

            stage('Tag Repo') {
                tagGithubRepo(newTag, GITHUB_CREDENTIALS_ID)
            }

            dockerStages(newTag)

            stage('Deploy Preint') {
                sh "curl -v 'http://${JENKINS_USER}:${JENKINS_API_TOKEN}@jenkins.mgmt.cwds.io:8080/job/preint/job/deploy-CALS/buildWithParameters" +
                    "?" + "token=${JENKINS_TRIGGER_TOKEN}" + "&" + "cause=Caused%20by%20Build%20${env.BUILD_ID}" +
                    "&" + "version=${newTag}'"
            }

            stage('Update Manifest Version') {
                updateManifest("cals", "preint", GITHUB_CREDENTIALS_ID, newTag)
            }
        }

        stage('Clean Up') {
            sh "docker rmi `docker images ${DOCKER_GROUP}/${DOCKER_APP_IMAGE} --filter 'before=${DOCKER_GROUP}/${DOCKER_APP_IMAGE}:test-${env.BUILD_ID}' -q` -f || true"
            sh "docker rmi `docker images ${DOCKER_GROUP}/${DOCKER_TEST_IMAGE} --filter 'before=${DOCKER_GROUP}/${DOCKER_TEST_IMAGE}:${newTag}' -q` -f || true"
            sh "docker rmi `docker images --filter 'dangling=true' -q` -f || true"
        }
    }
    catch (e) {
        currentBuild.result = 'FAILURE'
        newTag = ''
        throw e
    }
    finally {
        // bring all containers down
        // sh "docker-compose -f ./docker/cals-test-bubble/docker-compose.yml down"
        notify(newTag)
    }
}
