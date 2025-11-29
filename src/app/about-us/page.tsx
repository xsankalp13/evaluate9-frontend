import { Navbar } from "@/components/landing/Navbar";
import { AboutUs } from "@/components/landing/AboutUs"; // Import the new component
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <AboutUs />
      <CTA />
      <Footer />
    </main>
  );
}