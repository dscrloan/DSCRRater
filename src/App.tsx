import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { JumpNavigation } from "./components/JumpNavigation";
import { QuickAnswer } from "./components/QuickAnswer";
import { RateFactors } from "./components/RateFactors";
import { EstimatorWalkthrough } from "./components/EstimatorWalkthrough";
import { StateSnapshots } from "./components/StateSnapshots";
import { PropertyTypes } from "./components/PropertyTypes";
import { ImprovePricing } from "./components/ImprovePricing";
import { DocsTimeline } from "./components/DocsTimeline";
import { FAQs } from "./components/FAQs";
import { Resources } from "./components/Resources";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";

export default function App() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <Hero />
          
          <div className="container mx-auto max-w-4xl px-4 mb-12">
            <JumpNavigation />
          </div>
          
          <QuickAnswer />
          <RateFactors />
          <EstimatorWalkthrough />
          <StateSnapshots />
          <PropertyTypes />
          <ImprovePricing />
          <DocsTimeline />
          <FAQs />
          <Resources />
        </main>
        
        <Footer />
      </div>
    </>
  );
}