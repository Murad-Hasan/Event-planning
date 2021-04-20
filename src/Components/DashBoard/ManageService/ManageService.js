import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';

const ManageService = () => {
    const [manageOrderList, setManageOrderList] = useState([])
       
    useEffect(()=>{
        fetch('http://localhost:5000/allOrderList')
        .then(res => res.json())
        .then(data => setManageOrderList(data))
    },[])
    const deleteBooking = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => {
          console.log("response",res);
        })
        .catch((error) => {
          console.log('error massage for delete book',error);
      })
      setManageOrderList(manageOrderList.filter(user => user._id !== id))
       }
    return (
        <section>
        <DashBoardHeader/>
         <div className="row m-0">
     <div className="col-md-3">
     <div className='side-bar'>
     <SideBarLink/>
 </div>
     </div>
     <div className="col-md-9  rounded dashboard-content" >
     <Table striped bordered hover responsive className="auto-index">
  <thead>
    <tr>
      <th>User Name</th>
      <th>Email</th>
      <th>Service</th>
      <th>Manage</th>
    </tr>
  </thead>
  <tbody>
   {
       manageOrderList.map(order => (
        <tr>
        <td>{order.username}</td>
        <td>{order.email}</td>
        <td>{order.serviceTitle}</td>
        <td ><FontAwesomeIcon style={{cursor:'pointer'}} onClick={() => deleteBooking(order._id)} icon={faTrash}/></td>
      </tr>
       ))
   }
  </tbody>
</Table>
     </div>
 </div>
    </section>
    );
};

export default ManageService;