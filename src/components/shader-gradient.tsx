"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float softBlob(vec2 p, vec2 center, float radius) {
    float d = distance(p, center);
    return smoothstep(radius, 0.0, d);
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect;

    float t = uTime * 0.16;
    float wave = sin((p.x * 3.8) + (p.y * 2.6) + t * 2.2) * 0.5 + 0.5;
    float sweep = smoothstep(-0.65, 0.78, p.x + p.y * 0.34 + sin(t) * 0.2);
    float upperGlow = softBlob(p, vec2(0.52 + sin(t * 0.8) * 0.08, 0.18), 0.72);
    float lowerGlow = softBlob(p, vec2(-0.46 + cos(t * 0.7) * 0.06, -0.38), 0.88);

    vec3 black = vec3(0.015, 0.015, 0.016);
    vec3 charcoal = vec3(0.055, 0.055, 0.058);
    vec3 silver = vec3(0.78, 0.78, 0.75);

    vec3 color = mix(black, charcoal, sweep * 0.55);
    color += silver * upperGlow * 0.24;
    color += silver * lowerGlow * 0.12;
    color += vec3(0.95, 0.82, 0.34) * wave * upperGlow * 0.035;

    float vignette = smoothstep(0.95, 0.22, distance(uv, vec2(0.5)));
    color *= 0.62 + vignette * 0.48;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function ShaderGradient() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const timer = new THREE.Timer();
    timer.connect(document);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let animationFrame = 0;
    const render = (timestamp: number) => {
      timer.update(timestamp);
      uniforms.uTime.value = timer.getElapsed();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      timer.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
