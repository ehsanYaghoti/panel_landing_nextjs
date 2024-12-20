import HeaderHome from "@/components/general/headerHome";
import LoadingPreRender from "@/components/general/loadings/loadingPrerender";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/heroSection";
import Informaitons from "@/components/landing/informations";
import Pricing from "@/components/landing/pricing";
import Reports from "@/components/landing/reports";
import { Suspense } from "react";

export default function Home() {

  
  return (
    <Suspense fallback={<LoadingPreRender /> }>
    <main className="
      flex flex-col items-center gap-4 w-full 
      bg-[url('/SVG/Ellipse343.svg'),_url('/SVG/Ellipse342.svg')] 
      bg-[size:200px_200px,_600px_600px] 
      bg-[position:top_left,right_bottom]  
      bg-no-repeat
      z-0 
      overflow-y-auto
      " 
    >
      <HeaderHome />
      <HeroSection />
      <Pricing />
      <Features />
      <Reports />
      <Informaitons />
      <Faq />
      <Footer />
    </main>
    </Suspense>
  );
}
