import React from 'react'
import { LoginFormContainer } from './LoginFormStyle'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { goToRegister } from '../../../redux/status/statusSlice'
import { motion } from 'framer-motion'


const LoginForm = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useSelector(state => state.theme)
    const { isRegister } = useSelector(state => { return state.status })

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email_address: "",
            password: "",
        },
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
    })

  return (
    <>
    { !isRegister && 
        <motion.div initial={{opacity: 0, y: -200}} animate={{opacity: 1, y: 0}}>
            <LoginFormContainer onSubmit={formik.handleSubmit} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
                <h1><span> Login Now </span></h1>
                
                <div className="input_field email_address">
                    <label htmlFor="email_address"> Email Address </label>
                    <input onChange={formik.handleChange} value={formik.values.email_address} type="text" name="email_address" id="email_address" />
                </div>

                <div className="input_field password">
                    <label htmlFor="password"> Password </label>
                    <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
                </div>

                <button type='submit' className='submit'> Login </button>
                <p className='go_to' onClick={() => {dispatch(goToRegister())}}> Don't have an account? </p>
            </LoginFormContainer>
        </motion.div>
    }
    </>
  )
}

export default LoginForm