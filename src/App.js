import React from 'react'
import Header from './components/Header/Header'
import GlobalStyle from './GlobalStyle'
import { useSelector } from 'react-redux'
import Body from './components/Body/Body'
import RegisterForm from './components/Register/RegisterForm/RegisterForm'
import LoginForm from './components/Login/LoginForm/LoginForm'
import { AnimatePresence } from 'framer-motion'


const App = () => {
  const { primaryColor, secondaryColor } = useSelector(state => state.theme)
  const { isRegister } = useSelector(state => state.status)

  return (
    <>
      <GlobalStyle $primaryColor={primaryColor} $secondaryColor={secondaryColor}/>
      <Header></Header>
      <Body>
        <RegisterForm />
        <LoginForm />
      </Body>
    </>
  )
}

export default App