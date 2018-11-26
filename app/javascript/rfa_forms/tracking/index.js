import React from 'react'
import Immutable from 'immutable'
import TrackingDocument from './trackingDocument'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import TrackingButtons from 'components/common/pageHeaderButtons/trackingButtons'
import TrackingSideBar from './trackingSideBar'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.editProgress = this.editProgress.bind(this)
    this.cancelProgress = this.cancelProgress.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.setPeopleDocumentsState = this.setPeopleDocumentsState.bind(this)
    this.handleHrefClick = this.handleHrefClick.bind(this)
    this.isNavLinkActive = this.isNavLinkActive.bind(this)
    this.state = {
      user: this.props.user,
      rfaApplication: this.props.rfaApplication,
      tracking: this.props.tracking,
      cardBeingEdited: false,
      activeNavLinkHref: ''
    }
  }

  editProgress (event) {
    this.setState({ cardBeingEdited: true })
  }

  cancelProgress (event) {
    this.setState({
      cardBeingEdited: false,
      tracking: this.props.tracking
    })
  }

  saveProgress (event) {
    this.setState({ cardBeingEdited: false })
    const url = '/rfa/a01/' + this.state.rfaApplication.id + '/tracking/' + this.state.tracking.id
    fetchRequest(url, 'PUT', this.state.tracking)
      .then((response) => {
        return response.json()
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
  }

  setApplicationState (key, value) {
    let newState = Immutable.fromJS(this.state)
    newState = newState.setIn(['tracking', 'tracking_documents', 'facility_documents', key], value)
    this.setState(newState.toJS())
  }

  setPeopleDocumentsState (key, value) {
    const newState = Immutable.fromJS(this.state)
    const stateUpdate = newState.setIn(['tracking', 'tracking_documents', key], value)
    this.setState(stateUpdate.toJS())
  }

  handleHrefClick (href) {
    this.setState({ activeNavLinkHref: href })
  }

  isNavLinkActive (href) {
    return this.state.activeNavLinkHref === href
  }

  render () {
    const trackingDocuments = this.state.tracking.tracking_documents
    const facilityName = this.state.tracking.facility_name || ''
    return (
      <div className='tracking-main-page'>
        <PageHeader
          headerLabel={facilityName + '-RFA Application'}
          pageHeaderButtons={
            <TrackingButtons
              editMode={this.state.cardBeingEdited}
              cancelProgress={this.cancelProgress}
              saveProgress={this.saveProgress}
              editProgress={this.editProgress} />} />
        <BreadCrumb
          navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
        <div className='container'>
          <div className='row'>

            <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='left-content col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                <TrackingSideBar
                  handleHrefClick={this.handleHrefClick}
                  facilityName={facilityName}
                  titleSuffix={'Family RFA Documents'}
                  people={trackingDocuments.people_documents}
                  isNavLinkActive={this.isNavLinkActive} />
              </div>
              <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                <TrackingDocument
                  trackingId={this.state.tracking.id}
                  rfa02Id={this.state.tracking.rfa_02_id}
                  facilityName={facilityName}
                  setParentState={this.setApplicationState}
                  setPeopleDocumentsState={this.setPeopleDocumentsState}
                  trackingDocuments={trackingDocuments}
                  editMode={this.state.cardBeingEdited}
                  handleHrefClick={this.handleHrefClick}
                  isNavLinkActive={this.isNavLinkActive} />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

TrackingList.defaultProps = {
  tracking: {},
  rfaApplication: {}
}
