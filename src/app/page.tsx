"use client";

import React, { useState, useEffect } from "react";
import { Bot, Cpu, Database } from "lucide-react";
import { ChevronRightIcon } from '@heroicons/react/solid';
import { SplineScene } from "@/components/ui/spline"; // Spline bileşenini import ettik
import { Spotlight } from "@/components/ui/spotlight"; // Spotlight bileşenini import ettik

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Spline bileşeninin yalnızca bileşen yüklendikten sonra render edilmesini sağlıyoruz
  }, []);

  return (
    <Spotlight className="w-full" fill="hsl(var(--primary))"> {/* Spotlight bileşeni eklendi */}
      <section className="relative bg-black text-white py-24 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Yeşil dairenin konumunu değiştirdik */}
          <div className="w-[450px] h-[450px] bg-green-400 opacity-30 rounded-full blur-[150px] absolute bottom-[350px]"></div> {/* bottom değerini burada değiştirdik */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-left pl-4 md:pl-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building the <span className="neon-text">Machine Layer</span><br />
            of Tomorrow
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Cutting-edge robotics, IoT solutions, and smart manufacturing software for the next generation of industrial automation.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
            <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium py-2 px-10 rounded-lg flex items-center gap-2 transition">
              Explore Technology
              <ChevronRightIcon className="w-4 h-4 text-white" />
            </button>

            <div className="p-[2px] rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400">
              <button className="bg-black text-white font-medium py-2 px-10 rounded-lg w-full h-full">
                Request Demo
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Bot className="h-5 w-5 text-cyan-400 neon-icon" />
              </div>
              <span className="text-sm font-medium">Robotics OS</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-green-400 neon-icon" />
              </div>
              <span className="text-sm font-medium">IoT Integration</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Database className="h-5 w-5 text-purple-400 neon-icon" />
              </div>
              <span className="text-sm font-medium">Edge Computing</span>
            </div>
          </div>
        </div>

        <div className="mt-12 relative w-full h-[500px] lg:h-[600px]">
          {mounted && (
            <div className="relative h-full rounded-3xl overflow-hidden border border-primary/20 bg-black/40 backdrop-blur-sm">
              {/* Spline 3D model */}
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 to-transparent"></div>

              {/* Hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-center text-muted-foreground bg-background/80 px-3 py-1 rounded-full backdrop-blur-sm">
                Click and drag to interact with the 3D model
              </div>
            </div>
          )}
        </div>
      </section>
    </Spotlight>
  );
};

export default HeroSection;
