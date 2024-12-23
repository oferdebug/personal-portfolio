"use client";

import { useState, useEffect } from "react";
import { SpaceBackground } from "@/components/SpaceBackground";
import { FloatingNav } from "@/components/FloatingNav";
import { CustomCursor } from "@/components/CustomCursor";
import { GalaxyLoader } from "@/components/GalaxyLoader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SoundToggle } from "@/components/SoundToggle";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <GalaxyLoader />
      ) : (
        <>
          <SpaceBackground />
          <CustomCursor />
          <ScrollProgress />
          <ThemeToggle />
          <SoundToggle />
          <PageTransition>
            <main className="relative z-10">{children}</main>
          </PageTransition>
          <FloatingNav />
        </>
      )}
    </ThemeProvider>
  );
}
