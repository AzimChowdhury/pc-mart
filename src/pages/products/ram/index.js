import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'

function Ram({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best Ram for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data?.map(ram => <>
                                <div key={ram._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <Image width={250} height={250} src={product.img} alt='' /> className='w-48 rounded-xl' src={ram.img} alt="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{ram.name}</h2>
                                        <p >Category: {ram.category}</p>
                                        <p>price: $ {ram.price}</p>
                                        <p>status:  {ram.status}</p>
                                        <p>rating: {ram.rating}/5</p>
                                        <Link href={`/details/${ram._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default Ram


Ram.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://pc-mart-server.vercel.app/rams');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}