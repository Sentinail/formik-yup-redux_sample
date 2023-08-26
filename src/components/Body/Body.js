import React from 'react'
import { BodyContainer } from './BodyStyle'

const Body = ({ children }) => {
  return (
    <BodyContainer> {children} </BodyContainer>
  )
}

export default Body