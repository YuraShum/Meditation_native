import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import "../global.css";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

type Props = {};

const App = (props: Props) => {
  const router = useRouter();

  const handleClickOnButton = () => {
    console.log("tap");
    router.push("/nature-meditate");
    console.log("tap after");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
          <View>
            <Text className="text-center text-white font-bold text-4xl">
              Simple Meditation
            </Text>
            <Text className="text-center text-white text-2xl mt-3 text-regular">
              Simplifying Meditation for Everyone
            </Text>
          </View>

          <View>
            <CustomButton onPress={handleClickOnButton} title="Get Started" />
          </View>
          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
