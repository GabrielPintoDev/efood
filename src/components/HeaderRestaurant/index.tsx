import * as S from './style'

import Vector from '../../assets/images/Vector.svg'
import Logo from '../../assets/images/logo.svg'

const HeaderRestaurant = () => (
  <S.BgHeader style={{ backgroundImage: `url(${Vector})` }}>
    <S.HeaderContainer>
      <S.Menu>
        <S.StyledLink to="../">Restaurantes</S.StyledLink>
      </S.Menu>
      <S.Logo src={Logo} />
      <S.Cart>
        <S.StyledLink to="../">0 produto(s) no carrinho</S.StyledLink>
      </S.Cart>
    </S.HeaderContainer>
  </S.BgHeader>
)

export default HeaderRestaurant
