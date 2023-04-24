import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Button from "../components/Button";

const OnBoardingScreen = () => {
  const { height } = Dimensions.get("window");
  return (
    <ImageBackground
      source={require("../assets/images/onboarding.jpeg")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: Spacing.padding.lg,
      }}>
      <LinearGradient
        style={{ height: height / 2.5 }}
        colors={["rgba(0, 0, 0, 0.1)", "#000"]}>
        <Text
          style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            textAlign: "center",
          }}>
          Stay health even if you stay home
        </Text>
        <Text
          style={{
            fontSize: FontSize.base,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}>
          Staying fit to keep you in good condition can now go through mobile
          apps
        </Text>
        <Button>Get Started</Button>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
