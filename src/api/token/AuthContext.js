import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Membuat context
const AuthContext = createContext();

// Provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const navigate = useNavigate(); // This needs to be used in a component wrapped by Router

  useEffect(() => {
    // Mendapatkan token dari URL jika ada
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(hash.replace("#", "?"));
    const token = urlParams.get("access_token");

    if (token) {
      setAccessToken(token);
      localStorage.setItem("access_token", token);
      // Hapus token dari URL setelah disimpan
      navigate(window.location.pathname, { replace: true });
    }
  }, [navigate]);

  // Fungsi untuk memperbarui token dan menyimpannya di local storage
  const updateToken = (newToken) => {
    setAccessToken(newToken);
    localStorage.setItem("access_token", newToken);
  };

  return (
    <AuthContext.Provider value={{ accessToken, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useAuth = () => {
  return useContext(AuthContext);
};
