import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import { Workout as WorkoutType } from "../data";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import Font from "../constants/Font";

interface Props {
  workout: WorkoutType;
  onPress?: () => void;
}

const Workout: React.FC<Props> = ({ workout, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.primary,
        marginRight: Spacing.margin.lg,
        borderRadius: Spacing.borderRadius.base,
        overflow: "hidden",
      }}
      key={workout.id}>
      <Image
        source={workout.image}
        style={{
          height: 200,
          width: 270,
        }}
      />
      <View
        style={{
          padding: Spacing.padding.base,
        }}>
        <View
          style={{
            marginBottom: Spacing.margin.base,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <AppText style={{ fontFamily: Font["poppins-semiBold"] }}>
            {workout.name}
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Ionicons name="star" color={Colors.yellow} size={24} />
            <AppText style={{ marginLeft: Spacing.margin.sm }}>
              {workout.rating}
            </AppText>
          </View>
        </View>
        <AppText>{workout.coach}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Workout;
