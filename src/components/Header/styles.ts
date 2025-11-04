import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  display: block;
  background-size: cover;
  width: 100%;
  height: 384px;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 125px;
  height: 58px;
  width: 100%;
  margin-top: 64px;
`

export const Titulo = styled.h2`
  width: 540px;
  font-size: 36px;
  font-weight: bold;
  color: ${Cores.vermelho};
  margin-top: 138px;
  text-align: center;
`
