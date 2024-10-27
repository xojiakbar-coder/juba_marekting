import { mainLogo } from '../assets'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='w-full bg-white flex flex-row items-center justify-center gap-5'>
            <img className='w-20 sm:w-24' src={mainLogo} alt="Rasm topilmadi" />
            <Link to="/"><h2 className='text-yellow2 font-bold text-base'>Juba<br />Marketing</h2></Link>
        </div>
    )
}
