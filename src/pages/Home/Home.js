import Layout from "../../components/layout/Layout/Layout";
import Hero from "../../components/home/Hero/Hero";
import FeaturedCategories from "../../components/home/FeaturedCategories/FeaturedCategories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import LatestListings from "../../components/home/LatestListings";
import WhyChoose from "../../components/home/WhyChoose";
import HowItWorks from "../../components/home/HowItWorks";
import PopularBrands from "../../components/home/PopularBrands";
import Testimonials from "../../components/home/Testimonials";
import DownloadApp from "../../components/home/DownloadApp";

function Home() {
  return (
    <Layout>

      <Hero />

      <FeaturedCategories />

      <FeaturedProducts />

      <LatestListings />

      <WhyChoose />

      <HowItWorks />

      <PopularBrands />

      <Testimonials />

      <DownloadApp />

    </Layout>
  );
}

export default Home;