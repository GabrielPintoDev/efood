import * as S from './style'

import Massa from '../../assets/images/espaguete.svg'

const RestaurantBanner = () => (
  <S.Banner>
    <S.Image src={Massa} alt="massa" />
    <S.TextContainer>
      <S.Type>Italiana</S.Type>
      <S.Title>La Dolce Vita Trattoria</S.Title>
    </S.TextContainer>
  </S.Banner>
)

export default RestaurantBanner
