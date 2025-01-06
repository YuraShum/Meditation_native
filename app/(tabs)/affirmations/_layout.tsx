import React from "react";
import { Stack } from "expo-router";

type Props = {};

const AffirmationLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[itemId]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AffirmationLayout;
