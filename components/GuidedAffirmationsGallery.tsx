import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

type Props = {
  title: string;
  previews: GalleryPreviewData[];
};

const GuidedAffirmationsGallery = ({ title, previews }: Props) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        {/* Заголовок */}
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View>
        <FlatList
          data={previews}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/(tabs)/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  {/** !!! Перглянути чому тайлвінд не додає стилі до картинок */}
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
