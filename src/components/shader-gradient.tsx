"use client";

import { ShaderGradient as LibShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function ShaderGradient() {
  return (
    <ShaderGradientCanvas
      className="absolute inset-0 w-full h-full"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    >
      <LibShaderGradient
        {...({
          control: "props",
          animate: "on",
          axesHelper: "off",
          brightness: 1.2,
          cAzimuthAngle: 190,
          cDistance: 3.6,
          cPolarAngle: 80,
          cameraZoom: 1,
          color1: "#0c0c0c",
          color2: "#0a0a0a",
          color3: "#ffffff",
          destination: "onCanvas",
          embedMode: "off",
          envPreset: "city",
          format: "gif",
          fov: 45,
          frameRate: 10,
          gizmoHelper: "hide",
          grain: "off",
          lightType: "3d",
          loop: "on",
          loopDuration: 9.1,
          pixelDensity: 1,
          positionX: -1.4,
          positionY: 0,
          positionZ: 0,
          range: "enabled",
          rangeEnd: 9.1,
          rangeStart: 0,
          reflection: 0.1,
          rotationX: 0,
          rotationY: 10,
          rotationZ: 50,
          shader: "defaults",
          type: "plane",
          uAmplitude: 1,
          uDensity: 1.3,
          uFrequency: 4.5,
          uSpeed: 0.16,
          uStrength: 2,
          uTime: 0,
          wireframe: false
        } as any)}
      />
    </ShaderGradientCanvas>
  );
}
