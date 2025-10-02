import { Hero } from "@/components/sections/Hero";
import { NeumannSection } from "@/components/sections/NeumannSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const { toast } = useToast();

  // Check for success parameter and show toast
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isSuccess = urlParams.get("success");

    console.log("🔍 URL atual:", window.location.href);
    console.log("📝 Parâmetros URL:", window.location.search);
    console.log("✅ Parâmetro success:", isSuccess);

    if (isSuccess === "true") {
      console.log("🎉 Chamando toast de sucesso!");
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description:
          "Obrigado pelo seu contato. Entraremos em contato em breve.",
        duration: 5000,
      });

      // Clean up URL by removing the success parameter
      const newUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      console.log("🧹 Limpando URL para:", newUrl);
      window.history.replaceState({}, document.title, newUrl);
    } else {
      console.log('❌ Parâmetro success não encontrado ou não é "true"');
    }
  }, [toast]);

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Moving gradient blobs with different blue tones */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background:
              "linear-gradient(45deg, hsl(204, 93%, 51%), hsl(194, 100%, 63%), hsl(204, 100%, 85%))",
            animation: "moveBlob1 15s ease-in-out infinite",
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-2xl opacity-12"
          style={{
            background:
              "linear-gradient(135deg, hsl(194, 100%, 63%), hsl(204, 93%, 51%), hsl(204, 100%, 94%))",
            animation: "moveBlob2 20s ease-in-out infinite reverse",
            right: "15%",
            bottom: "25%",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-xl opacity-10"
          style={{
            background:
              "linear-gradient(225deg, hsl(204, 100%, 85%), hsl(204, 93%, 51%), hsl(194, 100%, 63%))",
            animation: "moveBlob3 12s ease-in-out infinite",
            left: "60%",
            top: "15%",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-2xl opacity-18"
          style={{
            background:
              "linear-gradient(315deg, hsl(204, 93%, 51%), hsl(204, 100%, 85%), hsl(194, 100%, 63%))",
            animation: "moveBlob4 18s ease-in-out infinite reverse",
            left: "20%",
            bottom: "30%",
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full blur-xl opacity-12"
          style={{
            background:
              "linear-gradient(90deg, hsl(194, 100%, 63%), hsl(204, 100%, 94%), hsl(204, 93%, 51%))",
            animation: "moveBlob5 14s ease-in-out infinite",
            right: "25%",
            top: "40%",
          }}
        />
        <div
          className="absolute w-88 h-88 rounded-full blur-3xl opacity-8"
          style={{
            background:
              "linear-gradient(180deg, hsl(204, 93%, 51%), hsl(194, 100%, 63%), hsl(204, 100%, 85%))",
            animation: "moveBlob6 25s ease-in-out infinite",
            left: "70%",
            bottom: "10%",
          }}
        />
      </div>

      {/* Scroll Indicator - Only shows when page is scrollable and after 1s of inactivity */}
      {/* {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40">
          <div className="w-6 h-10 rounded-full bg-[#1ca9f9] flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      )} */}

      <main className="flex flex-col relative z-10">
        <Hero />
        <NeumannSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
