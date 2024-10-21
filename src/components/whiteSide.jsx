
export default function WhiteSide({ title, image, body, customStyle }) {
    return (
        <div className='w-full bg-white2'>
            <h3 className={`md:text-3xl text-md text-black3 font-bold py-5 md:py-14 ${customStyle}`}>{title}</h3>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                <img className='rounded-3xl' src={image} alt="Rasm yuklanmadi" />
                <p className='text-[#828282]'>{body}</p>
            </div>
        </div>
    )
}
