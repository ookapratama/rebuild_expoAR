// import { useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { h, w } from "../../../../constants/responsive";
import { Link, useLocalSearchParams } from "expo-router";

type dataProps = {
  src?: string | undefined;
  sourceImage?: undefined;
  nama: string;
};

const ARCamera = ({ nama }: dataProps) => {
  // const [permission, requestPermission] = useCameraPermissions();

  const { src } = useLocalSearchParams<{ src: string }>();

  const sourceImage = src ? src : require("../../../../assets/images/sample.png");

  // console.log("ar camera : ", sourceImage);

  // if (!permission) {
  //   return <View style={{ flex:1, backgroundColor:"skyblue"}} />;
  // }

  // if (!permission.granted) {
  //   return (
  //     <View   style={{flex:1, justifyContent:"center"}}>
  //       <Text>Aplikasi ini membutuhkan perizinan untuk mengakses Kamera</Text>
  //       <Button title="Izinkan" onPress={requestPermission}></Button>
  //     </View>
  //   );
  // }

//   const ARImage = () => {
//     return (
//       <ViroARScene>
//         <ViroImage
//           position={[0, 0, -2]}
//           resizeMode="ScaleToFit"
//           placeholderSource={require("../../../../assets/sample.png")}
//           source={sourceImage}
//         />
//       </ViroARScene>
//     );
//   };

  return (
    <>
      <Text>Tes</Text>
    </>
  );
};

export default ARCamera;