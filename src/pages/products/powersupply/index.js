import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'

function PowerSupply({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best Power Supply for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data.map(powerSupply => <>
                                <div key={powerSupply._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <img className='w-48 rounded-xl' src={powerSupply.img} alt="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{powerSupply.name}</h2>
                                        <p >Category: {powerSupply.category}</p>
                                        <p>price: $ {powerSupply.price}</p>
                                        <p>status:  {powerSupply.status}</p>
                                        <p>rating: {powerSupply.rating}/5</p>
                                        <Link href={`/details/${powerSupply._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default PowerSupply


PowerSupply.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/powerSuppliers');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}