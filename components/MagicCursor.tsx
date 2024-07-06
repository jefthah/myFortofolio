"use client";

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Cursor = () => {
  const cursorRef = useRef<THREE.Points>(null!);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (cursorRef.current) {
      const positions = cursorRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = positions.length - 1; i > 2; i -= 3) {
        positions[i] = positions[i - 3];
        positions[i - 1] = positions[i - 4];
        positions[i - 2] = positions[i - 5];
      }

      positions[0] = mouse.current.x * 10;
      positions[1] = mouse.current.y * 10;
      positions[2] = 0;

      cursorRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={cursorRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={new Float32Array(300)}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial color="#C084FC" size={0.1} sizeAttenuation />
    </Points>
  );
};

const MagicCursorComponent = () => {
  return (
    <Canvas
      className="magic-cursor-canvas"
      style={{ position: 'relative', top: 0, left: 0, pointerEvents: 'none' }}
    >
      <Cursor />
    </Canvas>
  );
};

export default MagicCursorComponent;
