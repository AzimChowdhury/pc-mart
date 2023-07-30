
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


    const total = ((processor && processor.price) + (motherboard && motherboard.price) + (ram && ram.price) + (ssd && ssd.price) + (powerSupply && powerSupply.price) + (casing && casing.price) + (monitor && monitor.price) + (keyboard && keyboard.price) + (mouse && mouse.price))


    return (
        <div>


            {/*select products for build */}
            <div className='w-11/12  mx-auto   '>
                <p className='text-3xl text-blue-700 text-center font-semibold py-3'>Build your dream PC</p>
                <div className=' grid grid-cols-1 gap-4'>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a Processor </p>
                            {processor ? <p className='text-xl my-auto'>{processor.name} <br /> price: ${processor.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseCpu'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{processor ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a Motherboard </p>
                            {motherboard ? <p className='text-xl my-auto'>{motherboard.name} <br /> price:$ {motherboard.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseMotherboard'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{motherboard ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a Ram </p>
                            {ram ? <p className='text-xl my-auto'>{ram.name} <br /> price:$ {ram.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseRam'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{ram ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a SSD </p>
                            {ssd ? <p className='text-xl my-auto'>{ssd.name} <br /> price:$ {ssd.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseSsd'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{ssd ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a powerSupply </p>
                            {powerSupply ? <p className='text-xl my-auto'>{powerSupply.name} <br /> price:$ {powerSupply.price}</p> : ""}
                        </div>
                        <Link href='/build/choosePowerSupply'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{powerSupply ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a casing </p>
                            {casing ? <p className='text-xl my-auto'>{casing.name} <br /> price:$ {casing.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseCasing'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{casing ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a monitor </p>
                            {monitor ? <p className='text-xl my-auto'>{monitor.name} <br /> price:$ {monitor.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseMonitor'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{monitor ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a keyboard </p>
                            {keyboard ? <p className='text-xl my-auto'>{keyboard.name} <br /> price:$ {keyboard.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseKeyboard'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{keyboard ? 'ReSelect' : "select"}</button></Link>
                    </div>
                    <div className='w-full bg-white rounded-xl p-4 mt-4 flex justify-between h-auto'>
                        <div>
                            <p className='text-2xl text-blue-700 my-auto'>Select a mouse </p>
                            {mouse ? <p className='text-xl my-auto'>{mouse.name} <br /> price:$ {mouse.price}</p> : ""}
                        </div>
                        <Link href='/build/chooseMouse'><button className='btn bg-blue-700 hover:bg-blue-800 text-white  grid justify-self-end'>{mouse ? 'ReSelect' : "select"}</button></Link>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <p className='flex items-center text-3xl font-semibold mx-5'>Total Price: $ {total ? total : 0}</p>
                    <button onClick={() => alert('pc build successful')}
                        disabled={
                            !(processor && motherboard && ram && ssd && powerSupply && casing && monitor && keyboard && mouse)
                        }
                        className='btn bg-blue-700 hover:bg-blue-800 text-white  px-16 my-5'>Complete Build</button>
                </div>
            </div>


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
