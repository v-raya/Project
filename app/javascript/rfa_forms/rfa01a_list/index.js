import React from 'react'
import './stylesheets/rfa01a_list.scss'
import PageHeader from 'components/common/pageHeader'
import RfaListPageHeaderButtons from 'components/common/rfaListPageHeaderButtons'
import ApplicationsTable from './applicationsTable'
import Link from 'react-wood-duck'
import {fetchRequest} from 'helpers/http'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import BreadCrumb from 'components/common/breadCrumb'

export default class Rfa01ListView extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.submitForSearch = this.submitForSearch.bind(this)
  }

  submit () {
    const url = '/rfa/a01/'
    const data = fetchRequest(url, 'POST').then(response => response.json())
    data.then(result => {
      return result
    }).then(result => {
      window.location.href = urlPrefixHelper(`/rfa/a01/${result.id}/edit`)
    })
  }

  submitForSearch () {
    window.location.href = urlPrefixHelper('/search')
  }

  render () {
    const checkForPriviliges = this.props.check_for_priviliges.length > 0 ? this.props.check_for_priviliges : null
    return (
      <div>
        <PageHeader
          HeaderTextClass='col-xs-12 col-sm-5 col-lg-6'
          headerLabel='RFA Applications'
          pageHeaderButtons = {
            <RfaListPageHeaderButtons
              buttonWrapClass='col-xs-12 col-sm-7 col-lg-6'
              disbaleRfaApplication= {this.props.disbaleRfaApplication}
              submit= {this.submit}
              checkForPriviliges={checkForPriviliges}
              submitForSearch={this.submitForSearch} />
          }
        />
        <BreadCrumb />
        <ApplicationsTable applications={this.props.applications} />
      </div>
    )
  }
}
