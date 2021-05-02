import {
  ImageProps,
  ModalProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const ContainerModal = styled.Modal<ModalProps>`
  display: flex;
  flex: 1;
`;

export const Container = styled.View<ViewProps>`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1px;
`;
export const Wrapper = styled.View<ViewProps>`
  display: flex;
  height: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 3px;
`;

export const ProfileContainer = styled.View<ViewProps>`
  display: flex;
  height: 280px;
  width: 228px;
  margin-left: -35px;
  padding-left: 55px;
  padding-top: 25px;
  box-shadow: 1px 3px 6px rgba(225, 0, 0, 1);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 36px;
  border-top-right-radius: 0px;
  z-index: 2px;
`;

export const ProfilePictureContainer = styled.View<ViewProps>`
  width: 55px;
  height: 55px;
  box-shadow: 3px 3px 3px rgba(225, 0, 0, 1);
`;

export const ProfileMenuContainer = styled.View<ViewProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: -35px;
`;

export const ProfileMenuItem = styled.TouchableOpacity<TouchableOpacityProps>`
  display: flex;
  height: 18px;
  margin-top: 15px;
`;

export const ProfileMenuItemText = styled.Text<TextProps>`
  font-size: 17px;
  font-family: axiforma;
  color: ${(props) => props.theme.colors.secondary};
`;
