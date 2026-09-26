"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CityScape from "@/components/cityscape-3d";

export default function TownViewer() {
  return (
    <div
      className="town-viewer"
      role="img"
      aria-label="Three-dimensional urban plan with mixed-use buildings, tree-lined streets and a central public park"
    >
      <Canvas
        orthographic
        shadows
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [10, 10, 10], zoom: 43, near: .1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <hemisphereLight args={["#ffffff", "#ccd0c1", 1.2]} />
          <directionalLight
            position={[-6, 11, 7]}
            intensity={2.4}
            castShadow
            shadow-mapSize={[1536, 1536]}
            shadow-camera-left={-8}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-bottom={-8}
            shadow-normalBias={.04}
          />
          <CityScape />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.29, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={.12} />
          </mesh>
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enableDamping={false}
            minPolarAngle={.55}
            maxPolarAngle={1.08}
            target={[0, .55, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
