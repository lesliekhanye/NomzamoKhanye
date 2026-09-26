"use client";

import { Box, Cylinder, Sphere } from "@react-three/drei";

const buildings = [
  [-3.55, -2.85, 1.4, 1.1, 1.85, "#e9e7dc"],
  [-3.5, -1.12, 1.5, 1.28, 1.25, "#d9ddd1"],
  [-.55, -3.08, .9, 1.35, 2.55, "#e9e8e1"],
  [.65, -2.8, 1.04, 1.27, 3.05, "#e0e2d9"],
  [-.5, -.8, 1.28, 1.2, 1.5, "#e9e7dd"],
  [3.5, -3.12, 1.48, 1.12, 2.05, "#e9e7dc"],
  [3.48, -1.25, 1.5, 1.22, 1.2, "#dce0d4"],
  [-3.9, 2.08, .72, .9, .84, "#e8e4d8"],
  [-2.88, 2.08, .72, .9, 1.02, "#eeece3"],
  [-3.9, 3.57, .72, .83, .82, "#e5e0d3"],
  [-2.88, 3.57, .72, .83, .82, "#eeece4"],
  [3.52, 2.2, 1.5, 1.3, 1.45, "#e3e4d8"],
  [3.55, 3.7, 1.5, .62, .76, "#eae8dd"],
] as const;

function Building({
  x, z, width, depth, height, color, index,
}: {
  x: number; z: number; width: number; depth: number; height: number; color: string; index: number;
}) {
  const floors = Math.max(1, Math.floor(height / .36));
  const windows = Array.from({ length: Math.max(2, Math.floor(width / .23)) }, (_, i) => i);
  return (
    <group position={[x, .105, z]}>
      <Box args={[width, height, depth]} position={[0, height / 2, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={.94} />
      </Box>
      {Array.from({ length: floors }, (_, floor) => windows.map((window) => {
        const wx = -width / 2 + .13 + window * ((width - .24) / Math.max(1, windows.length - 1));
        return <group key={`${floor}-${window}`}>
          <Box args={[.07, .12, .015]} position={[wx, .23 + floor * .36, depth / 2 + .009]}>
            <meshStandardMaterial color="#8b9a98" roughness={.72} />
          </Box>
          <Box args={[.015, .12, .07]} position={[width / 2 + .009, .23 + floor * .36, wx * depth / width]}>
            <meshStandardMaterial color="#92a09d" roughness={.72} />
          </Box>
        </group>;
      }))}
      <Box args={[width + .045, .065, depth + .045]} position={[0, height + .033, 0]} castShadow>
        <meshStandardMaterial color="#f5f3ea" roughness={1} />
      </Box>
      <Box args={[width - .13, .028, depth - .13]} position={[0, height + .078, 0]}>
        <meshStandardMaterial color={index % 3 === 0 ? "#a6b598" : "#d0d2c8"} roughness={1} />
      </Box>
    </group>
  );
}

function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, .11, z]} scale={scale}>
      <Cylinder args={[.025, .035, .34, 6]} position={[0, .17, 0]} castShadow>
        <meshStandardMaterial color="#898775" />
      </Cylinder>
      <Sphere args={[.19, 8, 7]} position={[0, .44, 0]} castShadow>
        <meshStandardMaterial color="#96a88b" roughness={1} flatShading />
      </Sphere>
      <Sphere args={[.14, 8, 7]} position={[.095, .42, .045]} castShadow>
        <meshStandardMaterial color="#a8b89b" roughness={1} flatShading />
      </Sphere>
    </group>
  );
}

export default function CityScape() {
  return (
    <group>
      <Box args={[9.65, .28, 8.75]} position={[0, -.14, 0]} receiveShadow>
        <meshStandardMaterial color="#e2e1d8" roughness={1} />
      </Box>
      {[-1.65, 1.65].map((x) => (
        <group key={`avenue-${x}`}>
          <Box args={[.74, .03, 8.72]} position={[x, .02, 0]}>
            <meshStandardMaterial color="#aeb3ab" roughness={1} />
          </Box>
          <Box args={[.025, .006, 8.45]} position={[x, .039, 0]}>
            <meshStandardMaterial color="#efeee6" roughness={1} />
          </Box>
          {Array.from({ length: 16 }, (_, i) => (
            <Box key={i} args={[.016, .005, .18]} position={[x, .041, -3.8 + i * .49]}>
              <meshStandardMaterial color="#ecebe2" />
            </Box>
          ))}
        </group>
      ))}
      <Box args={[9.62, .035, .74]} position={[0, .024, .8]}>
        <meshStandardMaterial color="#aeb3ab" roughness={1} />
      </Box>
      <Box args={[9.5, .006, .025]} position={[0, .045, .8]}>
        <meshStandardMaterial color="#eeede5" />
      </Box>
      {buildings.map(([x, z, width, depth, height, color], index) => (
        <Building key={index} {...{ x, z, width, depth, height, color, index }} />
      ))}
      {/* Pocket park, tree-lined walks and a small rain garden. */}
      <Box args={[2.24, .07, 2.83]} position={[0, .045, 2.8]} receiveShadow>
        <meshStandardMaterial color="#b8c4aa" roughness={1} />
      </Box>
      <Box args={[.16, .016, 2.77]} position={[0, .09, 2.8]}>
        <meshStandardMaterial color="#eeeadd" />
      </Box>
      <Box args={[2.2, .016, .17]} position={[0, .09, 2.8]}>
        <meshStandardMaterial color="#eeeadd" />
      </Box>
      <Cylinder args={[.27, .3, .018, 28]} position={[.62, .098, 3.45]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#a3b6ae" roughness={.7} />
      </Cylinder>
      {[
        [-.75, 1.76], [.74, 1.83], [-.73, 2.38], [-.72, 3.45], [.87, 3.91],
        [-.45, 3.96], [-4.42, -3.75], [-2.53, -3.75], [-2.4, -2.8], [-2.4, -1.8],
        [-2.4, -.65], [2.4, -3.82], [2.4, -2.9], [2.4, -1.95], [2.4, -.55],
        [4.4, -2.22], [4.42, -.72], [-4.45, 1.46], [-2.3, 3.75], [2.4, 1.6],
        [2.4, 2.68], [2.4, 3.66], [4.42, 1.39], [-.83, -3.93], [.76, -3.9],
      ].map(([x, z], i) => <Tree key={i} x={x} z={z} scale={.77 + (i % 3) * .12} />)}
    </group>
  );
}
