import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'

function Motherboard({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best Motherboard for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data?.map(motherboard => <>
                                <div key={motherboard._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <img className='w-48 rounded-xl' src={motherboard.img} alt="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{motherboard.name}</h2>
                                        <p >Category: {motherboard.category}</p>
                                        <p>price: $ {motherboard.price}</p>
                                        <p>status:  {motherboard.status}</p>
                                        <p>rating: {motherboard.rating}/5</p>
                                        <Link href={`/details/${motherboard._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Motherboard


Motherboard.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://pc-mart-server.vercel.app/motherboards');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}