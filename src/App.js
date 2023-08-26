import React from 'react'
import Header from './components/Header/Header'
import GlobalStyle from './GlobalStyle'
import { useSelector } from 'react-redux'
import Register from './components/Register/Register'
import Login from './components/Login/Login'


const App = () => {
  const { primaryColor, secondaryColor } = useSelector(state => state.theme)
  const { isRegister } = useSelector(state => state.status)

  return (
    <>
      <GlobalStyle $primaryColor={primaryColor} $secondaryColor={secondaryColor}/>
      <Header></Header>
      <main>
        { isRegister ? <Register /> : <Login />}
      </main>
    </>
  )
}

export default App