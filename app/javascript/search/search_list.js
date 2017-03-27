import React from 'react';
import ReactDOM from 'react-dom';

export default class Search_list extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Facility Name</th>
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
                        <tr>
                            <th scope="row">Facility Name 1</th>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith</td>
                        </tr>
                        <tr>
                            <th scope="row">Facility Name 2</th>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith</td>
                        </tr>
                        <tr>
                            <th scope="row">Facility Name 3</th>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith</td>
                        </tr>
                        <tr>
                            <th scope="row">Facility Name 4</th>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith</td>
                        </tr>
                        <tr>
                            <th scope="row">Facility Name 5</th>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}