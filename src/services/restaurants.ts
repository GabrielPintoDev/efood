export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

export type Restaurante = {
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao?: string
  capa?: string
  cardapio?: Produto[]
}

const REMOTE_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const fetchRestaurantes = async (): Promise<Restaurante[]> => {
  const res = await fetch(REMOTE_URL)
  if (!res.ok) {
    throw new Error(`Erro ao buscar restaurantes: ${res.status}`)
  }
  const data = (await res.json()) as Restaurante[]
  return data
}

export const fetchRestauranteById = async (
  id: number
): Promise<Restaurante | null> => {
  try {
    const res = await fetch(`${REMOTE_URL}/${id}`)
    if (res.ok) {
      const r = (await res.json()) as Restaurante
      return r ?? null
    }
  } catch {
    // falhou, ignora
  }
  const lista = await fetchRestaurantes()
  return lista.find((r) => r.id === id) ?? null
}
