import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

interface Props {
  title?: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: Spacing.margin.lg,
      }}>
      <AppText>{title}</AppText>
      <TouchableOpacity>
        <AppText style={{ fontSize: FontSize.sm, color: Colors.accent }}>
          See all
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
