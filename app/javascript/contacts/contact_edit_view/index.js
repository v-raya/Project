import React from 'react'
import Immutable from 'immutable'
import _ from 'lodash'
import {fetchRequest} from 'helpers/http'
import Validator from 'helpers/validator'
import CardsGroupLayout from 'components/common/cardsGroupLayout'
import {InputComponent} from 'components/common/inputFields'
import {DateField} from 'components/common/dateFields'
import {TextAreaComponent} from 'components/common/textArea'
import {DropDownField} from 'components/common/dropDownField'
import YesNoRadioComponent from 'components/common/yesNoFields'
import BreadCrumb from 'components/common/breadCrumb'
import CancelSaveButtonGroup from 'components/common/pageHeaderButtons/cancelSaveGroup'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {RfaCommon} from 'constants/rfaText'
import {contactDefaults} from 'constants/defaultFields'
import InPersonData from './inPersonData'
import {getDictionaryId, dictionaryNilSelect, FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'

export default class ContactEditView extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.cancel = this.cancel.bind(this)
    this.setContactState = this.setContactState.bind(this)
    this.setInPersonData = this.setInPersonData.bind(this)

    this.state = {
      originalContact: this.props.contact || contactDefaults,
      contact: this.props.contact || contactDefaults,
      rfa_application: this.props.rfa_application,
      errors: null
    }
  }

  saveProgress () {
    let url, method
    if (this.state.contact.id) {
      url = '/rfa/a01/' + this.state.rfa_application.id + '/contacts/' + this.state.contact.id
      method = 'PUT'
    } else {
      url = '/rfa/a01/' + this.state.rfa_application.id + '/contacts/'
      method = 'POST'
    }
    return this.fetchToRails(url, method, this.state.contact)
  }

  cancel () {
    this.setState({
      contact: this.state.originalContact
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

  setContactState (key, value) {
    const newState = Immutable.fromJS(this.state.contact).set(key, value)
    this.setState({
      contact: newState.toJS()
    })
  }

  setInPersonData (key, value) {
    const newState = Immutable.fromJS(this.state.contact).setIn(
      ['in_person_contact_data', key], value)
    this.setState({
      contact: newState.toJS()
    })
  }

  render () {
    const contact = this.state.contact
    const inPersonContactData = this.state.contact.in_person_contact_data
    let classificationValue
    if (contact.classification !== '' && contact.classification !== null) {
      classificationValue = getDictionaryId(contact.classification) === 1
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='pull-left col-lg-10'>
              <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='contacts-card'>
                  <div className='edit card phone-section double-gap-top active-bar'>
                    <div className='card-header'><span>Contact Form</span></div>
                    <div className='card-body'>
                      <div className='row'>
                        <p>you can create a new contact to memorialize service and communication
                           with a client and anyone affiliated with the client.<br />
                           Note: all fields are optional unless labeled "Required."</p>
                      </div>
                      <div className='row' >
                        <div className='col-xs-4' >
                          <DateField
                            id='dateOfContact'
                            label={'Date' + RfaCommon.requiredIndicator}
                            value={FormatDateForDisplay(contact.date)}
                            onChange={(event) => this.setContactState('date', FormatDateForPersistance(event.target.value))} />
                        </div>
                        <div className='col-xs-2' />
                        <div className='col-xs-4' >
                          <YesNoRadioComponent
                            label={'Classification' + RfaCommon.requiredIndicator}
                            gridClassName='col-xs-6 no-padding'
                            labelDefaultYes='Confidential'
                            labelDefaultNo='Public'
                            idPrefix='contactClassification'
                            value={classificationValue}
                            onFieldChange={(event) => this.setContactState('classification', event.target.value === 'true' ? {id: 1, value: 'Confidential'} : {id: 2, value: 'Public'})} />
                        </div>
                      </div>
                      <div className='row' >
                        <div className='col-xs-4' >
                          <DropDownField
                            selectClassName='reusable-select'
                            id='methodOfContact'
                            value={getDictionaryId(contact.contact_method)}
                            optionList={this.props.contact_methods}
                            label={'Method of Contact' + RfaCommon.requiredIndicator}
                            onChange={(event) => this.setContactState('contact_method', dictionaryNilSelect(event.target.options))} />
                        </div>
                      </div>
                      <InPersonData
                        inPersonContactData={contact.in_person_contact_data}
                        setInPersonData={this.setInPersonData}
                        contactLocations={this.props.contact_locations}
                        contactVisitTypes={this.props.contact_visit_types} />
                      <div className='row' >
                        <div className='col-xs-12'>
                          <InputComponent
                            id='contactTitle'
                            label={'Title' + RfaCommon.requiredIndicator}
                            value={contact.title}
                            onChange={(event) => this.setContactState('title', event.target.value)} />
                          <TextAreaComponent
                            id='contactNotes'
                            value={contact.notes}
                            label='Notes'
                            placeholder=''
                            onChange={(event) => this.setContactState('notes', event.target.value)} />
                        </div>
                      </div>

                      <div className='row' >
                        <div className='cancelSaveGroup'>
                          <CancelSaveButtonGroup
                            idPrefix='contacts'
                            cancelAction={() => this.cancel()}
                            saveAction={() => this.saveProgress()} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
