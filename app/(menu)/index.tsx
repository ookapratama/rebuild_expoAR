import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { h, w } from "@/constants/responsive";
import { Link } from "expo-router";

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="stretch"
        source={require("../../assets/images/bg/menu.jpg")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Link
            href={{
              pathname: "/detail/[jenis]",
              params: { jenis: "Flora" },
            }}
            asChild
          >
            <TouchableOpacity style={styles.baseBtn}>
              <Text style={styles.baseTxtBtn}>Flora</Text>
            </TouchableOpacity>
          </Link>

          <Image
            resizeMode="contain"
            style={{ width: 400 }}
            source={require("../../assets/images/splashV2.png")}
          />

          <Link
            href={{
              pathname: "/detail/[jenis]",
              params: { jenis: "Fauna" },
            }}
            asChild
          >
            <TouchableOpacity style={styles.baseBtn}>
              <Text style={styles.baseTxtBtn}>Fauna</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  baseBtn: {
    backgroundColor: "#548C2F",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "white",
    width: w(18),
    height: h(12),
  },
  baseTxtBtn: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
});
