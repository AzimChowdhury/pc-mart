import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function Cpu() {
    return (
        <div>
            <h1>this is cpu page</h1>
        </div>
    )
}

export default Cpu



Cpu.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}