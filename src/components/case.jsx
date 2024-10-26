
export default function Case({ title, image, items }) {
    return (
        <div className='border border-white2 px-8 rounded-3xl hover:cursor-pointer hover:bg-[#222222] transition-all duration-500'>
            <h3 className='font-unbound text-white2 font-normal py-4 text-xl lg:text-2xl xl:text-3xl'>{title}</h3>
            <div>
                <img className='rounded-2xl object-cover h-64 md:h-96 w-full hover:scale-105 transition-all duration-500' src={image} alt="Rasm yuklanmadi" />
            </div>
            <div className='flex flex-row gap-3 lg:gap-5 py-7 flex-wrap'>
                {
                    items.map((i) => (
                        <p key={i?.id} className='text-gray3 text-center hover:bg-[#444444] transition-all text-sm duration-500 border-gray3 border rounded-lg p-2 lg:p-3'>{i?.title}</p>
                    ))
                }
            </div>
        </div>
    )
}


