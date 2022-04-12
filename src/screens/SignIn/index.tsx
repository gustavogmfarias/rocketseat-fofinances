import React, { useContext } from "react";
import AppleSvg from "../../assets/apple.svg";
import LogoSvg from "../../assets/logo.svg";
import GoogleSvg from "../../assets/google.svg";

import {
  Container,
  TitleWrapper,
  Header,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}
          uma de suas contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
