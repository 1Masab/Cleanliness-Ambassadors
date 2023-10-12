import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }, []);

  return <ApiContext.Provider value={{apiData}}>{children}</ApiContext.Provider>;
};

export const useApiData = () => {
  return useContext(ApiContext);
};
