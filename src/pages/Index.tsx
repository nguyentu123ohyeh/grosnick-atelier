import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { PhilosophySection } from "@/components/home/PhilosophySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCollections />
      <PhilosophySection />
    </Layout>
  );
};

export default Index;
