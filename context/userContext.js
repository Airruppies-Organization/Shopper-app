import { useReducer, createContext, useEffect } from "react";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const checker = async () => {
      const storedUser = await SecureStore.getItemAsync("user"); // Use getItemAsync
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (user) {
        dispatch({ type: "SIGNUP", payload: user });
      }
    };

    checker();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
