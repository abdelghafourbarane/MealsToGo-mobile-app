import styled from "styled-components";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
  margin-left: ${(props) => props.theme.space[2]};
`;

export const OpenGroup = styled.View`
  flex-direction: row;
  align-items: center; ;
`;

export const StateRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const StarsGroup = styled.View`
  flex-direction: row;
`;
