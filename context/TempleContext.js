import { TEMPLES } from "@/shared/temples";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "SELECTED_TEMPLE_ID";

const TempleContext = createContext(null);

export const TempleProvider = ({ children }) => {
  const [selectedTempleId, setSelectedTempleId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTemple = async () => {
      try {
        const storedId = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedId) {
          setSelectedTempleId(storedId);
        } else {
          setSelectedTempleId(TEMPLES[0].id); // default
        }
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

  const selectedTemple = TEMPLES.find(
    (t) => t.id === selectedTempleId
  );

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