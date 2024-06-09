import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
// import { ScrollView, Text, View, XStack } from "tamagui";
import { ScrollView, Text, View } from "react-native";
import { BoxImage } from "../../../components/BoxImage";

// data static
import { dataFauna, dataFlora } from "../../../data";
import { ImageBackground } from "react-native";

type dataProps = {
  id: number;
  nama: string;
  jenis: string;
  src: string | undefined;
  suara: string | undefined;
  deskripsi: string;
};

const detail_menu = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();
  const routeName = "/detail_menu/params/[ar_camera]";

  const [render, setRender] = useState<string>();
  const [datas, setDatas] = useState<dataProps[]>([]);

  const fetchData = () => {
    const res =
      jenis === "Flora" ? dataFlora.map((i) => i) : dataFauna.map((i) => i);
    // console.log(typeof(res));
    setDatas(res);
  };

  useEffect(() => {
    setRender(jenis);
    fetchData();
  }, []);
  return (
    <ImageBackground
      source={require("../../../assets/images/bg/menu.jpg")}
      resizeMode="stretch"
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: "space-evenly",
            marginVertical: 24,
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          {datas.map((item, index) => (
            <Link
              key={index}
              // href={{ pathname: routeName }}
              href={{
                pathname: routeName,
                params: {
                  src: item.src,
                  desc: item.deskripsi,
                  voices: item.suara,
                  id: item.id,
                },
              }}
              asChild
            >
              {jenis === "Flora" ? (
                <BoxImage
                  nama={item.nama}
                  src={item.src}
                  desc={item.deskripsi}
                  jenis={jenis}
                />
              ) : (
                <BoxImage
                  nama={item.nama}
                  src={item.src}
                  desc={item.deskripsi}
                  jenis={jenis}
                />
              )}
            </Link>
          ))}
          {/* <Link href={{ pathname: routeName }} asChild>
          <BoxImage hewan="kitten" jenis={jenis} />
        </Link> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default detail_menu;
