import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { w, h } from "../../constants/responsive";

const Home = () => {
  const [modalPetunjuk, setModalPetunjuk] = useState(false);
  const [modalTentang, setModalTentang] = useState(false);

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };

    lockOrientation();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          resizeMode="stretch"
          source={require("../../assets/images/bg/home.png")}
        >
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/onSound.png")}
              resizeMode="contain"
              style={{
                width: 90,
                position: "absolute",
                right: 0,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <View style={styles.groupBtn}>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity style={styles.baseBtn}>
                <Text style={styles.baseTxtBtn}>Kuis</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalPetunjuk(true)}
                style={[styles.baseBtn, { marginVertical: 40 }]}
              >
                <Text style={styles.baseTxtBtn}>Petunjuk</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalTentang(true)}
                style={styles.baseBtn}
              >
                <Text style={styles.baseTxtBtn}>Tentang</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginRight: w(30),
                marginTop: w(10),
                alignItems: "center",
              }}
            >
              <Text style={styles.txtTitle}>
                Mari Mengenal Flora {"\n"} dan Fauna Langka di {"\n"} Indonesia
              </Text>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={{ width: 100, marginTop: -20 }}
                  source={require("../../assets/images/play.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* modal 1 */}

      <Modal animationType="slide" transparent={true} visible={modalTentang}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ textAlign: "left", fontSize: 38, marginTop: 10 }}>
              Tentang Aplikasi
            </Text>
            <Image
              source={require("../../assets/images/handayani.png")}
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              IMPLEMENTASI AUGMENTED REALITY PADA PENGENALAN OBJEK 3 DIMENSI
              FLORA DAN FAUNA LANGKA BERBASIS ANDROID
            </Text>
            <View style={{ marginVertical: 30 }}>
              <Text style={[styles.txtPetunjuk, { textAlign: "center" }]}>
                Aplikasi ini dibuat untuk: {"\n"} Oleh {"\n"} LISA SENJANI
                2020020048
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.baseBtn, { marginTop: h(-4) }]}
              onPress={() => setModalTentang(!modalTentang)}
            >
              <Text>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* modal  */}
      <Modal animationType="slide" transparent={true} visible={modalPetunjuk}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ textAlign: "left", fontSize: 38, marginTop: 10 }}>
              Petunjuk Aplikasi
            </Text>
            <Image
              source={require("../../assets/images/handayani.png")}
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
            <View style={{ marginVertical: 30 }}>
              <Text style={styles.txtPetunjuk}>
                Cara Penggunaan Aplikasi ini :
              </Text>

              <Text style={styles.txtPetunjuk}>
                1. Silahkan Pilih Tombol Play
              </Text>
              <Text style={styles.txtPetunjuk}>
                2. Pilih kategori yang ingin dilihat
              </Text>
              <Text style={styles.txtPetunjuk}>
                3. Pilih gambar yang ingin ditampilkan
              </Text>
              <Text style={styles.txtPetunjuk}>
                4. Izinkan akses kamera untuk menampilkan objek gambar
              </Text>
              <Text style={styles.txtPetunjuk}>
                5. Sudut kanan atas adalah icon untuk melihat deskripsi objek
                yang dipilih
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.baseBtn]}
              onPress={() => setModalPetunjuk(!modalPetunjuk)}
            >
              <Text>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    opacity: 0.9,
    width: w(60),
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  txtGuide: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  txtPetunjuk: {
    fontSize: 16,
  },
  txtTitle: {
    fontSize: 32,
    textTransform: "uppercase",
    textAlign: "center",
    color: "green",
  },
  groupBtn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  baseBtn: {
    backgroundColor: "#FFC600",
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
