import { useContext, useState } from "react";
import { AuthContext } from "../context/userContext";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const extra = Constants.expoConfig?.extra;
const baseURL = extra.baseURL;

const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    const res = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      setError(result.error);
      setIsLoading(false);
    }

    if (res.ok) {
      SecureStore.setItem("user", JSON.stringify(result));
      dispatch({ type: "SIGNUP", payload: result });
      setIsLoading(false);
      return true;
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
