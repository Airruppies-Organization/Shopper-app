import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import LocMarker from "../../../assets/icons/marker";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [locations, setLocations] = useState([
    { id: "1", name: "Sabo market", latitude: 6.50408, longitude: 3.3756 },
    { id: "2", name: "Ikeja Airport", latitude: 6.573, longitude: 3.3193 },
    { id: "3", name: "Maryland Mall", latitude: 6.5674, longitude: 3.3669 },
  ]);

  const mapStyle = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }], // Hides points of interest
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "on" }], // Hides transit icons
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "on" }], // Hides road labels
    },
    {
      featureType: "administrative",
      stylers: [{ visibility: "off" }], // Hides administrative labels
    },
  ];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          console.error("Permission to access location was denied");
          return;
        }

        let userLocation = await Location.getCurrentPositionAsync({});
        if (userLocation) {
          setLocation(userLocation.coords);
          setRegion({
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      } catch (error) {
        setErrorMsg("Error fetching location");
        console.error("Error fetching location: ", error);
      }
    };

    fetchLocation();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location || !region) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        provider={PROVIDER_GOOGLE} // Use Google Maps
        customMapStyle={mapStyle} // Apply custom styles
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            className="flex justify-center w-max items-center"
          >
            <LocMarker />
            <Text className="text-[8px]">{loc.name}</Text>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  userMarker: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 3,
  },
  userMarkerText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MapScreen;
