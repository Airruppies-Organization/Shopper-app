import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { CameraView, Camera } from "expo-camera";
import Illustration from "../../assets/icons/illustration";
import QtyModal from "../../components/modal";
import { AppContext } from "../../context/context";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const {
    scanned,
    setScanned,
    view,
    setView,
    pop,
    setPop,
    prod,
    setProd,
    handleBarCodeScanned,
  } = useContext(AppContext);
  const [hasPermission, setHasPermission] = useState(null);

  // when you load the scan screen, you need to get permission from the phone
  // before using the phones camera for scanning
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>Please provide access to camera</Text>;
  }

  return (
    <View>
      <View className="flex flex-col justify-center items-center pt-20 px-4">
        <Text className="text-[#636363] text-4xl mb-10 w-full flex justify-center">
          Scan Products
        </Text>
        <Illustration className="w-[75vw] h-max max-w-full" />
        <Pressable
          onPress={() => setView(true)}
          className="px-12 mt-4 py-2 rounded-xl shadow-2xl bg-[#61088E] text-white text-xl"
        >
          <Text className="text-text-white"> Scan Now</Text>
        </Pressable>
      </View>

      {view && (
        <View className="h-screen w-full flex justify-center absolute">
          <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["upc", "upc_e", "upc_a", "ean_8", "ean_13"],
            }}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      )}
      <QtyModal />
      <FlashMessage position="top" />
    </View>
  );
}
