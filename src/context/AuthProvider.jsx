import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(() => {
    if (initialAuthUser) {
      try {
        return JSON.parse(initialAuthUser);
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
        return null;
      }
    }
    return null;
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
