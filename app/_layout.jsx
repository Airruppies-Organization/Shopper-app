import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ContextProvider } from "../context/context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Sansation-Bold": require("../assets/font/Sansation-Bold.ttf"),
    "Sansation-BoldItalic": require("../assets/font/Sansation-BoldItalic.ttf"),
    "Sansation-Italic": require("../assets/font/Sansation-Italic.ttf"),
    "Sansation-Light": require("../assets/font/Sansation-Light.ttf"),
    "Sansation-Regular": require("../assets/font/Sansation-Regular.ttf"), //prettier-ignore
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;
  return (
    <>
      <ContextProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(screen)" />
            <Stack.Screen name="(page)" />
            {/* <Stack.Screen name="(signup)" />
            <Stack.Screen name="(login)" /> */}
          </Stack>
        </SafeAreaView>
      </ContextProvider>
    </>
  );
}
