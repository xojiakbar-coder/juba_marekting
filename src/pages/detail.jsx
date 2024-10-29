import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'
import WhiteCard from '../components/whiteCard'
import BlackCard from '../components/blackCard'
import WhiteSide from '../components/whiteSide'
import { baseURL } from '../api'
import axios from 'axios'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { a1Body, blackCard1 } from '../data'
import { a2, map, t1, t2, t3 } from '../assets'

export default function Detail() {


    const [serviseData, setServiseData] = useState(null)

    const [contact, setContact] = useState(null)


    async function getData() {
        try {
            const getService = await axios.get(`${baseURL}/service/`)
            setServiseData(getService.data)
            console.log("Servis keldi")

            const getSlider = await axios.get(`${baseURL}/slider/`)
            setSliderData(getSlider.data)
            console.log("Sliderlar keldi")

            const getKeys = await axios.get(`${baseURL}/keys/`)
            setKeys(getKeys.data)
            console.log("Keyslar keldi")

            const getSolo = await axios.get(`${baseURL}/solo-main/`)
            setSoloMain(getSolo.data)
            console.log("solo-main keldi")

            const getStatistics = await axios.get(`${baseURL}/result/`)
            setStatistics(getStatistics.data)
            console.log("Statistikalar keldi")

            const getPartner = await axios.get(`${baseURL}/client-photo/`)
            setPartner(getPartner)
            console.log("Partners keldi")

            const getTeamData = await axios.get(`${baseURL}/team-photo/`)
            setTeamData(getTeamData)
            console.log("Team data keldi")

            const getContact = await axios.get(`${baseURL}/our-contact/`)
            setContact(getContact.data[0])

            console.log("Contact uchun datalar keldi")

            console.log("Hamma ma'lumotlar ko'rsatish uchun tayyor !")

            setIsLoading(false)
        } catch (error) {
            console.log("Xato:", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const settings = {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const images = [
        t1,
        t2,
        t3,
    ];

    return (
        <div className='w-full bg-black2 font-unbound'>
            <div>
                <div className="container mx-auto pb-20">
                    <Navbar servise_list={serviseData} contact={contact} />

                    <div className='container2'>
                        <div className='flex flex-col space-y-2 lg:w-1/2 mt-24 w-full'>
                            <h2 className='text-2xl md:text-4xl lg:text-5xl text-yellow2 font-bold'>Маркетинговое</h2>
                            <h2 className='text-2xl md:text-4xl lg:text-5xl text-white2 font-bold'>Агенство в Ташкенте</h2>
                            <p className='text-white text-md'>Ваш ключ к успеху в мире маркетинга в Ташкенте.
                                Мы предлагаем инновационные стратегии и решения для вашего бизнеса.
                                Обратитесь к нам сегодня и достигните новых высот</p>
                        </div>

                        <div className='mt-5'>
                            <Button title={'Обсудить проект'} />
                        </div>

                        <h2 className='text-center mt-5 py-5 lg:text-4xl md:text-3xl text-2xl font-bold text-white2'>Маркетинговые услуги в Ташкенте</h2>

                        <div className='flex justify-center'>
                            <p className='text-gray3 w-full md:w-[70%] text-center text-sm md:text-base font-normal'>Брендинг - это процесс создания и управления имиджем и узнаваемостью бренда на рынке Узбекистана. В условиях динамично развивающейся экономики и увеличивающейся конкуренции создание сильного бренда становится ключевым
                                фактором успеха для многих компаний. Давайте рассмотрим несколько аспектов брендинга в Ташкенте и факторы, влияющие на его стоимость.</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-x-20 lg:gap-y-0 gap-y-10'>
                            <WhiteCard number={1} title={'Разработка стратегии'} body={'Мы анализируем ваш бизнес, вашу аудиторию и ваши цели, чтобы разработать индивидуальную стратегию, которая максимально соответствует вашим потребностям.'} />
                            <WhiteCard number={2} title={'Создание контента'} body={'Наша команда креативных копирайтеров, дизайнеров и видеографов разработает контент, который будет привлекать внимание вашей целевой аудитории и подчеркивать уникальные особенности вашего бренда.'} />
                            <WhiteCard number={3} title={'Аналитика и отчетность'} body={'Мы предоставляем детальные отчеты о продвижении вашего бренда в социальных медиа, а также рекомендации по дальнейшим действиям для улучшения результатов.'} />
                        </div>

                    </div>

                </div>

                <div className='bg-white2 container2 w-full py-10'>
                    <div className="container mx-auto py-5">
                        <WhiteSide title={'JUBA - маркетинговое агентство в Ташкенте'} image={a2} body={a1Body} />
                    </div>
                </div>

                <div className="container container2 mx-auto py-10">

                    <div>
                        <h1 className='text-center text-white font-bold text-3xl xl:text-4xl mt-10'>Наши работы</h1>
                        <p className='text-base font-normal text-gray3 text-center mt-5'>Мы с гордостью представляем наши работы, которые отражают<br /> нашу экспертность, творческий подход и результативность.</p>
                        <div className="max-w-full mx-auto mt-10 overflow-hidden">
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className="p-2 outline-none border-none transform transition-transform duration-300 cursor-pointer ease-in-out">
                                        <img
                                            src={image}
                                            alt={`Slide ${index}`}
                                            className="w-full h-[600px] object-cover transition-transform duration-300 ease-in-out brightness-75 hover:brightness-100 focus:outline-none"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <h1 className='text-center text-white font-bold text-3xl xl:text-4xl mt-10'>Тарифы</h1>
                    <p className='text-base font-normal text-gray3 text-center mt-5'>Мы рады предоставить вам информацию о наших текущих тарифных планах.</p>

                    <div className='grid container2 grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 mt-7 lg:gap-5 xs:gap-x-10'>
                        <BlackCard title={'Лайтовый'} price={'750$'} tags={blackCard1} />
                        <BlackCard title={'Нормальный'} price={'900$'} tags={blackCard1} />
                        <BlackCard title={'Для своих'} price={'1250$'} tags={blackCard1} />
                        <BlackCard title={'Фуллпакет'} price={'1800$'} tags={blackCard1} />
                    </div>
                </div>


            </div>


            <div className='h-20 bg-black2'>
                <h1 className='text-center text-white font-bold text-3xl xl:text-4xl mt-10'>Принципы в работе</h1>
                <div></div>
            </div>

            <div className='w-full bg-white py-20 justify-center'>
                <h2 className='font-bold text-4xl text-center'>Контакты</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 items-center gap-20">
                    <img className='w-[80%] lg:w-[55%] rounded-xl justify-self-center lg:justify-self-end' src={map} alt="Rasm topilmadi" />
                    <div className='text-gray2 justify-self-center  lg:justify-self-start'>
                        <h1 className='leading-7 font-normal text-xl'>+998 97 143 22 20<br />
                            info@juba.uz<br />
                            Ислам Каримов 49, 10 этаж</h1>
                        <ul className='mt-5 leading-7 text-lg font-normal'>
                            <li>
                                Telegram
                            </li>
                            <li>
                                Instagram
                            </li>
                            <li>
                                Facebook
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='py-20'>
                <h1 className='text-center font-bold text-base md:text-md lg:text-3xl text-white'>Заполните форму,<br /> мы перезвоним и обсудим<br /> ваш проект</h1>
                <div className="mt-10 grid grid-cols-1 gap-y-5 justify-items-center text-gray3">
                    <input className="w-full border border-black4 max-w-xs bg-gray2 px-4 py-2 rounded-xl" placeholder="Имя" type="text" />
                    <input className="w-full border border-black4 max-w-xs bg-gray2 px-4 py-2 rounded-xl" placeholder="Телефон номер" type="text" />
                </div>
                <div className='flex justify-center py-10'>
                    <Button title={'Отправить'} />
                </div>
            </div>
        </div>
    )
}
