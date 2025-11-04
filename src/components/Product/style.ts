import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardContainer = styled.div`
  width: 472px;
  overflow: hidden;
  background-color: ${Cores.branco};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 218px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 2;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  font-weight: bold;
  font-size: 12px;
  padding: 6px 4px;
`

export const CardBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${Cores.vermelho};
  border-right: 1px solid ${Cores.vermelho};
  border-bottom: 1px solid ${Cores.vermelho};
  background-color: ${Cores.branco};
  position: relative;
  z-index: 1;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  color: ${Cores.vermelho};
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.vermelho};
  align-items: center;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${Cores.vermelho};
  padding: 16px 0%;
  line-height: 1.4;
`

export const Button = styled.button`
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};
  width: 82px;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    background-color: ${Cores.vermelho2};
  }

  .link {
    color: ${Cores.branco};
  }
`
