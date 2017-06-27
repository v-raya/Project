import React from 'react';
import AddressCard from './address_card'
import AboutThisResidenceCard from './about_this_residence_card'

export default class ResidenceCards extends React.Component {
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
        this.setField = this.setField.bind(this)
    }
    setField(fieldSeq, value) {
        const formData = this.state.formData.setIn(fieldSeq, value)
        this.setState({formData: formData})
    }
    submitForm() {
        console.log("Hello")
    }
    render () {
        const {formData} = this.state
        return (
            <div className="residence_cards">
                <div className="card edit phone-section double-gap-top">
                    <div className="card-header">
                        <span>Address</span>
                    </div>
                    <AddressCard />
                </div>
                <div className="card edit phone-section double-gap-top">
                    <div className="card-header">
                        <span>About This Residence</span>
                    </div>
                    <AboutThisResidenceCard />
                </div>
            </div>
        )
    }
}
