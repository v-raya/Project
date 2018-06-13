import React from 'react'
import Immutable from 'immutable'
import TrackingDocument from './trackingDocument'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.editSaveToggle = this.editSaveToggle.bind(this)
    this.editProgress = this.editProgress.bind(this)
    this.state = {
      user: this.props.user,
      rfaApplication: this.props.rfaApplication,
      tracking: this.props.tracking,
      cardBeingEdited: false
    }
  }

  editProgress (event) {
    this.setState({ cardBeingEdited: true })
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

  editSaveToggle () {
    const { cardBeingEdited, tracking } = this.state
    return cardBeingEdited ? <div>tracking id: {tracking.id}</div> : <div>rfa_1a_id: {tracking.rfa_1a_id}</div>
  }

  render () {
    const trackingDocuments = this.state.tracking.tracking_documents
    return (
      <div className='tracking_page'>
        <PageHeader
          headerLabel='RFA Tracking'
          pageHeaderButtons={
            <div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <Button
                  buttonId='saveProgress'
                  label='Save '
                  textAlignment='right'
                  onClick={this.saveProgress}
                />
              </div>
              {/* This button will be moved to card header */}
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                <Button
                  buttonId='editProgress'
                  label='Edit '
                  textAlignment='left'
                  onClick={this.editProgress}
                />
              </div>
            </div>}
        />
        <BreadCrumb
          navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
        <CardsGroupLayout>
          {this.editSaveToggle()}
          <TrackingDocument
            trackingDocuments={trackingDocuments}
            editMode={this.state.cardBeingEdited}
          />
        </CardsGroupLayout>
      </div>
    )
  }
}

TrackingList.defaultProps = {
  tracking: {},
  rfaApplication: {}
}
