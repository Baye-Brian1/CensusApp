import { createContext, useState, useEffect } from "react";

export const CensusContext = createContext();

export const CensusProvider = ({ children }) => {
  const [households, setHouseholds] = useState([]);
  const [individuals, setIndividuals] = useState([]);
  const [enumerators, setEnumerators] = useState([]);

  useEffect(() => {
    const savedHouseholds = localStorage.getItem("households");
    const savedIndividuals = localStorage.getItem("individuals");
    const savedEnumerators = localStorage.getItem("enumerators");
    
    if (savedHouseholds) setHouseholds(JSON.parse(savedHouseholds));
    if (savedIndividuals) setIndividuals(JSON.parse(savedIndividuals));
    if (savedEnumerators) setEnumerators(JSON.parse(savedEnumerators));
  }, []);

  useEffect(() => {
    localStorage.setItem("households", JSON.stringify(households));
    localStorage.setItem("individuals", JSON.stringify(individuals));
    localStorage.setItem("enumerators", JSON.stringify(enumerators));
  }, [households, individuals, enumerators]);

  return (
    <CensusContext.Provider value={{ 
      households, setHouseholds,
      individuals, setIndividuals,
      enumerators, setEnumerators
    }}>
      {children}
    </CensusContext.Provider>
  );
};