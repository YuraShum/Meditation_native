import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: any;
  colors: string[]
};

const AppGradient = ({ children, colors }: Props) => {
  return (
    <LinearGradient
      colors={colors}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <SafeAreaView className="flex-1 px-5 px-3 justify-between">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
