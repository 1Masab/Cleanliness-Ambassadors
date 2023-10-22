import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    fetch("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => {
        if (retryCount < 3) {
          setRetryCount(retryCount + 1);
          console.log(error);
        }
      });
  }, [retryCount]);
  return (
    <ApiContext.Provider value={{ apiData }}>{children}</ApiContext.Provider>
  );
};

export const useApiData = () => {
  return useContext(ApiContext);
};
