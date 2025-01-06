import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { formattedTimeMinutes, formattedTimeSeconds } from "@/utils";

type Props = {};

const Meditate = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setIsMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining((prevValue) => prevValue - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  const handleGoToBack = () => {
    router.back();
  };

  const handleStartMeditation = () => {
    setIsMeditating(true);
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient 
          colors={["transparent", "rgba(0,0,0,0.8)"]}>
          {/** go back section */}
          <Pressable 
            onPress={handleGoToBack}>
              <View 
                className="absolute top-8 left-4 z-10 flex-row items-center gap-3">
                  <AntDesign 
                    name="leftcircleo" 
                    size={32} 
                    color="white" />
                  <Text 
                    className="text-white text-2xl font-semibold">
                      Back
                  </Text>
              </View>
          </Pressable>
          {/** timer illustration section */}
          <View 
            className="flex-1 justify-center">
              <View 
                className="mx-auto bg-white rounded-full w-44 h-44 justify-center items-center border-4 border-gray-400">
                  <Text 
                    className="text-4xl text-gray-600 font-rmono">
                      {formattedTimeMinutes(secondsRemaining)}:
                      {formattedTimeSeconds(secondsRemaining)}
                  </Text>
              </View>
          </View>

          <View className="mb-5">
            <CustomButton
              title="Start Meditation"
              onPress={handleStartMeditation}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
