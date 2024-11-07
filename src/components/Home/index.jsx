import axios from "axios";
import About from "./About";
import Service from "./Services";
import HomePage from "./HomePage";
import { Suspense, useEffect, useState } from "react";
const ENDPOINTURL = import.meta.env.VITE_REACT_APP_API_URL;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    slider: null,
    service: null,
    soloMain: null,
    ourResault: null,
    clientPhoto: null,
    teamPhoto: null,
    ourContact: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          sliderResponse,
          serviceResponse,
          soloMainResponse,
          ourResaultResponse,
          clientPhotoResponse,
          teamPhotoResponse,
          ourContactResponse,
        ] = await Promise.all([
          axios.get(`${ENDPOINTURL}/slider/`),
          axios.get(`${ENDPOINTURL}/service/`),
          axios.get(`${ENDPOINTURL}/solo-main/`),
          axios.get(`${ENDPOINTURL}/result/`),
          axios.get(`${ENDPOINTURL}/client-photo/`),
          axios.get(`${ENDPOINTURL}/team-photo/`),
          axios.get(`${ENDPOINTURL}/our-contact/`),
        ]);

        setData({
          slider: sliderResponse.data,
          service: serviceResponse.data,
          soloMain: soloMainResponse.data,
          ourResault: ourResaultResponse.data,
          clientPhoto: clientPhotoResponse.data,
          teamPhoto: teamPhotoResponse.data,
          ourContact: ourContactResponse.data,
        });
      } catch (error) {
        console.error("Malumotlar yuklanmadi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const components = [
    { id: 1, Component: HomePage, data: data.slider, padding: true },
    { id: 2, Component: Service, data: data.service, padding: true },
    {
      id: 3,
      Component: About,
      data: { soloMain: data.soloMain, ourResault: data.ourResault },
      padding: false,
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full">
        {components.map(({ id, Component, data, padding }) => (
          <div key={id} className={padding ? "px-[5%] py-[25px]" : ""}>
            <Component data={data} />
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default Home;
