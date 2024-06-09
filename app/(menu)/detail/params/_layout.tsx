import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

type paramProps = {
  desc: string;
  voices: undefined;
}

const Layout = () => {
  const { desc, voices, id } = useLocalSearchParams();

  return (
    <Stack>
      <Stack.Screen
        name="[ar_camera]"
        options={{
          headerTitle: ``,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="detail_object"
        options={{
          headerShown: false,
          headerTitle: ``,
          headerShadowVisible: true,
        }}
      />
    </Stack>
  );
};

export default Layout;