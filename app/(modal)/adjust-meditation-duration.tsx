import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { minutesToSeconds } from "@/utils";
import { TimerContext } from "@/context";

type Props = {};

const AdjustMeditationDuration = (props: Props) => {

    const {setDuration} = useContext(TimerContext)

    const handlePress = (duration: number) => {
        setDuration(duration)
        router.back()
    }

  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          onPress={handleBack}
          className="absolute top-8 left-4 z-10 flex-row items-center gap-3"
        >
          <AntDesign name="leftcircleo" size={32} color="white" />
          <Text className="text-white text-2xl font-semibold">Back</Text>
        </Pressable>

        <View className="h-4/5 justify-center">
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust Your meditation duration
          </Text>

          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(minutesToSeconds(5))}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(minutesToSeconds(10))}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(minutesToSeconds(15))}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
