import Navbar from '../components/navbar'
import ImageOverlay from '../components/imageOverlay'
import Card from '../components/card'
import Case from '../components/case'
import WhiteSide from '../components/whiteSide'
import ResultCard from '../components/resultCard'
import Button from '../components/button'

import { a1Body, cards } from '../data'
import { a1, v1, v2, v3, v4, v5, team2, case1, map, mainLogo } from '../assets'


export default function MainPage() {

    const caseRange = [1, 2, 3, 4, 5, 6]

    return (
        <div className='w-full bg-black2 font-unbound'>
            <div>
                <div className="container container2 mx-auto pb-20">
                    <Navbar />
                    <ImageOverlay />
                    <h2 className='text-center mt-5 py-10 lg:text-4xl md:text-3xl text-2xl font-bold text-white2'>Маркетинговые услуги в Ташкенте</h2>
                    <div className='grid justify-items-center sm:grid-cols-2 sm:gap-x-5 md:ms-[5%] lg:ms-0 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 gap-y-6'>
                        {
                            cards.map((i) => (
                                <Card key={i.title} title={i.title} />
                            ))
                        }
                    </div>
                    <h2 className='text-center mt-5 py-14 lg:text-4xl md:text-3xl text-2xl font-bold text-white2'>Наши кейсы</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                        {
                            caseRange.map((i) => (
                                <Case
                                    title={'Платформа для покупок билетов по регионам  Узбекистана'}
                                    image={case1}
                                    items={
                                        [
                                            { name: 'Дизайн' },
                                            { name: 'Вёрстка' },
                                            { name: 'Адаптивный дизайн' }
                                        ]
                                    }
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='bg-white2 container2 w-full py-10'>
                    <div className="container mx-auto py-5">
                        <WhiteSide title={'JUBA - маркетинговое агентство в Ташкенте'} image={a1} body={a1Body} />
                        <div className='mt-10'>
                            <p className='text-black3 text-center text-xl lg:text-3xl font-bold py-10'>Наши результаты в цифрах</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
                                <ResultCard title={'7+'} body={'лет нашая компания на рынке'} />
                                <ResultCard title={'15+'} body={'сотрудников работают в нашей команде'} />
                                <ResultCard title={'50+'} body={'успешных проектов'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-10">
                    <h1 className='text-center text-white font-bold text-3xl xl:text-4xl mt-10'>Наши клиенты</h1>
                </div>

                <div className='bg-yellow2 w-full'>
                    <div className="container mx-auto py-10">
                        <div className='grid grid-cols-2 lg:grid-cols-5 items-center'>
                            <img className='justify-self-center' src={v5} alt="Rasm topilmadi" />
                            <img className='justify-self-center' src={v1} alt="Rasm topilmadi" />
                            <img className='justify-self-center' src={v2} alt="Rasm topilmadi" />
                            <img className='justify-self-center' src={v3} alt="Rasm topilmadi" />
                            <img className='justify-self-center' src={v4} alt="Rasm topilmadi" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-10">
                    <h1 className='text-center text-white font-bold text-3xl xl:text-4xl mt-10'>Наша команда</h1>
                </div>
                <div className="flex justify-center items-center bg-gray2">
                    <img className="mt-10 object-fill" src={team2} alt="Rasm topilmadi" />
                </div>

                <div className='h-20 bg-black2'></div>

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


            <div className='w-full bg-white flex flex-row items-center justify-center gap-5'>
                <img className='w-20 sm:w-24' src={mainLogo} alt="Rasm topilmadi" />
                <h2 className='text-yellow2 font-bold text-base'>Juba<br />Marketing</h2>
            </div>

        </div>
    )
}
