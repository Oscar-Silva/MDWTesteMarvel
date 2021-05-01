import { PressableProps, TextInputProps, TextProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  padding: 10px;
  align-items: center;
  margin-top: 25px;
`;

export const WelcomeText = styled.Text<TextProps>`
  font-size: 18px;
  font-family: "axiforma-bold";
  color: ${(props) => props.theme.colors.terciary};
  margin-top: 35px;
`;

export const MakeLoginText = styled.Text<TextProps>`
  font-size: 14px;
  font-family: "axiforma-light";
  color: ${(props) => props.theme.colors.terciary};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  height: 38px;
  background-color: ${(props) => props.theme.colors.terciary};
  border-radius: 19px;
  width: 248px;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  margin: 10px 0px 10px 0px;
`;

export const InputText = styled.TextInput<TextInputProps>`
  flex: 1;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

export const LoginButton = styled.Pressable<PressableProps>`
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 37px;
  width: 248px;
  border-radius: 19px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const LoginButtonText = styled.Text<TextProps>`
  font-family: axiforma;
  color: ${(props) => props.theme.colors.terciary};
  font-size: 16px;
`;

export const NewUserText = styled.Text<TextProps>`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.terciary};
  font-size: 16px;
`;

export const NewUserRegisterText = styled.Text<TextProps>`
  font-family: axiforma-bold;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
`;
