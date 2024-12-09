import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Token3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create token geometry
    const geometry = new THREE.CylinderGeometry(2, 2, 0.3, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366F1,
      specular: 0x8B5CF6,
      shininess: 100,
    });
    const token = new THREE.Mesh(geometry, material);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    scene.add(token);
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      token.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[400px]" />;
};