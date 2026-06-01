import HeroSection from "@/component/HeroSection";
import HomePage from "@/component/Home";
import HowItWorks from "@/component/HowItWork";
import WhyChooseUs from "@/component/WhyChouseUs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomePage />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
}
