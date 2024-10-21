
export default function BlackCard({ title, price, tags }) {
    return (
        <div className='rounded-3xl border border-white py-7'>
            <div className='text-center'>
                <h3 className='font-bold text-white text-base md:text-2xl'>{title}</h3>
                <p className='text-yellow2 font-bold text-3xl'>{price}</p>
            </div>
            <div className='mt-5 text-white font-normal text-sm md:text-base px-10'>
                {
                    tags.map((i) => (
                        <p className='mt-2'>+ {i.name}</p>
                    ))
                }
            </div>
        </div>
    )
}
