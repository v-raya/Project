import React from 'react';
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';



export default class AddressCard extends React.Component {

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
                    <InputComponent gridClassName='col-md-12' id='physicalAddress'
                                    label='Physical Address:' placeholder='Enter Physical Address'

                    />
                    <InputComponent gridClassName='col-md-4' id='zip'
                                    label='Zip Code:' placeholder='Ex:12345' />
                    <InputComponent gridClassName='col-md-4' id='lastName'
                                    label='City:' placeholder='Enter City' />
                    <DropDownField gridClassName='col-md-4'
                                   selectClassName={'reusable-select'}
                                   optionList={stateNames.items}
                                   label={"This was for select Label"}/>
                    <DropDownField defaultValue="ddd"
                                   gridClassName='col-md-6'
                                   selectClassName={'reusable-select'}
                                   optionList={yesNo.items}
                                   label={"Mailing address the same as Physical Address?"}/>
                </form>
                    </div>
                </div>
        )
    }
}
