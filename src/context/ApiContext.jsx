import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev"
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data (HTTP status: ${response.status})`
          );
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        console.log(err);
        if (retryCount < 3) {
          setRetryCount(retryCount + 1);
          fetchData();
        }
      }
    };
  }, [retryCount]);
  return (
    <ApiContext.Provider value={{ apiData }}>{children}</ApiContext.Provider>
  );
};

export const useApiData = () => {
  return useContext(ApiContext);
};
