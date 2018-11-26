import React from 'react'
import Immutable from 'immutable'
import CriminalBackgroudDocument from './criminalBackgroudDocument'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import TrackingButtons from 'components/common/pageHeaderButtons/trackingButtons'
import TrackingSideBar from '../tracking/trackingSideBar'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class Rfa02EditView extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.editProgress = this.editProgress.bind(this)
    this.cancelProgress = this.cancelProgress.bind(this)
    this.handleHrefClick = this.handleHrefClick.bind(this)
    this.isNavLinkActive = this.isNavLinkActive.bind(this)
    this.setApplicationState = this.setApplicationState.bind(this)
    this.state = {
      user: this.props.user,
      tracking: this.props.tracking,
      rfa02: Immutable.fromJS(this.props.rfa02),
      cardBeingEdited: false,
      activeNavLinkHref: ''
    }
    this.rfaBaseState = this.props.rfa02
  }
  editProgress (event) {
    this.setState({ cardBeingEdited: true })
  }

  cancelProgress (event) {
    const oldState = this.rfaBaseState
    this.setState({
      cardBeingEdited: false,
      rfa02: Immutable.fromJS(oldState)
    })
  }

  setApplicationState (key, value) {
    const stateObj = Immutable.fromJS(this.state.rfa02)
    const newState = stateObj.set(key, value)
    this.setState({
      rfa02: newState
    })
  }

  saveProgress (event) {
    this.setState({ cardBeingEdited: false })
    const url = '/trackings/' + this.state.tracking.id + '/a02/' + this.state.rfa02.get('id')
    fetchRequest(url, 'PUT', this.state.rfa02.toJS())
      .then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({
          cardBeingEdited: false,
          rfa02: Immutable.fromJS(data)
        })
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
    this.rfaBaseState = this.state.rfa02
  }

  handleHrefClick (href) {
    this.setState({ activeNavLinkHref: href })
  }

  isNavLinkActive (href) {
    return this.state.activeNavLinkHref === href
  }

  render () {
    const facilityName = this.state.tracking.facility_name || ''
    return (
      <div id='rfa-02-edit' className='tracking-main-page'>
        <PageHeader
          headerLabel={'RFA Application'}
          pageHeaderButtons={
            <TrackingButtons
              editMode={this.state.cardBeingEdited}
              cancelProgress={this.cancelProgress}
              saveProgress={this.saveProgress}
              editProgress={this.editProgress} />} />
        <BreadCrumb
          navigationElements={[
            <a href={urlPrefixHelper('/')}>RFA Application list</a>,
            <a href={urlPrefixHelper('/rfa/a01/' + this.state.tracking.rfa_1a_id + '/tracking/' + this.state.tracking.id + '/edit')}>
            RFA-Tracking</a>
          ]} />
        <div className='container'>
          <div className='row'>
            <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='left-content col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                <TrackingSideBar
                  handleHrefClick={this.handleHrefClick}
                  facilityName={facilityName}
                  people={this.state.rfa02.get('people').toJS()}
                  isNavLinkActive={this.isNavLinkActive} />
              </div>
              <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                <CriminalBackgroudDocument
                  setState={this.setApplicationState}
                  people={this.state.rfa02.get('people')}
                  editMode={this.state.cardBeingEdited}
                  handleHrefClick={this.handleHrefClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
