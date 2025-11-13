import React from 'react'
import * as S from './style'

type Props = {
  capa?: string
  titulo?: string
  tipo?: string
}

const RestaurantBanner = ({ capa, titulo, tipo }: Props) => (
  <S.Banner style={{ backgroundImage: capa ? `url(${capa})` : undefined }}>
    <S.TextContainer className="container">
      <S.Type>{tipo}</S.Type>
      <S.Title>{titulo}</S.Title>
    </S.TextContainer>
  </S.Banner>
)

export default RestaurantBanner
