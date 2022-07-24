import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css'
import { useForm } from "react-hook-form";
import { IoLogoFacebook } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoLinkedin } from "react-icons/io"

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "RfqPfSzxr61maVPmV";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        description: data.description
      },
      userID
    )
    r.target.reset()
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Message sent succesfully. We will contact you soon.");
      }).catch(err => console.error(`Something went wrong. ${err}`));
  };

  return (
    <div id="contact" className="contact">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="row">
            <div className="col-md-6 col-xs-12 message-content">
              <span className="success-message">{successMessage}</span>
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name with fewer that 20 characters",
                    },
                  })}
                />
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {
                    required: "Please provide your email",
                    pattern: {
                      value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Invalid Email",
                    }
                  })}
                />
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  className="form-control"
                  placeholder="Let us know...."
                  name="description"
                  {...register("description", {
                    required: "You forgot to write your message",
                  })}
                ></textarea>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="contact-btn"  type="submit">Send</button>
            </div>
            <div className="col-md-6 col-xs-12 contact-info">
              <div>
                <h3>Email</h3>
                <p>miess@iitr.ac.in</p>
              </div>
              <div>
                <h3>Address</h3>
                <p>Mechanical and Industrial Department, IIT Roorkee 247667, Uttarakhand, India </p>
              </div>
              <div className='contactIcons'>
                <div className="contactIcon"><a href='mailto:miess@iitr.ac.in'><MdEmail className='icon' /></a></div>
                <div className="contactIcon"><a href='https://www.linkedin.com/in/miess-iitr-736453245/'><IoLogoLinkedin className='icon' /></a></div>
                <div className="contactIcon"><a href='https://instagram.com/miess_iitr?igshid=YmMyMTA2M2Y='><AiFillInstagram className='icon' /></a></div>
                <div className="contactIcon"><a href='https://www.facebook.com/MIESS.IITR/'><IoLogoFacebook className='icon' /></a></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="copyright">
        <p>Copyrights&copy;2022 Mechanical and Industrial Engineering Student's Society | All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Contact
