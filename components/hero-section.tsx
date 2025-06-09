"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import CityScape from "@/components/cityscape-3d";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 5, 10], fov: 60 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <CityScape />
            </Float>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white/60 dark:bg-slate-900/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/30 dark:border-slate-700/30 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm"
          >
            Natasha Nomzamo Khanye
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium">
              <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
              Urban Planning
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium">
              <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
              Sustainable Cities
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Graduate Urban and Regional Planner passionate about creating
            sustainable, inclusive communities through innovative planning
            solutions and green infrastructure development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer p-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm mx-auto w-fit"
            onClick={scrollToAbout}
          >
            <ArrowDown className="h-8 w-8 text-green-600 dark:text-green-400 drop-shadow-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
