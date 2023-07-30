import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

function Monitor({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best monitor for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data?.map(monitor => <>
                                <div key={monitor._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <Image width={250} height={250} src={product.img} alt='' />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{monitor.name}</h2>
                                        <p >Category: {monitor.category}</p>
                                        <p>price: $ {monitor.price}</p>
                                        <p>status:  {monitor.status}</p>
                                        <p>rating: {monitor.rating}/5</p>
                                        <Link href={`/details/${monitor._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default Monitor


Monitor.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://pc-mart-server.vercel.app/monitors');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}