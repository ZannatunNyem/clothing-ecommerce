import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesSection from "@/components/home/FeaturesSection";
import NewArrivals from "@/components/home/NewArrivals";

import PromoBanner from "@/components/home/PromoBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <FeaturedProducts></FeaturedProducts>
      <PromoBanner></PromoBanner>
      <NewArrivals></NewArrivals>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}
