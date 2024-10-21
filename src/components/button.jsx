export default function Button({ title }) {
    return (
        <button className='bg-yellow2 p-4 w-auto max-w-[300px] mx-auto rounded-2xl text-center text-black2 text-base font-bold'>
            {title}
        </button>
    );
}
