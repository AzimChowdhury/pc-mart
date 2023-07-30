import RootLayout from '@/components/Layout/RootLayout'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

function Casing({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best Casing for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data?.map(casing => <>
                                <div key={casing._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <Image width={250} height={250} src={product.img} alt='' />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{casing.name}</h2>
                                        <p >Category: {casing.category}</p>
                                        <p>price: $ {casing.price}</p>
                                        <p>status:  {casing.status}</p>
                                        <p>rating: {casing.rating}/5</p>
                                        <Link href={`/details/${casing._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default Casing


Casing.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://pc-mart-server.vercel.app/casings')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { id: post._id },
    }))
    return { paths, fallback: false }
}




export async function getStaticProps() {
    const response = await fetch('https://pc-mart-server.vercel.app/casings');
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hour
        revalidate: 10800,
    };
}