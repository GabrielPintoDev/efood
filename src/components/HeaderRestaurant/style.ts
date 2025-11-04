import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const BgHeader = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  height: 186px;
`

export const Menu = styled.div`
  font-size: 18px;
  color: ${Cores.vermelho};
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  width: 100%;
`

export const Cart = styled.div`
  font-size: 18px;
  color: ${Cores.vermelho};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Cores.vermelho};
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
