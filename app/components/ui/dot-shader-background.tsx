'use client'

import { useMemo, useRef } from 'react'

import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'

import { shaderMaterial, useTrailTexture } from '@react-three/drei'

import * as THREE from 'three'

// Cores do projeto Concursy
const CONCURSY_COLORS = {
  primary: '#37718A',      // custom-blue
  secondary: '#040009',    // custom-black
  background: '#EFF6F8',   // custom-white
  primaryDark: '#2a5568',  // custom-blue mais escuro
  primaryLight: '#4a839b', // custom-blue mais claro
}

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color(CONCURSY_COLORS.background),
    bgColorStart: new THREE.Color(CONCURSY_COLORS.primaryDark),
    bgColorEnd: new THREE.Color(CONCURSY_COLORS.secondary),
    mouseTrail: null,
    render: 0,
    rotation: 0,
    gridSize: 50,
    dotOpacity: 0.12
  },
  /* glsl */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColorStart;
    uniform vec3 bgColorEnd;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 rotatedUv = rotate(uv, rotation);

      // Create a grid
      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

      // Gradient background (de cima para baixo: primaryDark -> secondary)
      float gradientFactor = uv.y;
      vec3 bgColor = mix(bgColorStart, bgColorEnd, gradientFactor * 0.7 + 0.3);

      // Screen mask - mais sutil para melhor legibilidade do texto
      float screenMask = smoothstep(0.0, 0.8, uv.y);
      vec2 centerDisplace = vec2(0.5, 0.5);
      float circleMaskCenter = length(uv - centerDisplace);
      float circleMaskFromCenter = smoothstep(0.3, 0.8, circleMaskCenter);
      
      float combinedMask = screenMask * (0.7 + circleMaskFromCenter * 0.3);
      
      // Animação mais suave
      float circleAnimatedMask = sin(time * 1.5 + circleMaskCenter * 8.0) * 0.5 + 0.5;

      // Mouse trail effect
      float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      
      // Influência mais sutil
      float scaleInfluence = max(mouseInfluence * 0.4, circleAnimatedMask * 0.2);

      // Tamanho dos dots mais uniforme
      float dotSize = 0.15 + sin(time * 0.5 + circleMaskCenter * 5.0) * 0.05;

      float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.3));

      float smoothDot = smoothstep(0.08, 0.0, sdfDot);

      // Opacidade influenciada pelo mouse e animação
      float opacityInfluence = max(mouseInfluence * 30.0, circleAnimatedMask * 0.4);

      // Mix background gradient com dots
      vec3 dotColorWithGlow = mix(dotColor, bgColorStart, 0.3);
      vec3 composition = mix(
        bgColor, 
        dotColorWithGlow, 
        smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence)
      );

      gl_FragColor = vec4(composition, 1.0);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
)

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)
  
  const rotation = 0
  const gridSize = 120 // Grid mais denso para efeito mais elegante

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: 0.12,
    maxAge: 500,
    interpolate: 1,
    ease: function easeInOutCirc(x: number) {
      return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    }
  })

  const meshRef = useRef<THREE.Mesh>(null)
  
  const material = useMemo(() => {
    const mat = new DotMaterial()
    // Configurar cores do projeto Concursy
    mat.uniforms.dotColor.value = new THREE.Color(CONCURSY_COLORS.background)
    mat.uniforms.bgColorStart.value = new THREE.Color(CONCURSY_COLORS.primaryDark)
    mat.uniforms.bgColorEnd.value = new THREE.Color(CONCURSY_COLORS.secondary)
    mat.uniforms.dotOpacity.value = 0.12
    return mat
  }, [])

  useFrame((state) => {
    if (material) {
      material.uniforms.time.value = state.clock.elapsedTime
      material.uniforms.resolution.value.set(
        size.width * viewport.dpr,
        size.height * viewport.dpr
      )
      if (trail) {
        material.uniforms.mouseTrail.value = trail
      }
      material.uniforms.rotation.value = rotation
      material.uniforms.gridSize.value = gridSize
    }
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    onMove(e)
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh 
      ref={meshRef}
      scale={[scale, scale, 1]} 
      onPointerMove={handlePointerMove}
      material={material}
    >
      <planeGeometry args={[2, 2]} />
    </mesh>
  )
}

export const DotScreenShader = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.NoToneMapping
      }}>
      <Scene />
    </Canvas>
  )
}
