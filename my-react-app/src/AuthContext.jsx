import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const decodeToken = (token) => {
  if (!token) return null;
  try {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodeURIComponent(
      decoded
        .split("")
        .map((c) => {
          return "%" + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    ));
  } catch (error) {
    return null;
  }
};

export const AuthProvider = ({ children }) => {

  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem("authToken");
    const payload = token ? decodeToken(token) : null;
    return {
      isLoggedIn: !!token,
      role: payload?.rol || null,
      userId: payload?.id || null,
    };
  });

  const login = (token) => {
    const payload = decodeToken(token);
    localStorage.setItem("authToken", token);
    setAuthState({
      isLoggedIn: true,
      role: payload?.rol || null,
      userId: payload?.id || null,
    });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthState({
      isLoggedIn: false,
      role: null,
      userId: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};