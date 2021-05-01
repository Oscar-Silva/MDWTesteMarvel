import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px;
  align-items: center;
`;
