"use  client"
import RootLayout from '@/components/Layout/RootLayout';
import { KeyboardContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext } from 'react'

function ChooseKeyboard({ data }) {
    const router = useRouter()
    const { setKeyboard } = useContext(KeyboardContext)
    return (
        <div className=' grid grid-cols-2  gap-10 mx-48 my-10'>
            {data?.map(d => <>
                <div className='w-full flex border-2 border-gray-400 rounded-xl '>
                    <Image width={250} height={250} src={product.img} alt='' />
                    <div className='ml-3'>
                        <p className='text-xl font-semibold pr-4 pt-4' >{d.name}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>price : ${d.price}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>category : {d.category}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>status : {d.status}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>rating : {d.rating}/5</p>
                        <button onClick={() => { setKeyboard(d); router.push('/build') }} className='btn bg-blue-700 hover:bg-blue-800 text-white m-3'>Select</button>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default ChooseKeyboard



export async function getServerSideProps() {
    const response = await fetch('https://pc-mart-server.vercel.app/keyboards');
    const data = await response.json();
    return {
        props: {
            data
        }
    };
}



ChooseKeyboard.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}