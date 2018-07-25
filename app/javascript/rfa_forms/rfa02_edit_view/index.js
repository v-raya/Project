import React from 'react'
import Immutable from 'immutable'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import Button from 'components/common/button'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import BreadCrumb from 'components/common/breadCrumb'
import TrackingButtons from 'components/common/pageHeaderButtons/trackingButtons'
// import a02SideBar from './a02SideBar'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchRequest} from 'helpers/http'

export default class Rfa02EditView extends React.Component {
  constructor (props) {
    super(props)
    this.saveProgress = this.saveProgress.bind(this)
    this.editProgress = this.editProgress.bind(this)
    this.cancelProgress = this.cancelProgress.bind(this)
    this.state = {
      user: this.props.user,
      tracking: this.props.tracking,
      rfa02: this.props.rfa02,
      cardBeingEdited: false
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
    const url = '/trackings/' + this.state.tracking.id + '/a02/' + this.state.rfa02.id
    fetchRequest(url, 'PUT', this.state.rfa02)
      .then((response) => {
        return response.json()
      }).catch((errors) => {
        this.setState({
          errors: errors
        })
      })
  }

  render () {
    return (
      <div className='tracking-main-page'>
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
                SIDEBAR
              </div>
              <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                <h1>RFA 02</h1>
                hi {'trackings/' + this.state.tracking.id + '/a02/' + this.state.rfa02.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
