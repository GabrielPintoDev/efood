import React from 'react'
import * as S from './style'

type Props = {
  image: string
  title: string
  description: string
}

const ProductCard = ({ image, title, description }: Props) => (
  <S.CardContainer>
    <S.Image src={image} alt={title} />
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Info>
  </S.CardContainer>
)

export default ProductCard
