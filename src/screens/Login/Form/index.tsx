import React, { useState } from "react";
import { View } from "react-native";
import CheckBox from "../../../commom/components/CheckBox";
import theme from "../../../commom/theme";
import {
  Container,
  InputContainer,
  InputText,
  WelcomeText,
  MakeLoginText,
  LoginButton,
  LoginButtonText,
  NewUserText,
  NewUserRegisterText,
} from "./styles";

interface FormProps {
  onLoginPress?(email: string, password: string, rememberUser: boolean): void;
}

const Form = ({ onLoginPress = () => {} }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  return (
    <Container>
      <WelcomeText>Bem-vindo</WelcomeText>
      <MakeLoginText>Fazer login</MakeLoginText>
      <InputContainer>
        <InputText
          value={email}
          placeholder={"E-mail"}
          onChangeText={(text) => setEmail(text)}
          textContentType={"emailAddress"}
        />
      </InputContainer>
      <InputContainer>
        <InputText
          value={password}
          placeholder={"Senha"}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          textContentType={"password"}
        />
      </InputContainer>
      <LoginButton onPress={() => onLoginPress(email, password, rememberUser)}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>

      <CheckBox
        titleStyle={{ color: theme.colors.terciary }}
        value={rememberUser}
        onPress={(value) => setRememberUser(!value)}
        title="Salvar dados de login entre automaticamente"
        containerStyle={{ marginTop: 20 }}
      />
      <NewUserText>
        É novo aqui? <NewUserRegisterText>Cadastre-se</NewUserRegisterText>
      </NewUserText>
    </Container>
  );
};

export default Form;
