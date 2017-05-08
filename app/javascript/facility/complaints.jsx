 import React from 'react'

 const title = 'Complaint History'

 const FacilityComplaints = {
   count: 3,
   complaints: [{
     id: 22,
     complaint_date: '01-02-2015',
     assigned_worker: 'Mr. X',
     control_number: '21-CR-2017042501538',
     priority_level: 1,
     status: 'Pending',
     approval_date: '04-07-2015'
   }, {
     id: 28,
     complaint_date: '01-02-2016',
     assigned_worker: 'Mrs. Q',
     control_number: '21-CR-20170422301533',
     priority_level: 3,
     status: 'Approved',
     approval_date: '01-28-2016'
   }, {
     id: 39,
     complaint_date: '01-02-2015',
     assigned_worker: 'Mr. m',
     control_number: '21-CR-2017042501590',
     priority_level: 2,
     status: 'Pending',
     approval_date: '01-02-2015'
   }]
 }

 export default class Complaints extends React.Component {
   render () {
      //  let FacilityComplaints = this.props.FacilityComplaints
      // since we don't have api set up to send us correct complaint yet,
      // lets mock the response here

     const facilityComplaintsTable = FacilityComplaints.complaints.map((complaint) => {
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
