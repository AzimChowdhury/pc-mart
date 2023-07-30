import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    const { data: session } = useSession()
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li>
                                <p>Categories</p>
                                <ul className="p-2 w-40 z-50">
                                    <li><Link href='/products/cpu'>CPU</Link></li>
                                    <li><Link href='/products/motherboard'>Mother Board</Link></li>
                                    <li><Link href='/products/ram'>Ram</Link></li>
                                    <li><Link href='/products/powersupply'>Power Supply</Link></li>
                                    <li><Link href='/products/ssd'>SSD/HDD</Link></li>
                                    <li><Link href='/products/monitor'>Monitor</Link></li>
                                    <li><Link href='/products/keyboard'>Keyboard</Link></li>
                                    <li><Link href='/products/mouse'>Mouse</Link></li>
                                    <li><Link href='/products/casing'>Casing</Link></li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                    <Link href={'/'}><p className='text-blue-700 text-3xl font-semibold hover:font-bold'>PC Mart</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li tabIndex={0}>
                            <details>
                                <summary className='text-lg'>Categories</summary>
                                <ul className="p-2 w-40 z-50">
                                    <li><Link href='/products/cpu'>CPU</Link></li>
                                    <li><Link href='/products/motherboard'>Mother Board</Link></li>
                                    <li><Link href='/products/ram'>Ram</Link></li>
                                    <li><Link href='/products/powersupply'>Power Supply</Link></li>
                                    <li><Link href='/products/ssd'>SSD/HDD</Link></li>
                                    <li><Link href='/products/monitor'>Monitor</Link></li>
                                    <li><Link href='/products/keyboard'>Keyboard</Link></li>
                                    <li><Link href='/products/mouse'>Mouse</Link></li>
                                    <li><Link href='/products/casing'>Casing</Link></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href='/build' className="btn bg-blue-700 text-white hover:bg-blue-800">Build now</Link>
                    {session?.user?.email ?
                        <button onClick={() => signOut()} className="btn bg-blue-700 text-white hover:bg-blue-800 mx-3">Logout</button>
                        :
                        <button onClick={() => signIn("github")} className="btn bg-blue-700 text-white hover:bg-blue-800 mx-3">Login</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
