import { Image, Titulo, HeaderContainer, Div } from './styles'
import Logo from '../../assets/images/logo.svg'
import Vector from '../../assets/images/Vector.svg'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${Vector})` }}>
    <Div>
      <Image src={Logo} />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Div>
  </HeaderContainer>
)

export default Header
