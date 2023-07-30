
import Link from 'next/link'
import React from 'react'

function FeaturedCategory({ randomProducts }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Featured Category</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            randomProducts?.map(product => <>
                                <div key={product._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <img className='w-48 rounded-xl' src={product.img} alt="" />
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

