import { Puff } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='flex w-full h-[100vh] items-center justify-center bg-black3'>
            <Puff
                visible={true}
                height="400"
                width={"100%"}
                color="#faaf0a"
                ariaLabel="puff-loading"
            />
        </div>
    )

}