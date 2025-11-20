import { createContext, useState, useEffect } from "react";
import api from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On page load, check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await api.get("/me", {
          withCredentials: true,
        });
        setUser(res.data.user); // backend returns user info if token is valid
      } catch (err) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
