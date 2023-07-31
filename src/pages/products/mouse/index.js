import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

function Mouse({ data }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Choose best Mouse for your pc</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            data?.map(mouse => <>
                                <div key={mouse._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <Image width={250} height={250} src={mouse.img} alt='' />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{mouse.name}</h2>
                                        <p >Category: {mouse.category}</p>
                                        <p>price: $ {mouse.price}</p>
                                        <p>status:  {mouse.status}</p>
                                        <p>rating: {mouse.rating}/5</p>
                                        <Link href={`/details/${mouse._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default Mouse


Mouse.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    try {
        const response = await fetch('https://pc-mart-server.vercel.app/mouses');
        const data = await response.json();
        return {
            props: {
                data,
            },
            //   3 hour
            revalidate: 10800,
        };

    } catch (error) {
        return {
            props: {
                data: [],
            }
        };
    }

}