import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      
      {/* We don't need padding here because the Pricing component 
          already has 'py-32' (padding-top: 8rem) which clears 
          the fixed Navbar nicely. */}
      <Pricing />
      
      <CTA />
      <Footer />
    </main>
  );
}