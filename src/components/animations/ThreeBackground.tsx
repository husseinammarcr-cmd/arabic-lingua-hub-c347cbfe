import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { usePrefersReducedMotion, useIsMobileDevice } from '@/hooks/useAnimations';

// Animated floating sphere
const FloatingSphere: React.FC<{ position: [number, number, number]; color: string; size?: number }> = ({
  position,
  color,
  size = 0.5,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Particles system
const Particles: React.FC<{ count?: number; color?: string }> = ({
  count = 100,
  color = '#40c4b0',
}) => {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

// Wave plane
const WavePlane: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x + state.clock.getElapsedTime()) * 0.1 +
                  Math.cos(y + state.clock.getElapsedTime() * 0.5) * 0.1;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshStandardMaterial
        color="#40c4b0"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

interface ThreeBackgroundProps {
  variant?: 'particles' | 'spheres' | 'waves' | 'stars';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  variant = 'particles',
  className,
  intensity = 'medium',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileDevice();

  // Don't render 3D on mobile or with reduced motion
  if (prefersReducedMotion || isMobile) {
    return null;
  }

  const particleCount = intensity === 'low' ? 50 : intensity === 'high' ? 200 : 100;

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {variant === 'particles' && <Particles count={particleCount} />}

          {variant === 'spheres' && (
            <>
              <FloatingSphere position={[-2, 1, -2]} color="#40c4b0" size={0.3} />
              <FloatingSphere position={[2, -1, -3]} color="#f5a623" size={0.4} />
              <FloatingSphere position={[0, 2, -4]} color="#9b59b6" size={0.25} />
            </>
          )}

          {variant === 'waves' && <WavePlane />}

          {variant === 'stars' && (
            <Stars
              radius={100}
              depth={50}
              count={intensity === 'low' ? 2000 : intensity === 'high' ? 8000 : 5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
          )}

          <EffectComposer>
            <Bloom
              luminanceThreshold={0.5}
              luminanceSmoothing={0.9}
              intensity={0.5}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
