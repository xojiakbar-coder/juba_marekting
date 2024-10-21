
export default function WhiteCard({ number, title, body }) {
    return (
        <div className='bg-white p-8 rounded-3xl'>
            <span className='bg-yellow2 text-white font-normal text-base rounded-full px-5 py-1'>{number}</span>
            <h2 className='lg:text-2xl text-base font-bold text-black3 mt-2'>{title}</h2>
            <p className='text-base text-black4 font-normal mt-2'>{body}</p>
        </div>
    )
}
