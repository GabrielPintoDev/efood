import styled from 'styled-components'
import { Cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`

export const TextContainer = styled.div`
  padding: 32px 170px;
  display: flex;
  flex-direction: column;
  gap: 156px;
  position: absolute;
  bottom: 0px;
  left: 270px;
  color: ${Cores.branco};
`

export const Type = styled.h3`
  font-size: 32px;
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`
