import styled from 'styled-components'
import { Cores } from '../../styles'

export const Banner = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${Cores.branco};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: none;
    z-index: 0;
  }
`

export const TextContainer = styled.div`
  padding: 32px 170px;
  display: flex;
  flex-direction: column;
  gap: 156px;
  position: absolute;
  bottom: 0px;
  left: 270px;
`

export const Type = styled.h3`
  font-size: 32px;
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`
