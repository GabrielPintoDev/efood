import { ListContainer } from './style'
import RestaurantCard from '../Product'

import sushiImg from '../../assets/images/sushi.png'
import espagueteImg from '../../assets/images/espaguete.png'

const ProductList = () => (
  <ListContainer>
    <RestaurantCard
      image={sushiImg}
      name="Hioki Sushi"
      rating={4.9}
      tags={['Destaque da semana', 'Japonesa']}
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <RestaurantCard
      image={espagueteImg}
      name="La Dolce Vita Trattoria"
      rating={4.6}
      tags={['Italiana']}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    />
    <RestaurantCard
      image={espagueteImg}
      name="La Dolce Vita Trattoria"
      rating={4.6}
      tags={['Italiana']}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    />
    <RestaurantCard
      image={espagueteImg}
      name="La Dolce Vita Trattoria"
      rating={4.6}
      tags={['Italiana']}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    />
    <RestaurantCard
      image={espagueteImg}
      name="La Dolce Vita Trattoria"
      rating={4.6}
      tags={['Italiana']}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    />
    <RestaurantCard
      image={espagueteImg}
      name="La Dolce Vita Trattoria"
      rating={4.6}
      tags={['Italiana']}
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    />
  </ListContainer>
)

export default ProductList
