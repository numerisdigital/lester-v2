import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Differentiator } from "@/components/site/Differentiator";
import { Testimonial } from "@/components/site/Testimonial";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Differentiator />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
