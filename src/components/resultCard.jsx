
export default function ResultCard({ title, body }) {
    return (
        <div className='bg-black3 p-7 md:py-10 rounded-3xl hover:cursor-pointer hover:bg-[#333333] transition-all duration-500'>
            <h2 className='text-5xl text-yellow2'>{title}</h2>
            <p className='text-white mt-2 md:mt-5 text-xl font-normal md:text-2xl'>{body}</p>
        </div>
    )
}
