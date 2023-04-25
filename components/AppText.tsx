import { View, Text, StyleProp, TextStyle } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { user } from "../data";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          color: Colors.text,
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.base,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
