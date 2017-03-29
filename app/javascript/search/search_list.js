import React from 'react';
import ReactDOM from 'react-dom';

export default class Search_list extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Facility Name <span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Facility license/ Approval #<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Facility Type<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Status<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Licensee Name<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Facility Address<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>County<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Phone Number<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Facility Email<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                            <th>Assigned Worker<span className="glyphicon pull-right glyphicon-chevron-down"></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Facility Name 1</td>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith<p>Phone: <span>123-123-1234</span></p></td>
                        </tr>
                        <tr>
                            <td>Facility Name 2</td>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith<p>Phone: <span>123-123-1234</span></p></td>
                        </tr>
                        <tr>
                            <td>Facility Name 3</td>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith<p>Phone: <span>123-123-1234</span></p></td>
                        </tr>
                        <tr>
                            <td>Facility Name 4</td>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith<p>Phone: <span>123-123-1234</span></p></td>
                        </tr>
                        <tr>
                            <td>Facility Name 5</td>
                            <td>1234561</td>
                            <td>RFA</td>
                            <td>Active</td>
                            <td>Mary Jones</td>
                            <td>1234 Pleasant Street,
                                Smallville, CA 08765</td>
                            <td>Los Angeles</td>
                            <td>123-123-1234</td>
                            <td>lovinghome@gmail.com</td>
                            <td>Tom Smith <p>Phone: <span>123-123-1234</span></p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}