import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Token3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create token geometry with more detail
    const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x6366F1,
      metalness: 0.7,
      roughness: 0.2,
      envMapIntensity: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });
    const token = new THREE.Mesh(geometry, material);

    // Add details to the token
    const edgeGeometry = new THREE.TorusGeometry(2, 0.1, 16, 100);
    const edgeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
    token.add(edge);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const pointLight1 = new THREE.PointLight(0x6366F1, 2);
    const pointLight2 = new THREE.PointLight(0x8B5CF6, 2);
    
    pointLight1.position.set(5, 5, 5);
    pointLight2.position.set(-5, -5, -5);
    
    scene.add(ambientLight, pointLight1, pointLight2);
    scene.add(token);
    
    camera.position.z = 5;

    // Interactive controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationSpeed = { x: 0, y: 0 };
    const dampingFactor = 0.98;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      rotationSpeed.x = deltaMove.y * 0.005;
      rotationSpeed.y = deltaMove.x * 0.005;

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    mountRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (!isDragging) {
        token.rotation.y += 0.005;
      } else {
        token.rotation.x += rotationSpeed.x;
        token.rotation.y += rotationSpeed.y;
      }

      // Apply damping to rotation speed
      rotationSpeed.x *= dampingFactor;
      rotationSpeed.y *= dampingFactor;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      mountRef.current?.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[400px] cursor-grab active:cursor-grabbing" />;
};