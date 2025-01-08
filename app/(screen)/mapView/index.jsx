import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import LocMarker from "../../../assets/icons/marker";
import EnterStore from "./enterModal";
import { useContext } from "react";
import { AppContext } from "../../../context/context";

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]); // Stores route polyline coordinates
  const [errorMsg, setErrorMsg] = useState(null);

  const { merch, setCurrMerch, currMerch } = useContext(AppContext);

  // Fetch the current location of the user
  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
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
    };

    fetchLocation();
  }, []);

  // Function to get directions and display the route on the map
  // const getDirections = async (destination) => {
  //   if (!location) return;

  //   const origin = `${location.latitude},${location.longitude}`;
  //   const dest = `${destination.latitude},${destination.longitude}`;
  //   console.log(origin);

  //   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${dest}&key=${googleMapsApiKey}`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     if (data.routes && data.routes.length > 0) {
  //       const points = data.routes[0].overview_polyline.points;
  //       const coordinates = decodePolyline(points);
  //       setRouteCoordinates(coordinates); // Set the route coordinates for polyline
  //     } else {
  //       console.error("No route found.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching directions:", error);
  //   }
  // };

  // Decode the polyline encoded by Google Maps Directions API
  // const decodePolyline = (t) => {
  //   let points = [];
  //   let index = 0;
  //   let len = t.length;
  //   let lat = 0;
  //   let lng = 0;

  //   while (index < len) {
  //     let shift = 0;
  //     let result = 0;
  //     let byte;
  //     do {
  //       byte = t.charCodeAt(index++) - 63;
  //       result |= (byte & 0x1f) << shift;
  //       shift += 5;
  //     } while (byte >= 0x20);
  //     let deltaLat = result & 0x01 ? ~(result >> 1) : result >> 1;
  //     lat += deltaLat;

  //     shift = 0;
  //     result = 0;
  //     do {
  //       byte = t.charCodeAt(index++) - 63;
  //       result |= (byte & 0x1f) << shift;
  //       shift += 5;
  //     } while (byte >= 0x20);
  //     let deltaLng = result & 0x01 ? ~(result >> 1) : result >> 1;
  //     lng += deltaLng;

  //     points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
  //   }

  //   return points;
  // };

  // If we haven't fetched the location or region, display loading message
  if (!location || !region) {
    return <Text>Loading...</Text>;
  }

  const currMerchHandler = (loc) => {
    setCurrMerch(loc);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        provider={PROVIDER_GOOGLE}
        mapType="standard"
      >
        {/* User's Location Marker */}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />

        {/* Other Locations */}
        {merch.map((loc, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: loc.lat, longitude: loc.lng }}
            // onPress={() => getDirections(loc)}
            onPress={() => currMerchHandler(loc)}
          >
            {/* icon */}
            <LocMarker />
            <Text>{loc.name}</Text>
          </Marker>
        ))}

        {/* Display the Route if available */}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000"
            strokeWidth={5}
          />
        )}
      </MapView>
      {currMerch && Object.keys(currMerch).length > 0 ? <EnterStore /> : ""}
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
