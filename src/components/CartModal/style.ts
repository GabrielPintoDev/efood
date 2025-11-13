// ...existing code...
import styled from 'styled-components'
import { Cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`

export const Dialog = styled.div`
  position: relative;
  width: 1024px;
  max-width: 100%;
  background: ${Cores.vermelho};
  color: ${Cores.branco};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  gap: 24px;
  padding: 20px;
  align-items: stretch;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${Cores.branco};
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex: 0 0 320px;
`

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 4px 8px;
  box-sizing: border-box;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${Cores.branco};
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.4;
    font-size: 14px;
    max-height: 180px;
    overflow: auto;
  }

  small {
    display: block;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 13px;
  }
`

export const Footer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: auto;
`

export const ConfirmButton = styled.button`
  background: ${Cores.bege};
  color: ${Cores.vermelho};
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
`
