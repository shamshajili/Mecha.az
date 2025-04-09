"use client";

import React from "react";
import { Bot, Cpu, Database } from "lucide-react"; 
import { ChevronRightIcon } from '@heroicons/react/solid'
const HeroSection = () => {
  return (
    
    <section className="relative bg-black text-white py-24 px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] bg-green-400 opacity-30 rounded-full blur-[150px] absolute bottom-[-200px]"></div>
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
    </section>
  );
};

export default HeroSection;
