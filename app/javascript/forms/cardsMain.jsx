import React from 'react';
import NameCard from './name_card'
import PhoneComponent from './phoneNumber_card'
import AboutApplicant from './aboutApplicant_card'
import Employment from './employment_card'


export default class Cards extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      formData: {
        first_name: null,
        last_name: null,
        name_suffix: null,
        gender: null,
        date_of_birth: null,
        ssn: null,
        languages: [],
        races: [],
      },
    }
  }
  render () {
    const {formData} = this.state
    return (
      <div className="cards">
        <div className="card edit name-section double-gap-top">
          <div className="card-header">
            <span>Name</span>
          </div>
          <NameCard />
        </div>
        <div className="card edit phone-section double-gap-top">
          <div className="card-header">
            <span>Phone Number</span>
          </div>
          <PhoneComponent />
        </div>
        <div className="card edit phone-section double-gap-top">
          <div className="card-header">
            <span>More about Applicant</span>
          </div>
          <AboutApplicant />
        </div>
        <div className="card edit phone-section double-gap-top">
          <div className="card-header">
            <span>Employment</span>
          </div>
          <Employment />
        </div>
      </div>
    )
  }
}
