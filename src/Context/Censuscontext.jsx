import { createContext, useState, useEffect } from "react";

export const CensusContext = createContext();

export const CensusProvider = ({children})=>{
    const [households, setHouseholds]= useState([]);
    const [individuals, setIndividuals]= useState([]);
    const [enumerators, setEnumerators]= useState([]);
 
    useEffect(()=>{
        setHouseholds(JSON.parse(localStorage.getItem("households"))|| []);
        setIndividuals(JSON.parse(localStorage.getItem("individuals")) || []);
        setEnumerators(JSON.parse(localStorage.getItem("enumerators")) || []);
    }, []);

    useEffect(()=>{
       localStorage.setItem("households", JSON.stringify(households));
       localStorage.setItem("individulas", JSON.stringify(individuals));
       localStorage.setItem("enumerators", JSON.stringify(enumerators));  
    }, [households, individuals, enumerators])

    return(
      <CensusContext.Provider value={households, setHouseholds,
        individuals, setIndividuals,
        enumerators, setEnumerators
      }>
        {children}
      </CensusContext.Provider>
    );
};