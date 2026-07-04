"use client";

import React, { useRef, useEffect, memo } from "react";
import * as THREE from "three";

interface Services3DBackgroundProps {
  className?: string;
}

function Services3DBackground({ className = "" }: Services3DBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isVisibleRef = useRef(true);

  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return true; // Safe default for SSR
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // COMPLETELY DISABLE 3D ON MOBILE
    if (isMobile) return;

    if (!containerRef.current) return;

    const objectCount = 15;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup with performance optimizations
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06599B, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x2D7FC0, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1.5, 0),
      new THREE.OctahedronGeometry(1.2, 0),
      new THREE.TetrahedronGeometry(1.3, 0),
      new THREE.DodecahedronGeometry(1.4, 0),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ 
        color: 0x06599B, 
        metalness: 0.3, 
        roughness: 0.4,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x2D7FC0, 
        metalness: 0.4, 
        roughness: 0.3,
        transparent: true,
        opacity: 0.5
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x06599B, 
        metalness: 0.2, 
        roughness: 0.5,
        transparent: true,
        opacity: 0.4
      }),
    ];

    const objects: THREE.Mesh[] = [];
    
    // Create floating objects
    for (let i = 0; i < objectCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.5 + Math.random() * 1.5;
      mesh.scale.set(scale, scale, scale);

      // Store initial position and rotation for animation
      mesh.userData = {
        initialPosition: mesh.position.clone(),
        initialRotation: mesh.rotation.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: 0.5 + Math.random() * 0.5,
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
      time += 0.01;

      objects.forEach((obj) => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
        obj.rotation.z += obj.userData.rotationSpeed.z;

        obj.position.y = obj.userData.initialPosition.y + 
          Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * 2;
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

    // Handle resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
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
  }, [isMobile]);

  // Return null on mobile to completely disable 3D
  if (isMobile) return null;

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
}

export default memo(Services3DBackground);
