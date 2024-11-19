import { View, Text, TouchableOpacity } from "react-native";
import { router, Link } from "expo-router";

const Submit = ({ value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View className="w-full h-14 rounded-xl bg-secondary flex justify-center items-center">
        <Text className="text-text-white">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Submit;
