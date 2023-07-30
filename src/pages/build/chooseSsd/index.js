"use  client"
import RootLayout from '@/components/Layout/RootLayout';
import { SsdContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useContext } from 'react'

function ChooseSsd({ data }) {
    const router = useRouter()
    const { setSsd } = useContext(SsdContext)
    return (
        <div className=' grid grid-cols-2  gap-10 mx-48 my-10'>
            {data.map(d => <>
                <div className='w-full flex border-2 border-gray-400 rounded-xl '>
                    <img src={d.img} alt='' />
                    <div className='ml-3'>
                        <p className='text-xl font-semibold pr-4 pt-4' >{d.name}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>price : ${d.price}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>category : {d.category}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>status : {d.status}</p>
                        <p className='text-lg font-semibold pr-4 pt-2'>rating : {d.rating}/5</p>
                        <button onClick={() => { setSsd(d); router.push('/build') }} className='btn bg-blue-700 hover:bg-blue-800 text-white m-3'>Select</button>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default ChooseSsd



export async function getServerSideProps() {
    const response = await fetch('http://localhost:5000/ssds');
    const data = await response.json();
    return {
        props: {
            data
        }
    };
}



ChooseSsd.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}