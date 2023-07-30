
import RootLayout from '@/components/Layout/RootLayout'
import Link from 'next/link';
import React, { useContext } from 'react'
import { CasingContext, KeyboardContext, MonitorContext, MotherboardContext, MouseContext, PowerSupplyContext, ProcessorContext, RamContext, SsdContext } from '../_app';

function Build() {
    const { processor } = useContext(ProcessorContext)
    const { motherboard } = useContext(MotherboardContext);
    const { ram } = useContext(RamContext)
    const { ssd } = useContext(SsdContext)
    const { powerSupply } = useContext(PowerSupplyContext)
    const { casing } = useContext(CasingContext)
    const { monitor } = useContext(MonitorContext)
    const { keyboard } = useContext(KeyboardContext)
    const { mouse } = useContext(MouseContext)
    const configuration = { processor, motherboard, ram, ssd, powerSupply, casing, monitor, keyboard, mouse }

    const total = ((processor && processor.price) + (motherboard && motherboard.price) + (ram && ram.price) + (ssd && ssd.price) + (powerSupply && powerSupply.price) + (casing && casing.price) + (monitor && monitor.price) + (keyboard && keyboard.price) + (mouse && mouse.price))


    return (
        <div>
            {/* update by context api */}
            <div>
                <div className='m-4 mx-10'>
                    <h2 className='text-3xl text-blue-700 text-center font-semibold'>Your Configuration</h2>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Processor : {processor && processor.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Motherboard : {motherboard && motherboard.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Ram : {ram && ram.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>SSD : {ssd && ssd.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>power Supply : {powerSupply && powerSupply.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Casing : {casing && casing.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Monitor : {monitor && monitor.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Keyboard : {keyboard && keyboard.name} </p>
                    <p className=' btn btn-ghost bg-base-100 shadow-xl shadow-slate-600 border border-slate-400 m-4'>Mouse : {mouse && mouse.name} </p>
                    <div className='flex justify-center'>
                        <h2 className='text-3xl text-blue-700 text-center font-semibold'> Total : $ {total || 0}</h2>
                        {processor && motherboard && ram && ssd && powerSupply && casing && monitor && keyboard && mouse ?
                            <div className='ml-8 flex justify-center'>
                                <label for="my-modal-6" class="btn bg-blue-700 hover:bg-blue-800 text-white font-semibold">
                                    Save your PC
                                </label>
                            </div> : ""}
                    </div>

                </div>
            </div>



            {/*select products for build */}
            <div className='w-11/12  bg-gray-300 mx-auto border-2 rounded-xl p-6 border-blue-700 shadow-2xl shadow-gray-800'>
                <p className='text-3xl text-blue-700 text-center font-semibold py-3'>Build your dream PC</p>
                <div className=' grid grid-cols-1 gap-4'>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Processor {processor ? '(selected)' : ""}</p>
                        <Link href='/build/chooseCpu'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Motherboard {motherboard ? '(selected)' : ""}</p>
                        <Link href='/chooseMotherboard'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Ram {ram ? '(selected)' : ""}</p>
                        <Link href='/chooseRam'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a SSD {ssd ? '(selected)' : ""}</p>
                        <Link href='/chooseSsd'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Power supply {powerSupply ? '(selected)' : ""}</p>
                        <Link href='/powerSupply'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Casing {casing ? '(selected)' : ""}</p>
                        <Link href="/casing"><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Monitor {monitor ? '(selected)' : ""}</p>
                        <Link href='/monitor'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Keyboard {keyboard ? '(selected)' : ""}</p>
                        <Link href='/keyboard'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4  mt-4 flex justify-between h-20'>
                        <p className='text-2xl my-auto'>Select a Mouse {mouse ? '(selected)' : ""}</p>
                        <Link href='/mouse'> <button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>Select</button></Link>
                    </div>

                </div>
            </div>

            {/*====================
                      modal
             ======================= */}
            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag --> */}
            {/* <form onSubmit={saveOrder}>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box ">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-4 top-4 bg-blue-700 hover:bg-blue-800 text-white  border-0">✕</label>
                        <h3 class="font-bold text-3xl text-center ">Confirm your PC</h3>
                        <p className='pl-2'>PC name</p>
                        <input name='name' type='text' required={true} placeholder="name your pc" className="w-full input input-bordered" />
                        <div className='flex justify-between'>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn bg-blue-700 hover:bg-blue-800  text-white">Dont save</label>
                            </div>
                            <div class="modal-action" for='my-modal-6'>
                                <input type="submit" value='Save now' class="btn bg-blue-700 hover:bg-blue-800  text-white" />
                            </div>
                        </div>
                    </div>


                </div>
            </form > */}
        </div>

    )
}

export default Build


Build.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}
