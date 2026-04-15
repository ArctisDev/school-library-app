import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Award } from "@/components/sections/Award";
import { Download } from "@/components/sections/Download";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <Award />
        <Download />
      </main>
      <Footer />
    </>
  );
}