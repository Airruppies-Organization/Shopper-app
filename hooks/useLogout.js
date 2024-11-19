import { useContext, useState } from "react";
import { AuthContext } from "../context/userContext";
import * as SecureStore from "expo-secure-store";
import { AppContext } from "../context/context";

const useLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const { setCart, setProfile } = useContext(AppContext);

  const logout = async () => {
    await SecureStore.deleteItemAsync("user");
    dispatch({ type: "LOGOUT" });
    setCart([]);
    setProfile(null);
  };

  return { logout };
};

export default useLogout;
