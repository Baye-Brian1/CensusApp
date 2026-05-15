import { createContext, useState, useEffect } from "react";

export const CensusContext = createContext();

export const CensusProvider = ({ children }) => {
  // Initialize with empty arrays
  const [households, setHouseholds] = useState([]);
  const [individuals, setIndividuals] = useState([]);
  const [enumerators, setEnumerators] = useState([]);

  useEffect(() => {
    // Load data from localStorage on mount
    try {
      const savedHouseholds = localStorage.getItem("households");
      const savedIndividuals = localStorage.getItem("individuals");
      const savedEnumerators = localStorage.getItem("enumerators");
      
      if (savedHouseholds) setHouseholds(JSON.parse(savedHouseholds));
      if (savedIndividuals) setIndividuals(JSON.parse(savedIndividuals));
      if (savedEnumerators) setEnumerators(JSON.parse(savedEnumerators));
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    try {
      localStorage.setItem("households", JSON.stringify(households));
      localStorage.setItem("individuals", JSON.stringify(individuals));
      localStorage.setItem("enumerators", JSON.stringify(enumerators));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  }, [households, individuals, enumerators]);

  const value = {
    households,
    setHouseholds,
    individuals,
    setIndividuals,
    enumerators,
    setEnumerators,
  };

  return (
    <CensusContext.Provider value={value}>
      {children}
    </CensusContext.Provider>
  );
};