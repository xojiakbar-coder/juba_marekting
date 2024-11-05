// import React, { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";
// import Navbar from "../components/navbar";
// // import Button from "../components/button";
// import WhiteCard from "../components/whiteCard";
// import WhiteSide from "../components/whiteSide";
// import { a1Body, blackCard1 } from "../data";
// import { a2, map, t1, t2, t3 } from "../assets";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ENDPOINTURL from "../api";
// import Services from "../components/Home/Services";
// // import BlackCard from "../components/blackCard";

// export default function Detail() {
//   // const { data: serviseData, loading: serviceLoading } = useAxios(
//   //   `${ENDPOINTURL}/service/`
//   // );
//   // const { data: sliderData, loading: sliderLoading } = useAxios(
//   //   `${ENDPOINTURL}/slider/`
//   // );
//   // const { data: keys, loading: keysLoading } = useAxios(`${ENDPOINTURL}/keys/`);
//   // const { data: soloMain, loading: soloLoading } = useAxios(
//   //   `${ENDPOINTURL}/solo-main/`
//   // );
//   // const { data: statistics, loading: statsLoading } = useAxios(
//   //   `${ENDPOINTURL}/result/`
//   // );
//   // const { data: partnerData, loading: partnerLoading } = useAxios(
//   //   `${ENDPOINTURL}/client-photo/`
//   // );
//   // const { data: teamData, loading: teamLoading } = useAxios(
//   //   `${ENDPOINTURL}/team-photo/`
//   // );
//   // const { data: contact, loading: contactLoading } = useAxios(
//   //   `${ENDPOINTURL}/our-contact/`
//   // );
//   const [serviseData, setServiseData] = useState(null);

//   const [contact, setContact] = useState(null);

//   async function getData() {
//     try {
//       const getService = await axios.get(`${baseURL}/service/`);
//       setServiseData(getService.data);
//       console.log("Servis keldi");

//       const getSlider = await axios.get(`${baseURL}/slider/`);
//       setSliderData(getSlider.data);
//       console.log("Sliderlar keldi");

//       const getKeys = await axios.get(`${baseURL}/keys/`);
//       setKeys(getKeys.data);
//       console.log("Keyslar keldi");

//       const getSolo = await axios.get(`${baseURL}/solo-main/`);
//       setSoloMain(getSolo.data);
//       console.log("solo-main keldi");

//       const getStatistics = await axios.get(`${baseURL}/result/`);
//       setStatistics(getStatistics.data);
//       console.log("Statistikalar keldi");

//       const getPartner = await axios.get(`${baseURL}/client-photo/`);
//       setPartner(getPartner);
//       console.log("Partners keldi");

//       const getTeamData = await axios.get(`${baseURL}/team-photo/`);
//       setTeamData(getTeamData);
//       console.log("Team data keldi");

//       const getContact = await axios.get(`${baseURL}/our-contact/`);
//       setContact(getContact.data[0]);

//       console.log("Contact uchun datalar keldi");

//       console.log("Hamma ma'lumotlar ko'rsatish uchun tayyor !");

//       setIsLoading(false);
//     } catch (error) {
//       console.log("Xato:", error);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 300,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     focusOnSelect: false,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const images = [t1, t2, t3];

//   return (
//     <div className="w-full bg-black2 font-unbound">
//       {serviceLoading ||
//       sliderLoading ||
//       keysLoading ||
//       soloLoading ||
//       statsLoading ||
//       partnerLoading ||
//       teamLoading ||
//       contactLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <Services servise_list={serviseData} contact={contact} />

//           <h2 className="text-center mt-5 py-5 lg:text-4xl md:text-3xl text-2xl font-bold text-white2">
//             Маркетинговые услуги в Ташкенте
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-x-20 lg:gap-y-0 gap-y-10">
//             <WhiteCard
//               number={1}
//               title={"Разработка стратегии"}
//               body={"Мы анализируем ваш бизнес, вашу аудиторию и ваши цели..."}
//             />
//             {/* Repeat for other WhiteCards as needed */}
//           </div>

//           <div className="bg-white2 container2 w-full py-10">
//             <WhiteSide
//               title={"JUBA - маркетинговое агентство в Ташкенте"}
//               image={a2}
//               body={a1Body}
//             />
//           </div>

//           <div className="container container2 mx-auto py-10">
//             <h1 className="text-center text-white font-bold text-3xl xl:text-4xl mt-10">
//               Наши работы
//             </h1>
//             <Slider {...settings}>
//               {images.map((image, index) => (
//                 <div key={index}>
//                   <img src={image} alt={`Slide ${index}`} />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
