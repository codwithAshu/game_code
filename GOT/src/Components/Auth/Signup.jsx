// Import necessary stylesheets and dependencies
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Make sure to create a CSS file for your component styles
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../store/authSlice/authSlice';
import warningImage from '../../assets/enter.jpg'
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.authSlice)
  console.log("selector", selector);
  const loading = selector.loading
  const show = selector.show
  const data = selector.data
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is Required'),
      email: Yup.string().email('Invalid email address').required('email address is Required'),
      password: Yup.string()
        .required('Password is Required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),
      confirm_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("password"), null], "password not match"),
    }),
    onSubmit: async (values) => {
      try {

        await axios.post('https://66a25194967c89168f1f9c6c.mockapi.io/game-login', {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          confirm_password: values.confirm_password,
        });
        // Navigate to another route or show success message
        navigate('/login', { state: { email: values.email } });
      }

      catch (error) {
        // Handle API errors
        console.error('Error during signup:', error);
        // Optionally show error message to user
      }






      // alert(JSON.stringify(values, null, 2));
      // dispatch(signUp(values)).unwrap().then((response) => {

      // })

    },
  });




  return (
    <>
      <div className='img bg-primary'>

        <form className='foorm' onSubmit={formik.handleSubmit}>
          <h2 className='text-center mb-4'>signUp</h2>
          <div className='form-group'>
            <div className='input-group'>

              <input
                id='firstName'
                name='firstName'
                type='text'
                className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'bg-danger' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder='First Name'
              />

              <input
                id='lastName'
                name='lastName'
                type='text'
                className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'bg-danger' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder='last Name'
              />

            </div>
            <div className='flexx d-flex'>

              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='error-message'>{formik.errors.firstName}</div>
              ) : null}
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='error-message'>{formik.errors.lastName}</div>
              ) : null}
            </div>


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
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error-message'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className='form-group'>
            <input
              id='password'
              name='password'
              type='password'
              className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder='enter your password'
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='error-message'>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className='form-group'>
            <input
              placeholder='Confirm your password'
              id="confirm_password"
              name="confirm_password"
              type="  password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
            />
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
              <div className='error-message'>{formik.errors.confirm_password}</div>
            ) : null}{" "}
          </div>
          <div className='dis '>
            <button type='submit' className='btnsubmit ' >
              Submit
            </button>
            <p className=" mt-2">

              If you have already Account ? <Link to="/login" className="ms-1 " onClick={() => navigate("/login")}>
                Log In
              </Link>
            </p>




          </div>
        </form>

      </div>
    </>

  );
};

export default SignupForm;
