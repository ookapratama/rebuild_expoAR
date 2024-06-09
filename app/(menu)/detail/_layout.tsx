import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Layout = () => {

    const {jenis} = useLocalSearchParams();

    return (
    <Stack >
      <Stack.Screen name="[jenis]" options={{ headerTitle: `Pilih ${jenis} Langka` }} />
    </Stack>
  );
};

export default Layout;