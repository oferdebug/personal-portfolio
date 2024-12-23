"use client";

import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "./ThemeProvider";

export const SpaceBackground = () => {
  const { theme } = useTheme();
  const [isInitialized, setIsInitialized] = useState(false);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
      setIsInitialized(true);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container loaded");
    }
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup if needed
      setIsInitialized(false);
    };
  }, []);

  if (!isInitialized) {
    return null; // or a loading state if preferred
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: theme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            color: theme === "dark" ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: theme === "dark" ? 0.1 : 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            value: 80,
          },
          opacity: {
            value: theme === "dark" ? 0.2 : 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
