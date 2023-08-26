import React from 'react'
import { HeaderContainer } from './HeaderStyle'
import { useSelector } from 'react-redux'

function Header() {
  const { primaryColor } = useSelector(state =>  state.theme)

  return (
    <HeaderContainer $primaryColor={primaryColor}></HeaderContainer>
  )
}

export default Header