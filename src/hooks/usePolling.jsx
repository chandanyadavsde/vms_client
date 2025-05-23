import { useState, useEffect } from "react";

/**
 * Custom hook to poll an API at a given interval.
 * @param {string} url - The API endpoint.
 * @param {number} interval - Polling interval in milliseconds.
 * @returns {Object} - { data, loading, error }
 */
const usePolling = (url, interval = 5000) => {
  const [data, setData] = useState(null);        // Holds fetched data
  const [loading, setLoading] = useState(true);  // Shows loading state
  const [error, setError] = useState(null);      // Stores error if any

  useEffect(() => {
    let isMounted = true; // Helps avoid updating state if component unmounted

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData(); // Call immediately on mount

    const intervalId = setInterval(fetchData, interval); // Start polling

    return () => {
      isMounted = false;      // Avoid memory leaks
      clearInterval(intervalId); // Clean up interval
    };
  }, [url, interval]); // Re-run if url or interval changes

  return { data, loading, error }; // Hook returns these for the component
};

export default usePolling;
