import { SlArrowRight } from "react-icons/sl";
import { cardBody } from '../data';

export default function Card({ title, body = cardBody, link = "localhost:3000" }) {
    return (
        <div className='w-80 bg-black3 font-unbound px-5 py-6 rounded-xl hover:cursor-pointer hover:bg-[#333333] transition-all duration-500'>
            <h2 className='text-3xl font-bold text-yellow2 leading-none'>{title}</h2>
            <p className='text-md mt-3 text-white'>{body}</p>
            <a className='flex flex-row items-center mt-3 space-x-2' href={link}>
                <p className='text-[#bdbdbd]'>Подробнее</p>
                <SlArrowRight className='text-[#bdbdbd]' />
            </a>
        </div>
    )
}
