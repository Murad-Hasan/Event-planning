import React, { useContext } from 'react';
import { FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const eventData = {
          image: data.image,
          content: data.content,
          author: data.author
        }
        
        const url = `https://murmuring-crag-42998.herokuapp.com/addTestimonial`
      fetch(url, {
          method: 'POST' ,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => {
        alert('Add Successfully')
      })
      .catch(err => console.log(err))
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
     <h2 className="text-success text-center">Write a Review</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
               <FormLabel>Your Name:</FormLabel>
                <input
                  className="form-control my-3"
                  defaultValue={loggedInUser.username}
                  {...register("author", { required: true })}
                />
                {errors.author && (
                  <small className="text-danger">This field is required</small>
                )} <br/>
                <FormLabel>Write A Review:</FormLabel>
                <input
                  className="form-control my-3 "
                  placeholder="Write a short review"
                  {...register("content", { required: true , maxLength: 260 })}
                />
                {errors.content && (
                  <small className="text-danger"> Write down a review which length maximum 260 characters</small>
                )} <br/>
               <FormLabel>Your Image URL:</FormLabel>
                <input
                  className="form-control my-3"
                  defaultValue={loggedInUser.photo}
                  {...register("image")}
                />
                {errors.image && (
                  <small className="text-danger">This field is required</small>
                )}
                <br/>
                <input className='btn btn-success' type="submit" value="Submit"/>
        </form>
     </div>
 </div>
    </section>
    );
};

export default Review;