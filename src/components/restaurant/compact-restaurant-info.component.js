import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

function CompactRestaurantInfo({ restaurant }) {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
}

export default CompactRestaurantInfo;
