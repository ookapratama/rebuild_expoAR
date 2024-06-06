import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;