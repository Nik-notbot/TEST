import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BankServices } from "@/components/BankServices";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <BankServices />
        <Features />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
