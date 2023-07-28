import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function Casing() {
    return (
        <div>
            <h1>this is casing page</h1>
        </div>
    )
}

export default Casing



Casing.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}