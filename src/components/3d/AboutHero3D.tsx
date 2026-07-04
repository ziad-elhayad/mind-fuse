"use client";

import React, { useRef, useEffect, memo } from "react";
import * as THREE from "three";

interface AboutHero3DProps {
  className?: string;
}

function AboutHero3D({ className = "" }: AboutHero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isVisibleRef = useRef(true);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // COMPLETELY DISABLE 3D ON MOBILE
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    if (!containerRef.current) return;

    const objectCount = 10;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06599B, 2, 100);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x2D7FC0, 2, 100);
    pointLight2.position.set(-15, -15, 15);
    scene.add(pointLight2);

    const geometries = [
      new THREE.TorusGeometry(1.5, 0.5, 16, 100),
      new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.OctahedronGeometry(1.5, 0),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ 
        color: 0x06599B, 
        metalness: 0.4, 
        roughness: 0.3,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x2D7FC0, 
        metalness: 0.5, 
        roughness: 0.2,
        transparent: true,
        opacity: 0.6
      }),
    ];

    const objects: THREE.Mesh[] = [];
    
    for (let i = 0; i < objectCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.8 + Math.random() * 1.2;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        initialPosition: mesh.position.clone(),
        initialRotation: mesh.rotation.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.008,
          y: (Math.random() - 0.5) * 0.008,
          z: (Math.random() - 0.5) * 0.008,
        },
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatOffset: Math.random() * Math.PI * 2,
      };

      scene.add(mesh);
      objects.push(mesh);
    }

    objectsRef.current = objects;

    let time = 0;
    let isAnimating = false;
    const animate = () => {
      if (!isVisibleRef.current) {
        isAnimating = false;
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.008;

      objects.forEach((obj) => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
        obj.rotation.z += obj.userData.rotationSpeed.z;

        obj.position.y = obj.userData.initialPosition.y + 
          Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * 1.5;

        obj.position.x = obj.userData.initialPosition.x + 
          Math.sin(time * 0.5 + obj.userData.floatOffset) * 0.5;
      });

      renderer.render(scene, camera);
    };

    // Initial check is handled by observer

    const container = containerRef.current;
    
    // ... rest of observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !isAnimating) {
            isAnimating = true;
            animate();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (container) {
      observer.observe(container);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (renderer) {
        renderer.dispose();
        container?.removeChild(renderer.domElement);
      }
      objects.forEach((obj) => {
        obj.geometry.dispose();
        if (obj.material instanceof THREE.Material) {
          obj.material.dispose();
        }
      });
      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
    };
  }, []);

  // Return null on mobile to completely disable 3D
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) return null;

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
}

export default memo(AboutHero3D);
