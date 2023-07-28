import Banner from '@/components/Banner'
import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Banner />
    </div>
  )
}

export default HomePage



HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout> {page}
    </RootLayout>
  )
}