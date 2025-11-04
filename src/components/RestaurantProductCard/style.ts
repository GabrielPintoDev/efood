import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardContainer = styled.div`
  width: 320px;
  border: 8px solid ${Cores.vermelho};
  background-color: ${Cores.bege};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`

export const Info = styled.div`
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${Cores.bege};
  border: none;
  color: ${Cores.vermelho};
  padding: 8px 12px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${Cores.branco};
    color: ${Cores.vermelho};
  }
`
