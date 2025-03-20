import { Header , Banner  , LatestProducts , Carousel , Sale , RecommendedProducts } from "../Home"
import Footer from "../Layout/Footer";



function Home() {
  

  return (
    <>
      <div>
        <Header />
        <Banner/>
        <RecommendedProducts />
        <Carousel/>
        <Sale/>
        <LatestProducts />
        <Footer />
        
        </div>
  
    </>
  )
}

export default Home
