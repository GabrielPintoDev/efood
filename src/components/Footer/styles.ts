import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Cores.bege};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`

export const Logo = styled.img`
  width: 125px;
`

export const List = styled.ul`
  padding-top: 32px;
  list-style: none;
`

export const ListItem = styled.li`
  display: inline;
  margin-right: 8px;
`

export const ListItemA = styled.a`
  width: 24px;
  height: 24px;
`

export const Paragrafo = styled.p`
  padding-top: 80px;
  font-size: 10px;
  color: ${Cores.vermelho};
  width: 480px;
  text-align: center;
`
