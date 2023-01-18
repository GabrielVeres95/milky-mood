import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoSVG } from '../assets/logo.svg'
import { FixedEL } from '../styles'

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`

export const Header = styled.header`
  ${FixedEL}
  z-index: 1;
  justify-content: center;
  padding: 30px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`

const HeaderComponent = () => (
  <Header>
    <Logo title="MilkyMood logo" />
  </Header>
)

export default HeaderComponent
