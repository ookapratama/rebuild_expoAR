import React from "react";
// import { Image, Text, View, YStack } from "tamagui";
import { Image, Text, View } from "react-native";
import { h, w } from "../constants/responsive";
// import ARCamera from "../app/(home)/detail_menu/ar_camera";
import { Link } from "expo-router";

type boxImageProps = {
  nama?: string;
  jenis: string | undefined;
  src: string | undefined;
  desc: string;
  sourceImage?: string | undefined;
  index?: number;
};

export const BoxImage = ({
  jenis,
  nama = "",
  src,
  desc,
  index,
  ...props
}: boxImageProps) => {
  // console.log("box 1", src);
  const sourceImage = src ? src : require("../assets/images/sample.png");
  // console.log("box ", sourceImage);
  return (
    <View
      style={{
        marginVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: w(26),
        height: h(28),
    borderRadius: 18,
      }}
    >
      <View
        style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.19,
          shadowRadius: 5.62,
          elevation: 6,
          backgroundColor: "#fff",
        }}
        {...props}
      >
        <Image
          source={sourceImage}
          style={{ width: w(36), height: h(18) }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 4,
        }}
      >
        {nama}
      </Text>
    </View>
  );
};

export default BoxImage;
