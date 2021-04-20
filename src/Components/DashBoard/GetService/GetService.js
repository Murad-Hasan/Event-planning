import React, { useContext, useEffect, useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentMethod from '../../PaymentMethod/PaymentMethod';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';
import './GetService.css'


const GetService = () => {
  const { id } = useParams();  
  const [processOrderFormData, setProcessOrderFormData] = useState(null)
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const [loggedInUser, setLoggedInUser] = useContext(UserContext)
      const [book, setBook] = useState({});
      useEffect(() => {
        fetch("https://murmuring-crag-42998.herokuapp.com/singleService/" + id)
          .then((res) => res.json())
          .then((data) => setBook(data));
      }, [id]);
      
        const newBooking = {...book}
        const {serviceTitle, serviceDescription, imageURL, servicePrice} = newBooking;
        const{email, username} = loggedInUser;
       
      const onSubmit = (data) => {
        setProcessOrderFormData(data)
      }

      const handlePaymentSuccess = (paymentId) => {
        let today = new Date();
        let dateFormate=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
        
          const confirmOrder = {serviceTitle, serviceDescription, imageURL, servicePrice, paymentId, email, username, processOrderFormData, date: dateFormate}
              fetch('https://murmuring-crag-42998.herokuapp.com/addOrder', {
                method: 'POST' ,
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(confirmOrder)
            })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data) {
                alert('Order Placed')
              }
          })
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
        <div className="col-md-9  rounded dashboard-content">
        <div className="row">
        <h2 className='text-info'>Get Service:</h2> 
        <div style={{display: processOrderFormData ? 'none' : 'block' }} className="col-md-6 my-3"> <br/>
        {
          book.serviceTitle ?
          <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Selected Service Title:</FormLabel>
                <input
                  className="form-control "
                  defaultValue={book.serviceTitle}
                  {...register("serviceTitle")}
                />
                {errors.serviceTitle && (
                  <small className="text-danger"> This field is required</small>
                )}
               <FormLabel>Your Name:</FormLabel>
                <input
                  className="form-control"
                  defaultValue={loggedInUser.username}
                  {...register("author")}
                />
                {errors.author && (
                  <small className="text-danger">This field is required</small>
                )} <br/>
                <FormLabel>Email:</FormLabel>
                <input
                  className="form-control"
                  type='email'
                  defaultValue={loggedInUser.email}
                  {...register("email")}
                />
                {errors.email && (
                  <small className="text-danger">This field is required </small>
                )}
                <FormLabel>Address:</FormLabel>
                <input
                  className="form-control "
                  placeholder='Your Address'
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <small className="text-danger"> Write down your address which length maximum 100 characters</small>
                )} <br/>
                <FormLabel>Phone:</FormLabel>
                <input
                  className="form-control"
                  placeholder='Your phone number'
                  type='number'
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <small className="text-danger"> This field is required</small>
                )} <br/>
               
               <input className='btn btn-success' type="submit" value="Next"/>
                
            </form> : <h2 className="text-center">You ain't choose any Service</h2>
        }
        </div>
        <div style={{display: processOrderFormData ? 'block' : 'none' }} className="col-md-6 bg-black mt-5">
        <h5 className='text-danger text-center'>Your Service Charged Will Be: ${book.servicePrice}</h5>
        <p className='text-success text-center'>Pay Now:</p>
          <PaymentMethod paymentProcess={handlePaymentSuccess}/>
        </div>
        </div>
        </div>
    </div>
       </section>
    );
};

export default GetService;