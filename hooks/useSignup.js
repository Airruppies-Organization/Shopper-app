import { useContext, useState } from "react";
import { AuthContext } from "../context/userContext";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const extra = Constants.expoConfig?.extra;
const baseURL = extra.baseURL;

const useSignup = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const signup = async (username, email, phoneNumber, password, confirm) => {
    setError(null);
    setIsLoading(true);

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch(`${baseURL}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        phoneNumber: phoneNumber,
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

  return { signup, isLoading, error };
};

export default useSignup;
