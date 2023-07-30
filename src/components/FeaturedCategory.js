
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeaturedCategory({ randomCategories }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Featured Category</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            randomCategories?.map(product => <>
                                <div key={product._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <Image width={250} height={250} src={product.img} alt='' />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">Category: {product.category}</h2>
                                        <Link href={`${product.redirectUrl}`} ><button className='btn btn-primary btn-sm mt-3'>View All Products</button></Link>
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

export default FeaturedCategory


