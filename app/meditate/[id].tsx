import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import {Audio} from 'expo-av'
import CustomButton from "@/components/CustomButton";
import { formattedTimeMinutes, formattedTimeSeconds } from "@/utils";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";


type Props = {};

const Meditate = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>()
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

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


  useEffect(() => {
    return () => {
      audioSound?.unloadAsync()
    }
  }, [audioSound])

  const handleToggleMeditationSessiosStatus = async () => {
    if(secondsRemaining === 0 ) {
      setSecondsRemaining(10);
    }
    setIsMeditating(prevValue => !prevValue);

    await handleTogglePlay()
  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const {sound} = await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    );

    setAudioSound(sound);
    return sound;
  }

  const handleTogglePlay = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound.getStatusAsync();

    if(status.isLoaded && !isPlayingAudio){
      await sound.playAsync();
      setIsPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setIsPlayingAudio(false);
    }

  }

  const handleGoToBack = () => {
    router.back();
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
              onPress={handleToggleMeditationSessiosStatus}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
