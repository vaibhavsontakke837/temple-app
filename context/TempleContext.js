import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "SELECTED_TEMPLE_ID";

const TempleContext = createContext(null);

// Default temple data
const DEFAULT_TEMPLE = {
  id: "temple1",
  name: "श्री समर्थ सद्गुरू धोंडूतात्या महाराज संस्थान, विराळ",
  location: "विराळ, ता. जळकोट, जि. लातूर"
};

export const TempleProvider = ({ children }) => {
  const [selectedTempleId, setSelectedTempleId] = useState("temple1");
  const [selectedTemple, setSelectedTemple] = useState(DEFAULT_TEMPLE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTemple = async () => {
      try {
        const storedId = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedId) {
          setSelectedTempleId(storedId);
        }
        setSelectedTemple(DEFAULT_TEMPLE);
      } catch (e) {
        console.warn("Failed to load temple", e);
      } finally {
        setLoading(false);
      }
    };

    loadTemple();
  }, []);

  const selectTemple = async (id) => {
    setSelectedTempleId(id);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      console.warn("Failed to save temple", e);
    }
  };

  return (
    <TempleContext.Provider
      value={{
        selectedTempleId,
        selectedTemple,
        selectTemple,
        loading,
      }}
    >
      {children}
    </TempleContext.Provider>
  );
};

export const useTemple = () => {
  const ctx = useContext(TempleContext);
  if (!ctx) {
    throw new Error("useTemple must be used inside TempleProvider");
  }
  return ctx;
};