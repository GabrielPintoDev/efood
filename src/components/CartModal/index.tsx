// ...existing code...
import React from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  title?: string
  image?: string
  description?: string
  price?: number | string
}

const CartModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  image,
  description,
  price
}) => {
  if (!isOpen) return null

  const priceLabel =
    price !== undefined
      ? typeof price === 'number'
        ? `R$ ${price.toFixed(2).replace('.', ',')}`
        : String(price)
      : ''

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onClose}>
      <S.Dialog onMouseDown={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose} aria-label="fechar">
          ×
        </S.CloseButton>

        {image && <S.Image src={image} alt={title} />}

        <S.Body>
          <h3>{title}</h3>
          <p>{description}</p>
          <small>Serve: 1 a 2 pessoas</small>

          <S.Footer>
            <S.ConfirmButton
              onClick={() => {
                onConfirm?.()
                onClose() // fecha o modal após confirmar
              }}
            >
              Adicionar ao carrinho{priceLabel ? ` - ${priceLabel}` : ''}
            </S.ConfirmButton>
          </S.Footer>
        </S.Body>
      </S.Dialog>
    </S.Overlay>,
    document.body
  )
}

export default CartModal
// ...existing code...
