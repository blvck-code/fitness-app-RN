import { View, Text, StyleProp, TextStyle, TextProps } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { user } from "../data";

type Props = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

const AppText: React.FC<Props> = ({ children, style, ...otherProps }) => {
  return (
    <Text
      style={[
        {
          color: Colors.text,
          fontFamily: Font["poppins-regular"],
          fontSize: FontSize.base,
        },
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
