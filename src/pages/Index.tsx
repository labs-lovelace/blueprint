import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { NeumannSection } from "@/components/sections/NeumannSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      // Hide indicator immediately when scrolling
      setShowScrollIndicator(false);

      // Clear existing timer
      clearTimeout(scrollTimer);

      // Check if page can be scrolled
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight;

      if (canScroll) {
        // Set timer to show indicator after 1 second of no scroll activity
        scrollTimer = setTimeout(() => {
          setShowScrollIndicator(true);
        }, 1000);
      }
    };

    const checkInitialScroll = () => {
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight;
      if (canScroll) {
        // Show indicator after 1 second on initial load
        scrollTimer = setTimeout(() => {
          setShowScrollIndicator(true);
        }, 1000);
      }
    };

    // Check on initial load
    checkInitialScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also listen for resize events in case page height changes
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Indicator - Only shows when page is scrollable and after 1s of inactivity */}
      {/* {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40">
          <div className="w-6 h-10 rounded-full bg-[#1ca9f9] flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      )} */}

      <main className="flex flex-col">
        <Hero />
        <NeumannSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
