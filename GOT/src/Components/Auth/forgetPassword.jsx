import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/LockLogo.jpg'


const forgetPassword = () => {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',

    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="loginbg">

      <div class="login-container w-100">

        <form onSubmit={formik.handleSubmit} className='login-form'>
          <span className=''><img className='pumaa' src={Logo} alt="LOCK logo" /></span>
          <h1>Trouble logging in?</h1>


          <p className="email">Please enter your email or mobile number so we will send link on your Mail for Resetting the Password</p>
          <input
            className={` ein mb-4  ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}

            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='Enter email or phone number'
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='mb-0 text-danger'>{formik.errors.email}</div>
          ) : null}


          <button type="submit" className={`logbtn ${formik.isValid ? 'blue-btn' : ''}`}>
            Send login link </button>
          <div class="bottom-text">
            <Link to="/login" onClick={() => navigate("/login")}>Back to login</Link>

          </div>
        </form>
      </div>
    </div>

  );
};
export default forgetPassword;