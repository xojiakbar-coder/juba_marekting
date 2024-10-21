import { useState } from 'react';
import { mainLogo } from '../assets';
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex sm:flex-row font-unbound justify-between px-8 lg:px-0 lg:justify-evenly items-center space-y-4 sm:space-y-0'>
            <div className='flex flex-row items-center'>
                <img className='w-20 sm:w-24' src={mainLogo} alt="Rasm yo'q" />
                <div className='ms-2 text-md leading-5 text-yellow2 font-bold'>
                    <p>Juba</p>
                    <p>Marketing</p>
                </div>
            </div>

            <div className='hidden xl:flex lg:flex-row items-center'>
                <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-3 xl:space-x-10 text-white2 text-base font-normal'>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Главная</a>
                    </li>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">О компании</a>
                    </li>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Проекты</a>
                    </li>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Команда</a>
                    </li>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Услуги</a>
                    </li>
                    <li>
                        <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Контакты</a>
                    </li>
                </ul>
            </div>

            <div className='hidden md:flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6'>
                <ul className='flex flex-row space-x-3'>
                    <li className='text-yellow2'>
                        <a className='font-bold' href="localhost:3000">Ru</a>
                    </li>
                    <li className='text-white2'>
                        <a className='font-bold' href="localhost:3000">Uz</a>
                    </li>
                </ul>
                <a className='border border-solid px-5 py-3 border-[#faaf0a] text-yellow2 rounded-xl hover:bg-yellow2 hover:text-white2 transition-all duration-300 font-bold' href="tel:+998971432220">+998 97 143 22 20</a>
            </div>

            {/* Hamburger menu */}
            <div className='flex xl:hidden p-3 rounded-full bg-white2' onClick={toggleMenu}>
                <HiMenuAlt4 className='text-yellow2 w-full text-2xl' />
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className='absolute text-white2 z-10 top-0 left-0 right-0 bg-black2 p-4 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <ul className='flex flex-row space-x-4'>
                            <li className='text-yellow2'>
                                <a className='font-bold' href="localhost:3000">Ru</a>
                            </li>
                            <li className='text-white2'>
                                <a className='font-bold' href="localhost:3000">Uz</a>
                            </li>
                        </ul>
                        <div className='cursor-pointer bg-white2 p-3 rounded-full' onClick={toggleMenu}>
                            <HiX className='text-yellow2 text-2xl' />
                        </div>
                    </div>
                    <ul className='flex flex-col items-center mt-4 space-y-4 text-3xl'>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Главная</a>
                        </li>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">О компании</a>
                        </li>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Проекты</a>
                        </li>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Команда</a>
                        </li>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Услуги</a>
                        </li>
                        <li>
                            <a className='hover:text-yellow2 transition-all duration-300' href="localhost:3000">Контакты</a>
                        </li>
                    </ul>
                    <a className='mt-4 text-center border border-solid px-5 py-3 border-[#faaf0a] text-yellow2 rounded-xl hover:bg-yellow2 hover:text-white2 transition-all duration-300 font-bold' href="tel:+998971432220">+998 97 143 22 20</a>
                </div>
            )}
            {/* Hamburger menu */}
        </div>
    )
}
