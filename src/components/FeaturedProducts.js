
import Link from 'next/link'
import React from 'react'

function FeaturedProducts({ randomProducts }) {
    return (
        <div>
            <div className='mx-24 '>
                <h2 className=' text-3xl font-semibold text-center m-10'>Featured Products</h2>
                <div className=''>
                    <div className='grid grid-cols-4 gap-10'>
                        {
                            randomProducts?.map(product => <>
                                <div key={product._id} className="card p-5 bg-base-100 h-auto shadow-2xl  shadow-slate-500  ">
                                    <figure className=" ">
                                        <img className='w-48 rounded-xl' src={product.img} alt="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className=" text-lg font-semibold">{product.name}</h2>
                                        <p >Category: {product.category}</p>
                                        <p>price: $ {product.price}</p>
                                        <p>status:  {product.status}</p>
                                        <p>rating: {product.rating}/5</p>
                                        <Link href={`/details/${product._id}`} ><button className='btn btn-primary btn-sm'>Details</button></Link>
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

export default FeaturedProducts


