import React from 'react';
import {DropDownField} from '../common/dropDownField';
import {TextAreaComponent} from '../common/textArea';


export default class AboutThisResidenceCard extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange (value) {
        var x = this;
        console.log(value)
    }
    render () {

        const stateNames = {
            "items": [
                {
                    "id": 1,
                    "value": "California"
                },
                {
                    "id": 2,
                    "value": "Colarado"
                }
            ]
        }

        const yesNo = {
            "items": [
                {
                    "id": 1,
                    "value": "Yes"
                },
                {
                    "id": 2,
                    "value": "No"
                }
            ]
        }

        return (
            <div className="card-body">
                <div className="row">
                    <form>
                        <DropDownField gridClassName='col-md-7'
                                       selectClassName={'reusable-select'}
                                       optionList={stateNames.items}
                                       label={"Do you own, rent or lease the residence?"}/>
                        <br></br>
                        <DropDownField gridClassName='col-md-7'
                                       selectClassName={'reusable-select'}
                                       optionList={yesNo.items}
                                       label={"Weapons in home?"}/>
                        <DropDownField gridClassName='col-md-7'
                                       selectClassName={'reusable-select'}
                                       optionList={yesNo.items}
                                       label={"Body of Water?"}/>
                        <DropDownField gridClassName='col-md-9'
                                       selectClassName={'reusable-select'}
                                       optionList={yesNo.items}
                                       label={"Does any person not listed in this document use the residence as their mailing address?"}/>
                        <TextAreaComponent gridClassName='col-md-12' id='directions'
                                        label='Please provide directions, including major cross-street information, to your residence.' placeholder='' />
                        <DropDownField gridClassName='col-md-12'
                                       selectClassName={'reusable-select'}
                                       optionList={stateNames.items}
                                       label={"Language(s) spoken in the home"}/>
                    </form>
                </div>
            </div>
        )
    }
}
