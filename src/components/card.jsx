import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function Card({ id, title, short_description }) {
    return (
        <div className='w-80 bg-black3 font-unbound px-5 py-6 rounded-xl hover:cursor-pointer hover:bg-[#333333] transition-all duration-500'>
            <h2 className='text-3xl font-bold text-yellow2 leading-none'>{title}</h2>
            <p className='text-md mt-3 text-white'>{short_description.length > 130 ? short_description.slice(0, 130) + '...' : short_description}</p>
            <Link to={`/${id}`} className='flex flex-row items-center mt-3 space-x-2'>
                <p className='text-[#bdbdbd]'>Подробнее</p>
                <SlArrowRight className='text-[#bdbdbd]' />
            </Link>
        </div>
    )
}
