import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
    const particlesRef = useRef<THREE.Points>(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    // Generate particle positions
    const particleCount = 1000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    // Animation
    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.0005;
            particlesRef.current.rotation.x += 0.0002;

            // Mouse interaction
            const time = state.clock.getElapsedTime();
            particlesRef.current.position.x = Math.sin(time * 0.1) * 0.5;
            particlesRef.current.position.y = Math.cos(time * 0.1) * 0.5;
        }
    });

    // Track mouse movement
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', (event) => {
            mousePosition.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            };
        });
    }

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={particleCount}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#00fff5"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function ParticleConnections() {
    const linesRef = useRef<THREE.LineSegments>(null);

    useFrame(() => {
        if (linesRef.current) {
            linesRef.current.rotation.y += 0.0003;
        }
    });

    const lineCount = 50;
    const linePositions = useMemo(() => {
        const pos = new Float32Array(lineCount * 6); // 2 points per line, 3 coords per point
        for (let i = 0; i < lineCount; i++) {
            pos[i * 6] = (Math.random() - 0.5) * 40;
            pos[i * 6 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 6 + 2] = (Math.random() - 0.5) * 40;
            pos[i * 6 + 3] = (Math.random() - 0.5) * 40;
            pos[i * 6 + 4] = (Math.random() - 0.5) * 40;
            pos[i * 6 + 5] = (Math.random() - 0.5) * 40;
        }
        return pos;
    }, []);

    return (
        <lineSegments ref={linesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[linePositions, 3]}
                    count={lineCount * 2}
                />
            </bufferGeometry>
            <lineBasicMaterial
                color="#00fff5"
                transparent
                opacity={0.1}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}

export const ParticleBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 20], fov: 75 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <Particles />
                <ParticleConnections />
            </Canvas>
        </div>
    );
};
