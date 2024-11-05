// import { useEffect, useState } from "react";
// import ImageOverlay from "../components/imageOverlay";
// import Card from "../components/card";
// import Case from "../components/case";
// import WhiteSide from "../components/whiteSide";
// import ResultCard from "../components/resultCard";
// import Button from "../components/button";
// import Partners from "../components/partners";
// import Team from "../components/team";
// import Loader from "../components/loader";

// import { baseURL } from "../api";

// import axios from "axios";
// import Footer from "../components/footer";
// import Services from "../components/Home/Services";
// import DataCard from "../components/Generic/Card/Card";

// export default function MainPage() {
//   const lat = 41.2995;
//   const long = 69.2401;

//   const [serviseData, setServiseData] = useState(null);

//   const [sliderData, setSliderData] = useState(null);

//   const [keys, setKeys] = useState(null);

//   const [soloMain, setSoloMain] = useState(null);

//   const [statistics, setStatistics] = useState(null);

//   const [partner, setPartner] = useState(null);

//   const [teamData, setTeamData] = useState(null);

//   const [contact, setContact] = useState(null);

//   const [name, setName] = useState("");
//   const [tel, setTel] = useState("");

//   const [isLoading, setIsLoading] = useState(true);

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

//   async function postForm(event) {
//     event.preventDefault();

//     let form = new FormData();

//     form.append("name", name);
//     form.append("phone_number", tel);

//     try {
//       const response = await axios.post(`${baseURL}/contact-user/`, form);
//       if (response.status === 201) {
//         alert("Отправил");
//       }
//     } catch (e) {
//       console.log("Nimadir bu yerda xato ketdi: ", e);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   } else {
//     return (
//       <div className="w-full bg-black2 font-unbound">
//         <div>
//           <div className="container container2 mx-auto pb-20">
//             <Services servise_list={serviseData} contact={contact} />
//             {sliderData?.map((i, index) => (
//               <ImageOverlay
//                 key={index}
//                 title={i?.title}
//                 short_description={i?.short_description}
//                 photo={i?.photo}
//               />
//             ))}
//             <h2 className="text-center mt-5 py-10 lg:text-4xl md:text-3xl text-2xl font-bold text-white2">
//               Маркетинговые услуги в Ташкенте
//             </h2>
//             <div className="grid justify-items-center sm:grid-cols-2 sm:gap-x-5 md:ms-[5%] lg:ms-0 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 gap-y-6">
//               {serviseData?.map((i, index) => (
//                 <DataCard
//                   key={index}
//                   id={i?.id}
//                   title={i?.title}
//                   short_description={i?.short_description}
//                 />
//               ))}
//             </div>
//             <h2 className="text-center mt-5 py-14 lg:text-4xl md:text-3xl text-2xl font-bold text-white2">
//               Наши кейсы
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//               {keys?.map((i) => (
//                 <Case
//                   key={i?.id}
//                   title={i?.title}
//                   image={i?.photo}
//                   items={i?.hashtags}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="bg-white2 container2 w-full py-10">
//             <div className="container mx-auto py-5">
//               {soloMain?.map((i, index) => (
//                 <WhiteSide
//                   key={index}
//                   title={"JUBA - маркетинговое агентство в Ташкенте"}
//                   image={i?.photo}
//                   body={i?.description}
//                 />
//               ))}
//               <div className="mt-10">
//                 <p className="text-black3 text-center text-xl lg:text-3xl font-bold py-10">
//                   Наши результаты в цифрах
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
//                   {/* <ResultCard title={'7+'} body={'лет нашая компания на рынке'} /> */}
//                   {statistics?.map((st, index) => (
//                     <ResultCard
//                       key={index}
//                       title={`${st?.result}+`}
//                       body={st?.title}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="container mx-auto py-10">
//             <h1 className="text-center text-white font-bold text-3xl xl:text-4xl mt-10">
//               Наши клиенты
//             </h1>
//           </div>

//           <Partners data={partner?.data} />

//           <div className="container mx-auto py-10">
//             <h1 className="text-center text-white font-bold text-3xl xl:text-4xl mt-10">
//               Наша команда
//             </h1>
//           </div>
//           <Team teamMembers={teamData?.data} />

//           <div className="h-20 bg-black2"></div>

//           <div className="w-full bg-white py-20 justify-center">
//             <h2 className="font-bold text-4xl text-center">Контакты</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 items-center gap-20">
//               <iframe
//                 className="w-[90%] lg:w-[65%] h-[300px] lg:h-[400px] rounded-xl justify-self-center lg:justify-self-end"
//                 src={`https://yandex.com/map-widget/v1/?ll=${long}%2C${lat}&z=15`}
//                 allowFullScreen
//                 title="Location Map"
//                 loading="lazy"
//               ></iframe>
//               <div className="text-gray2 justify-self-center  lg:justify-self-start text-center sm:text-start">
//                 <h1 className="leading-7 font-normal text-xl">
//                   <a href={`tel:${contact?.phone_number}`}>
//                     {contact?.phone_number?.length === 13
//                       ? `${contact?.phone_number.slice(
//                           0,
//                           4
//                         )} ${contact?.phone_number.slice(
//                           4,
//                           6
//                         )} ${contact?.phone_number.slice(
//                           6,
//                           9
//                         )} ${contact?.phone_number.slice(
//                           9,
//                           11
//                         )} ${contact?.phone_number.slice(11, 13)}`
//                       : contact?.phone_number}
//                   </a>
//                   <br />
//                   <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
//                   <br />
//                   Ислам Каримов 49, 10 этаж
//                 </h1>
//                 <ul className="mt-5 leading-7 text-lg font-normal">
//                   <li>
//                     <a href={contact?.telegram_url}>Telegram</a>
//                   </li>
//                   <li>
//                     <a href={contact?.instagram_url}>Instagram</a>
//                   </li>
//                   <li>
//                     <a href={contact?.facebook_url}>Facebook</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="py-20">
//             <h1 className="text-center font-bold text-base md:text-md lg:text-3xl text-white">
//               Заполните форму,
//               <br /> мы перезвоним и обсудим
//               <br /> ваш проект
//             </h1>
//             <div className="mt-10 grid grid-cols-1 gap-y-5 justify-items-center text-gray3">
//               <input
//                 className="w-full border border-black4 max-w-xs bg-gray2 px-4 py-2 rounded-xl"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Имя"
//                 type="text"
//                 required
//                 maxLength={16}
//               />
//               <input
//                 className="w-full border border-black4 max-w-xs bg-gray2 px-4 py-2 rounded-xl"
//                 value={tel}
//                 onChange={(e) => setTel(e.target.value)}
//                 placeholder="Телефон номер"
//                 type="tel"
//                 required
//                 maxLength={13}
//               />
//             </div>
//             <div className="flex justify-center py-10">
//               <Button onClick={postForm} title={"Отправить"} />
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     );
//   }
// }
