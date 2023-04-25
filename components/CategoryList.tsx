import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "../data";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import FontSize from "../constants/FontSize";

const CategoryList: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[{ id: 0, name: "All" }, ...categories].map((cat) => (
        <TouchableOpacity
          onPress={() => setActive(cat.id)}
          style={{
            paddingHorizontal: Spacing.padding.base,
            paddingVertical: Spacing.padding.sm,
            backgroundColor: active === cat.id ? Colors.accent : Colors.primary,
            marginRight: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.base,
          }}
          key={cat.id}>
          <AppText
            style={{
              color: active === cat.id ? Colors.onAccent : Colors.text,
              fontSize: FontSize.sm,
            }}>
            {cat.name}
          </AppText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;