import React, { useEffect, useState } from 'react'
import { ListContainer } from './style'
import RestaurantCard from '../Product'
import { fetchRestaurantes, Restaurante } from '../../services/restaurants'

const ProductList = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetchRestaurantes().then(setRestaurantes).catch(console.error)
  }, [])

  return (
    <ListContainer>
      {restaurantes.map((r) => (
        <RestaurantCard
          key={r.id}
          id={r.id ?? 0}
          image={r.capa ?? ''}
          name={r.titulo ?? ''}
          rating={r.avaliacao ?? 0}
          tags={r.tipo ? [r.tipo] : []}
          description={r.descricao ?? ''}
        />
      ))}
    </ListContainer>
  )
}

export default ProductList
