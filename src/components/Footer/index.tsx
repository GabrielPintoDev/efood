import {
  FooterContainer,
  List,
  ListItem,
  ListItemA,
  Logo,
  Paragrafo
} from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="logo" />
    <List>
      <ListItem>
        <ListItemA href="#">
          <img src={instagram} alt="instagram" />
        </ListItemA>
      </ListItem>
      <ListItem>
        <ListItemA href="#">
          <img src={facebook} alt="facebook" />
        </ListItemA>
      </ListItem>
      <ListItem>
        <ListItemA href="#">
          <img src={twitter} alt="twitter" />
        </ListItemA>
      </ListItem>
    </List>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Paragrafo>
  </FooterContainer>
)

export default Footer
