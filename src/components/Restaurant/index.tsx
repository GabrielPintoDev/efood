// ...existing code...
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantBanner from '../../components/RestaurantBanner'
import ProductCard from '../../components/RestaurantProductCard'
import * as S from './style'
import HeaderRestaurant from '../HeaderRestaurant'
import { GlobalCss } from '../../styles'
import {
  fetchRestauranteById,
  Restaurante,
  Produto
} from '../../services/restaurants'

// ...existing code...
const Restaurant = () => {
  const { id } = useParams<{ id?: string }>()
  const restauranteId = Number(id)
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    if (Number.isNaN(restauranteId) || restauranteId <= 0) {
      setError('Id de restaurante inválido')
      setLoading(false)
      return
    }

    let mounted = true
    fetchRestauranteById(restauranteId)
      .then((r) => {
        if (!mounted) return
        if (!r) {
          setError('Restaurante não encontrado')
          setRestaurante(null)
          setProdutos([])
          return
        }
        setRestaurante(r)
        setProdutos(r.cardapio ?? [])
      })
      .catch((e) => {
        setError(String(e))
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [restauranteId])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>

  return (
    <>
      <GlobalCss />
      <HeaderRestaurant />
      <RestaurantBanner
        capa={restaurante?.capa}
        titulo={restaurante?.titulo}
        tipo={restaurante?.tipo}
      />
      <div className="container">
        <S.Container>
          {produtos.map((p) => (
            <ProductCard
              key={p.id}
              image={p.foto}
              title={p.nome}
              description={p.descricao}
              price={p.preco}
            />
          ))}
        </S.Container>
      </div>
    </>
  )
}

export default Restaurant
// ...existing code...
