import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'

function Monitor({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best monitor for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data.map(monitor => <>
                                <div key={monitor._id} className="card  bg-base-100 h-96 shadow-2xl  shadow-slate-500  ">
                                    <figure className="px-10 pt-10">
                                        <img className='w-48 rounded-xl' src={monitor.img} alt="" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{monitor.name}</h2>
                                        <p >Category: {monitor.category}</p>
                                        <p>price: $ {monitor.price}</p>
                                        <p>status:  {monitor.status}</p>
                                        <p>rating: {monitor.rating}/5</p>
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
    const response = await fetch('http://localhost:5000/monitors');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}