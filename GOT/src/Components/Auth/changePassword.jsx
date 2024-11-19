import React from 'react'
import { NavLink } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UpdatePassword = () => {
  const formik = useFormik({
    initialValues: {
      newpassword: '',
      conformpassword: '',
    },
    validationSchema: Yup.object({
      
      newpassword:Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      conformpassword: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .min(2, 'Must be 2 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='updatebg'>
    <div className="card card-outline-secondary">
  <div className="card-header">
    <h3 className="mb-0">Change Password</h3>
  </div>
  <div className="updatecard-body ">
    <form className="form" role="form" autoComplete="off">
    
      <div className="form-group">
        <label htmlFor="inputPasswordNew">New Password</label>
        <input
         id="newpassword"
         name="newpassword"
         type="newpassword"
         className="form-control form-control-lg"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.newpassword}
       />
       {formik.touched.newpassword && formik.errors.newpassword ? (
         <div className='text-danger'>{formik.errors.newpassword}</div>
       ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="inputPasswordNewVerify">Conform Password</label>
        <input
         id="conformpassword"
         name="conformpassword"
         type="conformpassword"
         className="form-control form-control-lg"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.conformpassword}
       />
       {formik.touched.conformpassword && formik.errors.conformpassword ? (
         <div className='text-danger'>{formik.errors.conformpassword}</div>
       ) : null}
        <span className="form-text small text-muted">
          To confirm, type the new password again.
        </span>
      </div>
      <div className="pt-1 mb-4">
            <NavLink to="/" className="link-info">
              <button className="btn btn-info btn-lg btn-block" type="button">
                Update
              </button>
              </NavLink>
            </div>
    </form>
  </div>
</div>
    </div>

  )
}

export default UpdatePassword
