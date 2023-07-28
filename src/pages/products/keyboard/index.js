import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function Keyboard() {
    return (
        <div>
            <h1>this is keyboard page</h1>
        </div>
    )
}

export default Keyboard



Keyboard.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}