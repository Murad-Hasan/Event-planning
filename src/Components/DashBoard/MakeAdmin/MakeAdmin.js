import React from 'react';
import { useForm } from 'react-hook-form';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import SideBarLink from '../SideBar/SideBarLink';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    
      const onSubmit = (data) => {
        fetch('https://murmuring-crag-42998.herokuapp.com/makeAdmin',{
          method: 'POST',
          headers: {'content-Type':'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
          if(success){
            alert('Admin Add Successful')
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
     <div className="col-md-9  rounded dashboard-content" >
     <div className="container pt-5">
        <div className="row">
          <div className="col-sm-8 pt-5">
          <form
            className="form-group col-sm-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input className="form-control my-3" {...register("name", { required: true })} placeholder="Enter Admin Name" />
            {errors.name && <span>Plese Enter Admin Name </span>}
            <input className="form-control my-3" {...register("email", { required: true })} placeholder="Enter Admin Email" />
            {errors.email && <span>Plese Enter Admin Email </span>}

            <input className='btn btn-success' type="submit" value='Confirm'/>
          </form>
          </div>
        </div>
      </div>
     </div>
 </div>
    </section>
    );
};

export default MakeAdmin;