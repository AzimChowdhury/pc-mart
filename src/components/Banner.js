import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {

    return (
        <div className='lg:flex justify-around'>
            <div className='pl-20 mt-28 font'>
                <h1 className='text-blue-700 text-7xl font-bold'>BUILD YOUR <br />
                    <span className='text-7xl'>DREAM PC</span></h1>
                <p className='text-2xl'>Best products !  Best price !  Best services !</p>
                <Link href='/build'><button className='btn bg-blue-700 text-white text-xl mt-8  hover:bg-blue-800'>Build now</button></Link>
            </div>

            <div className='lg:w-2/4'>
                <Image width={600} height={550} className='mt-5' src='https://i.ibb.co/v3kDz4F/done.png' alt='' />
            </div>
        </div>
    )
}

export default Banner
