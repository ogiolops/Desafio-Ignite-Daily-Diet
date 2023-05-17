import { Container, HeaderHomeContainer, Logo, ProfilePic } from "./styles";

import LogoImg from '../../assets/Logo.png';
import ProfilePicImg from '../../assets/Profile.png';

export function Header(){
     return(
      <Container>
        <HeaderHomeContainer>
          <Logo source={LogoImg}/>
          <ProfilePic source={ProfilePicImg}/>
        </HeaderHomeContainer>
      </Container>
     )
}