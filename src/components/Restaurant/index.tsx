import RestaurantBanner from '../../components/RestaurantBanner'
import ProductCard from '../../components/RestaurantProductCard'
import * as S from './style'
import Marguerita from '../../assets/images/marguerita.svg'
import HeaderRestaurant from '../HeaderRestaurant'
import { GlobalCss } from '../../styles'

const pizzas = [
  {
    image: Marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Restaurant = () => (
  <>
    <GlobalCss />
    <HeaderRestaurant />
    <RestaurantBanner />
    <div className="container">
      <S.Container>
        {Array(6)
          .fill(pizzas[0])
          .map((pizza, index) => (
            <ProductCard
              key={index}
              image={pizza.image}
              title={pizza.title}
              description={pizza.description}
            />
          ))}
      </S.Container>
    </div>
  </>
)

export default Restaurant
