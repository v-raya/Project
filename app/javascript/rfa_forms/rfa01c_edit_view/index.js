import React from 'react'
import Immutable from 'immutable'
import _ from 'lodash'
import DesiredChildCardGroup from 'rfa_forms/rfa01c_edit_view/desiredChildCardGroup'
import {CountyUseOnlyCard} from 'components/rfa_forms/countyUseOnlyCard'
import {fetchRequest} from 'helpers/http'
import {checkForNameValidation, validateStatus} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import CardsGroupLayout from 'components/common/cardsGroupLayout'
import PageTemplate from 'components/common/pageTemplate'
import {getCountyValue, checkArrayObjectPresence, dictionaryNilSelect, checkSubmitEnabledForForms} from 'helpers/commonHelper.jsx'
import Button from 'components/common/button'

export default class Rfa01cEditView extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.submit = this.submit.bind(this)
    this.fetchToRails = this.fetchToRails.bind(this)
    this.getFocusClassName = this.getFocusClassName.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setFocusState = this.setFocusState.bind(this)
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
    this.isNavLinkActive = this.isNavLinkActive.bind(this)
    this.validator = new Validator({})
    this.validator.validateFieldSetErrorState = this.validateFieldSetErrorState.bind(this)
    this.checkBFormsForSubmit = this.checkBFormsForSubmit.bind(this)

    let submitEnabled = false

    if (this.props.rfa_a01_application.metadata !== undefined) {
      submitEnabled = this.props.rfa_a01_application.metadata.submit_enabled
      submitEnabled = submitEnabled && this.checkBFormsForSubmit()
      if (this.props.rfa_c1_application.metadata === undefined) {
        submitEnabled = false
      } else {
        submitEnabled = submitEnabled && this.props.rfa_c1_application.metadata.submit_enabled &&
            this.validateAllRequiredForSubmit(this.props.rfa_c1_application)
      }
    }

    this.state = {
      focusComponentName: '',
      application: this.props.rfa_c1_application,
      rfa_a01_application: this.props.rfa_a01_application,
      activeNavLinkId: this.props.rfa_c1_application.id,
      errors: {},
      disableSubmit: !submitEnabled
    }
  }

  checkBFormsForSubmit () {
    return this.props.rfa_b01_applications && this.props.rfa_b01_applications.every(checkSubmitEnabledForForms)
  }

  validateAllRequiredForSubmit (data) {
    let requiredRules = this.validator.allIsRequiredRules()
    requiredRules = requiredRules.merge(this.validator.allValidationsWithOnlyRule('isRequiredBoolean'))
    return this.validator.validateAllFieldsWithRules(data, requiredRules)
  }

  validateFieldSetErrorState (fieldName, value) {
    const error = this.validator.validateFieldAndGetError(fieldName, value)
    let currentErrors = this.state.errors
    if (error === undefined) {
      _.unset(currentErrors, fieldName)
    } else {
      _.set(currentErrors, fieldName, error)
    }
    this.setState({errors: currentErrors})
  }

  saveProgress () {
    let newApp = Immutable.fromJS(this.state.application).setIn(['metadata', 'submit_enabled'],
      this.validateAllRequiredForSubmit(this.state.application))
    let url = '/rfa/a01/' + this.state.rfa_a01_application.id + '/c01/' + this.state.application.id
    return this.fetchToRails(url, 'PUT', newApp.toJS())
  }

  submit () {
    this.saveProgress().then(() => {
      if (this.state.errors && !this.state.errors.issue_details) {
        let newApp = Immutable.fromJS(this.state.application).setIn(['metadata', 'submit_enabled'], false)
        const url = '/rfa/a01/' + this.state.rfa_a01_application.id + '/c01/' + this.state.application.id + '/submit'
        this.fetchToRails(url, 'POST', {a01_id: this.state.rfa_a01_application.id, c01_id: this.state.application.id})
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
            application: data,
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
    let newState = Immutable.fromJS(this.state.application).set(key, value)
    this.setState({
      application: newState.toJS(),
      disableSubmit: !(this.validateAllRequiredForSubmit(newState.toJS()) && this.checkBFormsForSubmit())
    })

    Immutable.fromJS(this.state.application).setIn(['metadata', 'submit_enabled'],
      !(this.validateAllRequiredForSubmit(newState.toJS()) && this.checkBFormsForSubmit()))
  }

  setFocusState (focusComponentName) {
    this.setState({focusComponentName: focusComponentName})
  }

  getFocusClassName (componentName) {
    return this.state.focusComponentName === componentName ? 'edit' : 'show'
  }

  handleNavLinkClick (id) {
    if (id) {
      this.setState({ activeNavLinkId: id })
    }
  }

  isNavLinkActive (id) {
    return this.state.activeNavLinkId === id
  }

  render () {
    return (
      <PageTemplate
        headerLabel='Resource Family Application - Confidential (RFA 01C)'
        saveProgressId='desiredChildCardsaveProgress'
        onSaveProgressClick={this.saveProgress}
        disableSave={this.state.disableSave}
        submitId={'submitApplication' + this.state.rfa_a01_application.id}
        disableSubmit={this.state.disableSubmit}
        onSubmitClick={this.submit}
        rfa01aApplicationId={this.state.rfa_a01_application.id}
        rfa01cForms={this.state.rfa_a01_application.rfa1c_forms}
        applicants={this.state.rfa_a01_application.applicants}
        otherAdults={this.state.rfa_a01_application.other_adults}
        childIdentified={this.state.rfa_a01_application.child_desired &&
        this.state.rfa_a01_application.child_desired.child_identified}
        isNavLinkActive={this.isNavLinkActive}
        handleNavLinkClick={this.handleNavLinkClick}
        errors={this.state.errors.issue_details} >
        <CardsGroupLayout>
          <CountyUseOnlyCard
            countyUseOnlyCardId='county_use_only'
            setFocusState={this.setFocusState}
            getFocusClassName={this.getFocusClassName}
            county={getCountyValue(this.state.application, this.props.user)}
            CountyList={this.props.countyTypes}
            onFieldChange={(event) => this.setApplicationState('application_county',
              dictionaryNilSelect(event.target.options))} />
        </CardsGroupLayout>
        <CardsGroupLayout>
          <h2>VII.<span>Desired Child</span></h2>
          <p> (to be completed if a child has been identified prior to approval)</p>
          <DesiredChildCardGroup
            focusComponentName={this.state.focusComponentName}
            getFocusClassName={this.getFocusClassName}
            setParentState={this.setApplicationState}
            identifiedChildren={checkArrayObjectPresence(this.state.application.identified_children) || undefined}
            applicants={this.state.rfa_a01_application.applicants}
            setFocusState={this.setFocusState}
            stateTypes={this.props.stateTypes}
            suffixTypes={this.props.suffixTypes}
            schoolGrades={this.props.schoolGrades}
            genderTypes={this.props.genderTypes}
            countyTypes={this.props.countyTypes}
            validator={this.validator}
            errors={this.state.errors.child}
            nameSuffixTypes={this.props.nameSuffixTypes} />
        </CardsGroupLayout>
      </PageTemplate>
    )
  }
}
