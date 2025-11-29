import { Navbar } from "@/components/landing/Navbar";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}