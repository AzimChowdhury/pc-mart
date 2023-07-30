import RootLayout from '@/components/Layout/RootLayout'
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

function DetailsPage({ data }) {
    const router = useRouter()
    const { id } = router.query;

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image width={250} height={250} src={product.img} alt='' />
                    <div>
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <p className="text-xl py-1">category: {data.category}</p>
                        <p className="text-xl py-1">price: ${data.price}</p>
                        <p className="text-xl py-1">status: {data.status}</p>
                        <p className="text-xl py-1">rating: {data.rating}/5</p>
                        <p className="text-xl py-1">Key Feature: {data.keyFeature}</p>
                        <p className="text-xl py-1">description: {data.description}</p>

                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-2xl font-semibold text-center'>Reviews</p>
                <div className='mx-auto max-w-fit'>
                    {
                        data?.review?.map((review, index) =>
                            <div key={index} className='flex my-2 items-center'>
                                <Image width={250} height={250} src={product.img} alt='' />
                                <p className='mx-2'>{review}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailsPage



DetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}
export async function getStaticProps({ params }) {
    const { id } = params;
    const response = await fetch(`https://pc-mart-server.vercel.app/details/${id}`);
    const data = await response.json();
    return {
        props: {
            data,
        },
        //   3 hours
        revalidate: 10800,
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}
