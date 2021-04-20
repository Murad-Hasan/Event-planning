import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import SideBarLink from "../SideBar/SideBarLink";
import "./OrderList.css";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-crag-42998.herokuapp.com/allOrderList")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);
 
const handelStatusUpdate = (e, order) => {
    console.log(e.target.innerText, order)
    const updateStatus = {
        id : order._id ,
        status: e.target.innerText
    }
    fetch("https://murmuring-crag-42998.herokuapp.com/updateOrderStatus", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStatus),
    })
        .then(res => res.json())
        .then(data => {
            alert("Status Updated Successfully")
            console.log(data);
        })
}


  return (
    <section>
      <DashBoardHeader />
      <div className="row m-0">
        <div className="col-md-3">
          <div className="side-bar">
            <SideBarLink />
          </div>
        </div>

        <div className="col-md-9  rounded dashboard-content">
          <h4 className="text-center text-success pt-2"> Order List </h4>
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
              {orderList.map((order) => (
                <tr>
                  <td>{order.username}</td>
                  <td>{order.email}</td>
                  <td>{order.serviceTitle}</td>
                  <td>{order.paymentId}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {order.status}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          Pending
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          On going
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => handelStatusUpdate(e, order)}
                        >
                          Done
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
