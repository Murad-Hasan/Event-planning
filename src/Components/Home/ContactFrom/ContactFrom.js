import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' ;
import './ContactFrom.css'
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div style={{ textAlign: "center" }} className="container mb-5 pb-5">
      <h3 className='title'>Stay Connect With Our Team</h3>
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center">
              <div className="col">
                <input
                  className="form-control my-3 input-form "
                  placeholder="Enter Your First Name"
                  {...register("fName", { required: true })}
                />
                {errors.fName && (
                  <small className="text-danger">This field is required</small>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control my-3 input-form"
                  placeholder="Enter Your Last Name"
                  {...register("lName", { required: true })}
                />
                {errors.lName && (
                  <small className="text-danger">This field is required</small>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control my-3 input-form"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-danger">This field is required</small>
                )}
              </div>
              <div className="col">
                <input
                  className="form-control my-3 input-form"
                  placeholder="Enter Your Phone Number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <small className="text-danger">This field is required</small>
                )}
              </div>
            </div>
            <div className="col-12">
              <textarea style={{width:'102%'}}
                className="form-control my-3 input-form"
                placeholder="Enter Your Subject"
                {...register("msg", { required: true })}
              ></textarea>

              {errors.msg && (
                <small className="text-danger">This field is required</small>
              )}
            </div>
            <br />
            <input className="msg-btn " type="submit" value='SEND'/>
          </form>
        </div>
        <div className="col-sm-4 mt-3">
          <div className='social-icon ' style={{}}><FontAwesomeIcon icon={faFacebookF} /></div>
          <div className='social-icon'><FontAwesomeIcon icon={faTwitter} /></div>
          <div className='social-icon'><FontAwesomeIcon icon={faLinkedin} /></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;