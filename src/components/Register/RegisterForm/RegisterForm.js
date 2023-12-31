import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterFormContainer } from './RegisterFormStyle'
import { useFormik } from 'formik'
import { registerFormSchema } from '../../../validationSchema/registerFormSchema'
import { goToLogin } from '../../../redux/status/statusSlice'
import { motion } from 'framer-motion'
import { changeTheme } from '../../../redux/theme/themeSlice'

function RegisterForm() {
  const { primaryColor, secondaryColor, tertiaryColor } = useSelector(state => { return state.theme })
  const { isRegister } = useSelector(state => { return state.status })
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: registerFormSchema,
    onSubmit: values => {
      dispatch(changeTheme({
        primaryColor: "#27AE60",
        secondaryColor: "#191D2B",
        tertiaryColor: "#323B54"
      }))
      dispatch(goToLogin())
    },
  }) 

  const handleThemeChange = () => {
    const hasEmpty = formik.values.first_name.length === 0 
    || formik.values.last_name.length === 0 
    || formik.values.email_address.length === 0 
    || formik.values.password.length === 0 
    || formik.values.confirm_password.length === 0 

    if (formik.isValid === false || hasEmpty) {
      dispatch(changeTheme({
        primaryColor: "#E74C3C",
        secondaryColor: "#2E4053",
        tertiaryColor: "#738080",
      }))
    }
  }

  return (
    <>
    { isRegister && 
      <motion.div initial={{opacity: 0, y: -200}} animate={{opacity: 1, y: 0}}>
        <RegisterFormContainer onSubmit={formik.handleSubmit} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
          <h1><span>Register Now</span></h1>
          <div className="full_name">
            <div className="input_field first_name">
              <label htmlFor="first_name"> First Name </label>
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.first_name} type="text" name="first_name" id="first_name" />
              { formik.touched.first_name && formik.errors.first_name ? <p className='form_error'> {formik.errors.first_name} </p> : "" }
            </div>
            <div className="input_field last_name">
              <label htmlFor="last_name"> Last Name </label>
              <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.last_name} type="text" name="last_name" id="last_name" />
              { formik.touched.last_name && formik.errors.last_name ? <p className='form_error'> {formik.errors.last_name} </p> : "" }
            </div>
          </div>

          <div className="input_field email_address">
            <label htmlFor="email_address"> Email Address </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email_address} type="text" name="email_address" id="email_address" />
            { formik.touched.email_address && formik.errors.email_address ? <p className='form_error'> {formik.errors.email_address} </p> : "" }
          </div>

          <div className="input_field password">
            <label htmlFor="password"> Password </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
            { formik.touched.password && formik.errors.password ? <p className='form_error'> {formik.errors.password} </p> : "" }
          </div>

          <div className="input_field confirm_password">
            <label htmlFor="confirm_password"> Confirm Password </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirm_password} type="password" name="confirm_password" id="confirm_password" />
            { formik.touched.confirm_password && formik.errors.confirm_password ? <p className='form_error'> {formik.errors.confirm_password} </p> : "" }
          </div>

          <button onClick={handleThemeChange} type='submit' className='submit'> Register </button>
          <p className='go_to' onClick={() => {dispatch(goToLogin());
            dispatch(changeTheme({
              primaryColor: "#27AE60",
              secondaryColor: "#191D2B",
              tertiaryColor: "#323B54"
            }))
          }}> Already have an account? </p>
        </RegisterFormContainer>
      </motion.div>
    }
    </>
    
  )
}

export default RegisterForm