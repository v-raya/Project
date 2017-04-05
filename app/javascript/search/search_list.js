import React from 'react';
import ReactDOM from 'react-dom';

export default class Search_list extends React.Component {
    render() {
        let searchResult = this.props.searchResults;
        const resultTable = searchResult.map((result) => {
            return (
                <tr>
                    <td>{result.fac_name}</td>
                    <td>{result.fac_nbr}</td>
                    <td>{result.type}</td>
                    <td>{result.status}</td>
                    <td>{result.fac_licensee_name}</td>
                    <td>{result.fac_res_street_addr},
                        {result.fac_res_city}, {result.fac_res_state} {' ' + result.fac_res_zip_code}</td>
                    <td>{result.county}</td>
                    <td>{result.facility_telephone}</td>
                    <td>{result.fac_email_address}</td>
                    <td>{result.assigned_worker}<p>Phone: <span>N/A</span></p></td>
                </tr>
            )
        });
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Facility Name </th>
                            <th>Facility license/ Approval #</th>
                            <th>Facility Type</th>
                            <th>Status</th>
                            <th>Licensee Name</th>
                            <th>Facility Address</th>
                            <th>County</th>
                            <th>Phone Number</th>
                            <th>Facility Email</th>
                            <th>Assigned Worker</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultTable}
                    </tbody>
                </table>
            </div>
        )
    }
}