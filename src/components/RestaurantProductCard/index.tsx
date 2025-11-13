// ...existing code...
import React, { useState } from 'react'
import * as S from './style'
import CartModal from '../CartModal'

type Props = {
  image: string
  title: string
  description: string
  price?: number
}

const ProductCard = ({ image, title, description, price }: Props) => {
  const [open, setOpen] = useState(false)

  console.log('ProductCard price:', price) // confirma que o componente recebe o preço

  const handleConfirm = () => {
    console.log('Item adicionado:', title, price)
  }

  return (
    <>
      <S.CardContainer>
        <S.Image src={image} alt={title} />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Button
            onClick={() => {
              console.log('Abrindo modal para:', title, 'preço:', price)
              setOpen(true)
            }}
          >
            Adicionar ao carrinho
          </S.Button>
        </S.Info>
      </S.CardContainer>

      <CartModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        title={title}
        image={image}
        description={description}
        price={price} // <-- importante: repassar aqui
      />
    </>
  )
}

export default ProductCard
