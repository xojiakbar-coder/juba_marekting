

export default function ImageOverlay({ title, short_description, photo }) {


    return (
        <div>
            <div className='relative w-full h-[30vh] md:h-[40vh] lg:h-[65vh] overflow-hidden rounded-3xl font-unbound'>
                <img
                    src={photo}
                    alt="Background"
                    className='absolute inset-0 w-full h-full object-cover lg:object-cover'
                />
                <div className='absolute inset-0 flex ps-[8%] flex-col justify-center items-start bg-gradient-to-r from-black/80 via-black/30 to-black/10'>
                    <div className='hidden lg:flex flex-col space-y-2 w-1/2'>
                        {/* <h2 className='md:text-3xl lg:text-4xl xl:text-6xl text-yellow2 font-bold'></h2> */}
                        <h2 className='md:text-3xl lg:text-4xl xl:text-6xl text-white2 font-bold'>{title}</h2>
                        <p className='text-white text-md'>{short_description}</p>
                        {/* <div className='font-unbound flex flex-row items-center space-x-4'>
                                    <a className='bg-yellow2 px-4 py-4 rounded-lg mt-5 font-bold' href="localhost:3000">Обсудить проект</a>
                                    <a className='bg-white2 px-4 py-4 rounded-lg mt-5 font-bold' href="localhost:3000">Коммерческое предложение</a>
                                </div> */}
                    </div>
                </div>
            </div>

            <div className='flex lg:hidden flex-col space-y-2 w-full mt-5'>
                {/* <h2 className='text-3xl md:text-4xl lg:text-5xl text-yellow2 font-bold'>Маркетинговое</h2> */}
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-white2 font-bold'>{title}</h2>
                <p className='text-white text-md'>{short_description}</p>
                {/* <div className='font-unbound flex flex-col lg:flex-row lg:items-center w-full'>
                    <a className='bg-yellow2 px-4 text-sm flex-grow py-3 text-md text-center md:w-1/2 rounded-xl mt-5 font-bold' href="localhost:3000">Обсудить проект</a>
                    <a className='bg-white2 px-4 text-sm flex-grow py-3 text-md text-center md:w-1/2 rounded-xl mt-5 font-bold' href="localhost:3000">Коммерческое предложение</a>
                </div> */}
            </div>
        </div>
    );
}
