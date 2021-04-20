import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     
      const [imageURL, setImageURL] = useState(null);

      const onSubmit = (data) => {
        console.log(data);
        const eventData = {
          serviceTitle: data.title,
          serviceDescription: data.description,
          servicePrice: data.price,
          imageURL: imageURL
      }
      const url = `http://localhost:5000/addService`
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
      
    
      const handleImageUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '670ec3a6ba30609eb1aafc1fbf9ec529');
        imageData.append('image', e.target.files[0])
       //axios 
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res=> {
          console.log(res.data);
            setImageURL(res.data.data.url)
            console.log('image Uploaded Successfully', res.data.data.url)
        })
        .catch(err => console.log(err.massage))
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
         <h2 className="text-success text-center">Add New Service</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control my-3 "
                  placeholder="Enter Service Title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <small className="text-danger">This field is required</small>
                )}
                <input
                  className="form-control my-3"
                  placeholder="Enter Service Description"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <small className="text-danger">This field is required</small>
                )}
                <input
                  className="form-control my-3"
                  type='number'
                  placeholder="Enter Service Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <small className="text-danger">This field is required</small>
                )}
                <input
                  className="form-control my-3"
                  {...register("icon" , { required: true })}
                  onChange={handleImageUpload}
                  type='file'
                />
                {errors.icon && (
                  <small className="text-danger">This field is required</small>
                )}
                <br/>
                <input
                    type='submit'
                    value='Add Service'
                    className='btn btn-dark'
                />
        </form>
     </div>
 </div>
    </section>
    );
};

export default AddService;