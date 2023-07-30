import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function RootLayout({ children }) {
    return (
        <div>
            {/* getting some issue to wrap navbar in session provider so removed this from here add on _app file */}
            {/* <Navbar /> */}
            {children}
            <Footer />
        </div>
    )
}

export default RootLayout
