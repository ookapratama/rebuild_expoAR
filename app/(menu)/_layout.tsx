import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerTitle: 'Silahkan dipilih' }} />
      <Stack.Screen name="detail" options={{ headerTitle: 'Silahkan dipilih' }} />
    </Stack>
  );
};

export default Layout;