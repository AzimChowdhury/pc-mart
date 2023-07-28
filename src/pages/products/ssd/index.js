import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function SSd() {
    return (
        <div>
            <h1>this is SSd page</h1>
        </div>
    )
}

export default SSd

SSd.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}