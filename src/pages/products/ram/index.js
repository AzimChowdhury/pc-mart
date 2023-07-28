import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function Ram() {
    return (
        <div>
            <h1>this is Ram page</h1>
        </div>
    )
}

export default Ram


Ram.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}
