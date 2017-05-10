 import React from 'react'

 const title = 'Complaint History'

 export default class Complaints extends React.Component {
   render () {
     let FacilityComplaints = this.props.facilityData
     let complaints = FacilityComplaints.complaints
     let facilityComplaintsTable = []
     if (complaints) {
       facilityComplaintsTable = complaints.map((complaint) => {
         return (
           <tr key={complaint.id} >
             <td> {complaint.id} </td>
             <td> {complaint.complaint_date} </td>
             <td> {complaint.assigned_worker} </td>
             <td> {complaint.control_number} </td>
             <td> {complaint.priority_level} </td>
             <td> {complaint.status} </td>
             <td> {complaint.approval_date} </td>
           </tr>
         )
       })
     }
     return (
       <div className='facility-children col-xs-12 col-sm-12 col-md-12 col-lg-12'>
         <div className='facility-children-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
           <div className='children-title'> <h3> {title} </h3> </div>
           <table className='table'>
             <thead>
               <tr>
                 <th> ID </th>
                 <th> COMPLAINT DATE</th>
                 <th> ASSIGNED WORKER </th>
                 <th> CONTROL NUMBER </th>
                 <th> PRIORITY </th>
                 <th> STATUS </th>
                 <th> APPROVAL DATE </th>
               </tr>
             </thead>
             <tbody >
               {facilityComplaintsTable}
             </tbody>
           </table>
         </div>
       </div>
     )
   }
}
