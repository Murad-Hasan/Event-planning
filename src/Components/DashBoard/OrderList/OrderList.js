import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';
import './OrderList.css'

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
       
    useEffect(()=>{
        fetch('https://murmuring-crag-42998.herokuapp.com/allOrderList')
        .then(res => res.json())
        .then(data => setOrderList(data))
    },[])
//    const {username, email, serviceTitle, paymentId} = orderList;
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
      <th>paymentId</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
   {
       orderList.map(order => (
        <tr>
        <td>{order.username}</td>
        <td>{order.email}</td>
        <td>{order.serviceTitle}</td>
        <td>{order.paymentId}</td>
        <select name="" id="">
            <option className='text-danger' value="1">Pending</option>
            <option className='text-warning' value="2">OnGoing</option>
            <option className='text-success' value="3">Done</option>
        </select>
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

export default OrderList;