import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<Props> = ({ style, children, textStyle }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: Colors.accent,
          paddingHorizontal: Spacing.padding.xl,
          paddingVertical: Spacing.padding.base,
          borderRadius: Spacing.borderRadius.base,
          alignItems: "center",
        },
        style,
      ]}>
      <Text
        style={[
          {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-regular"],
          },
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
