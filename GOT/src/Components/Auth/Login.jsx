
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Auth/css/log1.css'
import loginlogo from '../../assets/logologin1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';



const LogIn = () => {
  const location = useLocation();
  const { state } = location;
  const initialEmail = state?.email || '';



  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },




    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(

          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),


    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };







  return (
    <div className='cantainer'>
      <div className='signupimg'>
        <div className="logincontainer">
          <form onSubmit={formik.handleSubmit} className=' container-form'>
            <div className="loginp">
              <span className=''><img className='gamelogo' src={loginlogo} alt="LOCK logo" /></span>

              <h5 className='ltext-center mb-4 mt-0 '>Sign in with an Ashu Games account</h5>
            </div>

            <div className='form-group'>
              <input
                id='email'
                name='email'
                type='email'
                className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder='Email Address'
                defaultValue={initialEmail}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='logerror-message'>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='form-group'>
              <div className='password-input'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder='enter your password'
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                  className="password-icon"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className='logerror-message'>{formik.errors.password}</div>
              ) : null}
            </div>
            <button className='btnlogin'> logIn</button>
            <p className='account'>Don't have Ashu Game account?</p>


            <button className='signup' onClick={() => navigate("/signUp")}>Sign Up</button>

            <Link to='/forgetPassword' className='mt-3' onClick={() => navigate('/forgetPassword')}>
              Forget your password?
            </Link>

          </form>

        </div >
      </div >
    </div>
  );
};
export default LogIn;