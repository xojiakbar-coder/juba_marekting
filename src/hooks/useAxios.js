import axios from "axios";
import ENDPOINTURL from "../api";
import { useState, useEffect } from "react";

const useAxios = (
  initialUrl = ENDPOINTURL,
  initialMethod = "GET",
  initialData = null
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState(initialMethod);
  const [requestData, setRequestData] = useState(initialData);

  const getData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method,
        url,
        data: requestData,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url, method, requestData]);

  const setRequest = (newUrl, newMethod = "GET", newData = null) => {
    setUrl(newUrl);
    setMethod(newMethod);
    setRequestData(newData);
  };

  return { data, loading, error, setRequest };
};

export default useAxios;
