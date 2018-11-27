import React from 'react'
import Immutable from 'immutable'
import _ from 'lodash'
import ApplicantCardsGroup from './applicantCardsGroup.jsx'
import ResidenceCards from './residenceCardsMain'
import FosterCareHistoryCardMain from './FosterCareHistoryCard.jsx'
import OtherAdultsCard from './OtherAdultsCardsGroup'
import MinorCardsGroup from './minorCardsGroup'
import ReferencesMain from './referencesMain'
import RelationshipBetweenApplicantsCardMain from './relationshipBetweenApplicantsCard'
import ApplicantMaritalHistoryCardGroup from './applicantMaritalHistoryCardGroup'
import ChildDesiredMain from './childDesiredMain'
import {CountyUseOnlyCard} from 'components/rfa_forms/countyUseOnlyCard.js'
import RfaSideBar from 'rfa_forms/rfa_sidebar/index.js'
import PageTemplate from 'components/common/pageTemplate'
import {fetchRequest} from 'helpers/http'
import {getDictionaryId, dictionaryNilSelect, checkArrayObjectPresence, unMaskedPhoneFields} from 'helpers/commonHelper.jsx'
import {checkForNameValidation, checkFieldsForSubmit, validateStatus} from 'helpers/cardsHelper.jsx'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import Validator from 'helpers/validator'
import ScrollSpy from 'components/common/scrollSpy'

export default class Rfa01EditView extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.submit = this.submit.bind(this)
    this.fetchToRails = this.fetchToRails.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
    this.validator = new Validator({})
    this.validator.validateFieldSetErrorState = this.validateFieldSetErrorState.bind(this)
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
    this.isNavLinkActive = this.isNavLinkActive.bind(this)
    this.validateAllRequiredForSubmit = this.validateAllRequiredForSubmit.bind(this)

    let submitEnabled = false
    if (!validateStatus(this.props.application.status)) {
      if (this.props.application.metadata !== undefined) {
        submitEnabled = this.props.application.metadata.submit_enabled &&
      this.validateAllRequiredForSubmit(this.props.application)
      }
    }
    const DataValidForSave = !checkForNameValidation(this.props.application.applicants)

    this.state = {
      focusComponentName: '',
      activeNavLinkHref: '',
      application: Immutable.fromJS(this.props.application),
      errors: {},
      disableSave: DataValidForSave,
      disableSubmit: !submitEnabled,
      metadata: {}
    }
    if (!this.state.application.get('application_county')) {
      const countyValue = (this.props.user && this.props.user.county_code)
      this.state.application = this.state.application.set('application_county', Immutable.fromJS(this.props.countyTypes.find(countyType => countyType.id === parseInt(countyValue))))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.application !== this.state.application) {
      const disableSubmit = !(!validateStatus(this.state.application.get('status')) &&
        this.validateAllRequiredForSubmit(this.state.application.toJS()))
      const DataValidForSave = !checkForNameValidation(this.state.application.toJS().applicants)
      if (prevState.disableSubmit !== disableSubmit) {
        this.setState({disableSubmit: disableSubmit})
      } if (prevState.disableSave !== DataValidForSave) {
        this.setState({disableSave: DataValidForSave})
      }
    }
  }

  validateAllRequiredForSubmit (data) {
    let requiredRules = this.validator.allIsRequiredRules()
    requiredRules = requiredRules.merge(this.validator.allValidationsWithOnlyRule('isRequiredBoolean'))
    requiredRules = requiredRules.merge(this.validator.allValidationsWithOnlyRule('isRequiredIf'))
    requiredRules = requiredRules.merge(this.validator.allValidationsWithOnlyRule('isRequiredBooleanIf'))
    requiredRules = requiredRules.merge(this.validator.allValidationsWithOnlyRule('isRequiredNumberIf'))

    return this.validator.validateAllFieldsWithRules(data, requiredRules)
  }

  validateFieldSetErrorState (fieldName, value) {
    const error = this.validator.validateFieldAndGetError(fieldName, value)

    const currentErrors = this.state.errors
    if (error === undefined) {
      _.unset(currentErrors, fieldName)
    } else {
      _.set(currentErrors, fieldName, error)
    }
    this.setState({errors: currentErrors})
  }

  saveProgress () {
    const newApp = this.state.application.setIn(['metadata', 'submit_enabled'],
      (!validateStatus(this.state.application.get('status')) &&
    this.validateAllRequiredForSubmit(this.state.application.toJS())))

    const overAllState = newApp
    const newApplicants = overAllState.get('applicants').map((applicant) =>
      applicant.update('phones', (phones) =>
        unMaskedPhoneFields(phones, 'number')
      )
    )
    const newOverAllState = overAllState.set('applicants', newApplicants)
    const newReferenceList = unMaskedPhoneFields(newOverAllState.getIn(['references', 'items']), 'phone_number')
    const finalState = newOverAllState.getIn(['references', 'items']) ? newOverAllState.setIn(['references', 'items'], newReferenceList) : newOverAllState

    const url = `/rfa/a01/${this.state.application.get('id')}`
    return this.fetchToRails(url, 'PUT', finalState.toJS())
  }

  submit () {
    const newApp = this.state.application.setIn(['metadata', 'submit_enabled'], false)
    this.setState({application: newApp})
    this.saveProgress().then(() => {
      if (this.state.errors && !this.state.errors.issue_details) {
        const url = `/rfa/a01/${this.state.application.get('id')}/submit`
        this.fetchToRails(url, 'POST', newApp.toJS())
      }
    })
  }

  fetchToRails (url, method, body) {
    return fetchRequest(url, method, body)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (!data.issue_details) {
          this.setState({
            application: Immutable.fromJS(data),
            errors: {}
          })
        } else {
          this.setState({
            errors: data
          })
        }
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
  }

  setApplicationState (key, value) {
    if (Immutable.Iterable.isIterable(value) === false) {
      value = Immutable.fromJS(value)
    }
    const newStateApplication = this.state.application.set(key, value)

    newStateApplication.setIn(['metadata', 'submit_enabled'],
      (!validateStatus(this.state.application.get('status')) &&
    this.validateAllRequiredForSubmit(this.state.application.toJS())))

    this.setState({
      application: newStateApplication
    })
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  handleNavLinkClick (href) {
    this.setState({ activeNavLinkHref: href })
  }

  isNavLinkActive (href) {
    return this.state.activeNavLinkHref === href
  }

  render () {
    const stateApplicationJS = this.state.application.toJS()
    const applicantsAsJs = (this.state.application.get('applicants') && this.state.application.get('applicants').toJS()) || []

    return (
      <PageTemplate
        headerLabel='Resource Family Application - Confidential (RFA 01A)'
        saveProgressId='saveProgress'
        onSaveProgressClick={this.saveProgress}
        disableSave={this.state.disableSave}
        submitId={`submitApplication${stateApplicationJS.id}`}
        disableSubmit={this.state.disableSubmit}
        onSubmitClick={this.submit}
        rfa01aApplicationId={stateApplicationJS.id}
        onRfa01AForm
        rfa01cForms={stateApplicationJS.rfa1c_forms}
        otherAdults={stateApplicationJS.other_adults}
        applicants={applicantsAsJs}
        childIdentified={stateApplicationJS.child_desired && stateApplicationJS.child_desired.child_identified}
        isNavLinkActive={this.isNavLinkActive}
        handleNavLinkClick={this.handleNavLinkClick}
        errors={this.state.errors.issue_details} >

        <CountyUseOnlyCard
          countyUseOnlyCardId='county_use_only'
          setFocusState={this.setFocusState}
          getFocusClassName={this.getFocusClassName}
          county={getDictionaryId(stateApplicationJS.application_county)}
          CountyList={this.props.countyTypes}
          onFieldChange={(event) => this.setApplicationState('application_county',
            dictionaryNilSelect(event.target.options))} />

        <ScrollSpy onEnter={() => this.handleNavLinkClick('#applicants-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='applicants-card'>
            <ApplicantCardsGroup
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes}
              nameTypes={this.props.nameTypes}
              phoneTypes={this.props.phoneTypes}
              salaryTypes={this.props.salaryTypes}
              stateTypes={this.props.stateTypes}
              educationLevels={this.props.educationLevels}
              genderTypes={this.props.genderTypes}
              // raceTypes={this.props.raceTypes}
              ethnicityTypes={this.props.ethnicityTypes}
              languageTypes={this.props.languageTypes}
              focusComponentName={this.state.focusComponentName}
              application={this.state.application.toJS()}
              applicants={this.state.application.get('applicants') || undefined}
              setParentState={this.setApplicationState}
              setFocusState={this.setFocusState}
              getFocusClassName={this.getFocusClassName}
              hasValidName={this.state.disableSave}
              validator={this.validator}
              errors={this.state.errors.applicants} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#applicant-residence-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='applicant-residence-card'>
            <h3>II. Applicant (S) - <span>Residence</span></h3>
            <ResidenceCards
              focusComponentName={this.state.focusComponentName}
              residence={(this.state.application.get('residence') && this.state.application.get('residence').toJS()) || undefined}
              setFocusState={this.setFocusState}
              getFocusClassName={this.getFocusClassName}
              languageTypes={this.props.languageTypes}
              residenceTypes={this.props.residenceTypes}
              stateTypes={this.props.stateTypes}
              setParentState={this.setApplicationState}
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes}
              validator={this.validator} />
          </div>
        </ScrollSpy>

        { applicantsAsJs.length >= 2
          ? <ScrollSpy onEnter={() => this.handleNavLinkClick('#relationship-between-applicants-card')}>
            <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
              id='relationship-between-applicants-card'>
              <h3>III.<span>Relationship Between Applicant</span></h3>
              <RelationshipBetweenApplicantsCardMain
                focusComponentName={this.state.focusComponentName}
                relationshipBetweenApplicants={(this.state.application.get('applicants_relationship') && this.state.application.get('applicants_relationship').toJS()) || undefined}
                getFocusClassName={this.getFocusClassName}
                setParentState={this.setApplicationState}
                setFocusState={this.setFocusState}
                stateTypes={this.props.stateTypes}
                relationshipTypes={this.props.relationshipTypes}
                validator={this.validator}
                errors={this.state.errors.relationshipBetweenApplicants}
                applicants={applicantsAsJs} />
            </div>
          </ScrollSpy>
          : null
        }
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#minor-child-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='minor-child-card'>
            <h3>IV. <span>Minor Children Residing in the Home</span></h3>
            <MinorCardsGroup
              genderTypes={this.props.genderTypes}
              relationshipToApplicantTypes={this.props.relationshipToApplicantTypes}
              getFocusClassName={this.getFocusClassName}
              setFocusState={this.setFocusState}
              setParentState={this.setApplicationState}
              validator={this.validator}
              errors={this.state.errors.minorChildren}
              applicants={applicantsAsJs}
              minorChildren={(this.state.application.get('minor_children') && this.state.application.get('minor_children').toJS()) || undefined} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#other-adults-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='other-adults-card'>
            <h3>V.<span>Other Adults Residing or Regularly Present in the Home</span></h3>
            <p> Each adult residing or regularly present in the home must complete a Criminal Record Statement RFA 01B</p>
            <OtherAdultsCard
              getFocusClassName={this.getFocusClassName}
              setFocusState={this.setFocusState}
              setParentState={this.setApplicationState}
              validator={this.validator}
              errors={this.state.errors.otherAdults}
              applicants={applicantsAsJs}
              otherAdults={(this.state.application.get('other_adults') && this.state.application.get('other_adults').toJS()) || undefined}
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#marital-history-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='marital-history-card'>
            <h3>VI.<span>Applicant's Marital History</span></h3>
            <ApplicantMaritalHistoryCardGroup
              focusComponentName={this.state.focusComponentName}
              getFocusClassName={this.getFocusClassName}
              applicants={applicantsAsJs}
              applicantsHistory={(this.state.application.get('applicants_history') && this.state.application.get('applicants_history').toJS()) || undefined}
              setFocusState={this.setFocusState}
              setParentState={this.setApplicationState}
              relationshipToApplicantTypes={this.props.relationshipToApplicantTypes}
              relationshipTypes={this.props.relationshipTypes}
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes}
              nameTypes={this.props.nameTypes}
              stateTypes={this.props.stateTypes}
              marriageTerminationReasons={this.props.marriageTerminationReasons}
              validator={this.validator}
              errors={this.state.errors.applicantsHistory} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#child-desired-card')} >
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='child-desired-card'>
            <h3>VII.<span>Child Desired </span></h3>
            <ChildDesiredMain
              focusComponentName={this.state.focusComponentName}
              childDesired={(this.state.application.get('child_desired') && this.state.application.get('child_desired').toJS()) || undefined}
              getFocusClassName={this.getFocusClassName}
              setFocusState={this.setFocusState}
              setParentState={this.setApplicationState}
              siblingGroups={this.props.siblingGroups}
              ageGroups={this.props.ageGroups} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#foster-care-card')} >
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='foster-care-card'>
            <h3>VIII. Foster Care / Adoption / Licensure History</h3>
            {/*  todo: convert ...this.props to individual listed props */}
            <FosterCareHistoryCardMain
              focusComponentName={this.state.focusComponentName}
              fosterCareHistory={(this.state.application.get('adoption_history') && this.state.application.get('adoption_history').toJS()) || {}}
              getFocusClassName={this.getFocusClassName}
              setParentState={this.setApplicationState}
              setFocusState={this.setFocusState}
              {...this.props} />
          </div>
        </ScrollSpy>
        <ScrollSpy onEnter={() => this.handleNavLinkClick('#reference-card')}>
          <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'
            id='reference-card'>
            <h3>IX. References</h3>
            <ReferencesMain
              focusComponentName={this.state.focusComponentName}
              setParentState={this.setApplicationState}
              getFocusClassName={this.getFocusClassName}
              setFocusState={this.setFocusState}
              stateTypes={this.props.stateTypes}
              references={(this.state.application.get('references') && this.state.application.getIn(['references', 'items']).toJS()) || undefined}
              suffixTypes={this.props.suffixTypes}
              prefixTypes={this.props.prefixTypes}
              nameTypes={this.props.nameTypes}
              validator={this.validator}
              errors={this.state.errors.reference} />
          </div>
        </ScrollSpy>
      </PageTemplate>
    )
  }
}
