import React from 'react'
import PropTypes from 'prop-types'
import LogoHeader from 'components/common/logoHeader'
import PageHeader from 'components/common/pageHeader'
import RfaSideBar from 'rfa_forms/rfa_sidebar/index'
import Rfa01PageHeaderButtons from 'components/common/rfa01PageHeaderButtons'
import Button from 'components/common/button'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import BreadCrumb from 'components/common/breadCrumb'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

const PageTemplate = ({
  headerLabel,
  pageSubHeader,
  disableSave,
  onSaveProgressClick,
  disableSubmit,
  onSubmitClick,
  applicants,
  rfa01aApplicationId,
  rfa01cForms,
  otherAdults,
  onRfa01AForm,
  childIdentified,
  isNavLinkActive,
  handleNavLinkClick,
  pageHeaderButtons,
  errors,
  children
}) => (
  <div className='main_page'>
    <LogoHeader />
    <PageHeader
      headerLabel={headerLabel}
      pageSubHeader={pageSubHeader}
      pageHeaderButtons={
        <Rfa01PageHeaderButtons
          buttonWrapClass='col-xs-12 col-sm-5'
          disableSave={disableSave}
          onSaveProgressClick={onSaveProgressClick}
          disableSubmit={disableSubmit}
          onSubmitClick={onSubmitClick}
        />}
    />
    <div>
      <BreadCrumb
        navigationElements={[<a href={urlPrefixHelper('/')}>RFA Application list</a>]} />
    </div>
    <div className='form-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='left-content col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <RfaSideBar
          rfa01aApplicationId={rfa01aApplicationId}
          rfa01cForms={rfa01cForms}
          otherAdults={otherAdults}
          applicants={applicants}
          onRfa01AForm={onRfa01AForm}
          childIdentified={childIdentified}
          isNavLinkActive={isNavLinkActive}
          handleNavLinkClick={handleNavLinkClick} />
      </div>
      <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
        <ApiErrorMessages errors={errors} />
        {children}
      </div>
    </div>
  </div>
)

PageTemplate.propTypes = {
  headerLabel: PropTypes.string,
  pageHeaderButtons: PropTypes.node,
  pageSubHeader: PropTypes.string,
  buttonId: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonTextAlignment: PropTypes.string,
  onButtonClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

PageTemplate.defaultProps = {
  headerLabel: 'To implement',
  disableSave: false
}

export default PageTemplate
