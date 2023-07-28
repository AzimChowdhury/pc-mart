import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function Mouse() {
    return (
        <div>
            <h1>this is Mouse page</h1>
        </div>
    )
}

export default Mouse

Mouse.getLayout = function getLayout(page) {
    return (
        <RootLayout> {page}
        </RootLayout>
    )
}