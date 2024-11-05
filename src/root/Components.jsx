// Components.jsx
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import pages_data from "../utils/pages";
const ENDPOINTURL = import.meta.env.VITE_REACT_APP_API_URL;

const Components = () => {
  const [data, setData] = useState({});

  async function fetchData(url, id) {
    try {
      const response = await axios.get(`${ENDPOINTURL}/${url}`);
      setData((prevData) => ({ ...prevData, [id]: response?.data, url }));
      return response?.data;
    } catch (error) {
      console.error(`Something went wrong ${url}:`, error);
    }
  }

  console.log(data[Object.keys(data)[Object.keys(data).length - 1]]);
  useEffect(() => {
    pages_data.map(({ id, url }) => {
      return <Fragment key={id}>{fetchData(url, id)}</Fragment>;
    });
  }, []);

  return (
    <div>
      {pages_data.map(({ id, element: Element, padding, url }) => (
        <div key={id} className={`${padding && "w-full px-[5%] py-[25px]"}`}>
          <Element
            data={
              url === data[Object.keys(data)[Object.keys(data).length - 1]] &&
              data
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Components;
