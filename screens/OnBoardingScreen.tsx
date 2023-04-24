import { View, Text, ImageBackground } from "react-native";
import React from "react";

const OnBoardingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/onboarding.jpeg")}
      style={{ flex: 1 }}>
      <Text style={{ color: "#fff" }}>Working</Text>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
