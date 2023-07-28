import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function MotherBoard() {
    return (
        <div>
            <h1>this is MotherBoard page</h1>
        </div>
    )
}

export default MotherBoard

MotherBoard.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}