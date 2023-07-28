import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function PowerSupply() {
    return (
        <div>
            <h1>this is PowerSupply page</h1>
        </div>
    )
}

export default PowerSupply

PowerSupply.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}