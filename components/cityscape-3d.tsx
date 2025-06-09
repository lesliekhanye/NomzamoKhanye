"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Cylinder } from "@react-three/drei"
import type * as THREE from "three"

const Building = ({
  position,
  height,
  color,
}: { position: [number, number, number]; height: number; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.01
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[1, height, 1]}>
      <meshStandardMaterial color={color} />
    </Box>
  )
}

const Tree = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <Cylinder args={[0.1, 0.1, 1]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      <Cylinder args={[0.5, 0.3, 1]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#228B22" />
      </Cylinder>
    </group>
  )
}

const CityScape = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const buildings = [
    { position: [-3, 1, -2] as [number, number, number], height: 2, color: "#4A90E2" },
    { position: [-1, 1.5, -3] as [number, number, number], height: 3, color: "#50C878" },
    { position: [1, 1, -1] as [number, number, number], height: 2, color: "#FFB347" },
    { position: [3, 2, -2] as [number, number, number], height: 4, color: "#87CEEB" },
    { position: [-2, 0.5, 1] as [number, number, number], height: 1, color: "#98FB98" },
    { position: [0, 1.5, 2] as [number, number, number], height: 3, color: "#DDA0DD" },
    { position: [2, 1, 1] as [number, number, number], height: 2, color: "#F0E68C" },
    { position: [-4, 1, 0] as [number, number, number], height: 2, color: "#20B2AA" },
  ]

  const trees = [
    { position: [-1.5, 0, 0.5] as [number, number, number] },
    { position: [1.5, 0, -0.5] as [number, number, number] },
    { position: [-0.5, 0, 1.5] as [number, number, number] },
    { position: [0.5, 0, -1.5] as [number, number, number] },
  ]

  return (
    <group ref={groupRef}>
      {/* Ground */}
      <Box position={[0, -0.5, 0]} args={[12, 0.2, 12]}>
        <meshStandardMaterial color="#90EE90" />
      </Box>

      {/* Buildings */}
      {buildings.map((building, index) => (
        <Building
          key={`building-${index}`}
          position={building.position}
          height={building.height}
          color={building.color}
        />
      ))}

      {/* Trees */}
      {trees.map((tree, index) => (
        <Tree key={`tree-${index}`} position={tree.position} />
      ))}

      {/* Roads */}
      <Box position={[0, -0.4, 0]} args={[0.5, 0.1, 12]}>
        <meshStandardMaterial color="#696969" />
      </Box>
      <Box position={[0, -0.4, 0]} args={[12, 0.1, 0.5]}>
        <meshStandardMaterial color="#696969" />
      </Box>
    </group>
  )
}

export default CityScape
