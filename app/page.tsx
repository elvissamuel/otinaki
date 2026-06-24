import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Overview } from "./components/Overview";
import { About } from "./components/About";
import { WhatWeDo } from "./components/WhatWeDo";
import { BlogPreview } from "./components/BlogPreview";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <About />
        <WhatWeDo />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
