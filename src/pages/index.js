import Banner from '@/components/Banner'
import FeaturedCategory from '@/components/FeaturedCategory'
import FeaturedProducts from '@/components/FeaturedProducts'
import RootLayout from '@/components/Layout/RootLayout'
import React from 'react'

function HomePage({ randomProducts, randomCategories }) {

  return (
    <div>
      <Banner />
      <FeaturedProducts randomProducts={randomProducts} />
      <FeaturedCategory randomCategories={randomCategories} />
    </div>
  )
}

export default HomePage



export async function getStaticProps() {
  try {

    const response = await fetch(`${process.env.SERVER_URL}/random`);
    const randomProducts = await response.json();

    const response2 = await fetch(`${process.env.SERVER_URL}/randomcategories`);
    const randomCategories = await response2.json();

    return {
      props: {
        randomProducts,
        randomCategories,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        randomProducts: [],
        randomCategories: [],
      },
    };
  }
}


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout> {page}
    </RootLayout>
  )
}
