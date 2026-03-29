import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useMatrix } from "../../context/MatrixContext";
import { Html } from "@react-three/drei";

const MatrixPills = () => {
    const { isMatrixMode } = useMatrix();
    const redPillRef = useRef<THREE.Group>(null);
    const bluePillRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (redPillRef.current && bluePillRef.current) {
            if (isMatrixMode) {
                // Floating animation
                const time = state.clock.getElapsedTime();
                redPillRef.current.position.y = 4 + Math.sin(time * 2) * 0.1;
                bluePillRef.current.position.y = 4 + Math.cos(time * 2) * 0.1;

                redPillRef.current.rotation.y += 0.01;
                bluePillRef.current.rotation.y -= 0.01;

                // Appear logic (simple scale lerp)
                redPillRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
                bluePillRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            } else {
                redPillRef.current.scale.set(0, 0, 0);
                bluePillRef.current.scale.set(0, 0, 0);
            }
        }
    });

    if (!isMatrixMode) return null;

    return (
        <>
            <group position={[-1.5, 4, 18]} ref={redPillRef} scale={[0, 0, 0]}>
                <mesh>
                    <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
                    <meshStandardMaterial color="#ff0000" roughness={0.3} metalness={0.8} />
                </mesh>
                <Html position={[0, -0.8, 0]} center transform>
                    <div style={{ color: "white", fontFamily: "Geist", fontSize: "12px", background: "rgba(0,0,0,0.7)", padding: "4px 8px", borderRadius: "4px", whiteSpace: 'nowrap' }}>
                        RED PILL
                    </div>
                </Html>
            </group>

            <group position={[1.5, 4, 18]} ref={bluePillRef} scale={[0, 0, 0]}>
                <mesh>
                    <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
                    <meshStandardMaterial color="#0000ff" roughness={0.3} metalness={0.8} />
                </mesh>
                <Html position={[0, -0.8, 0]} center transform>
                    <div style={{ color: "white", fontFamily: "Geist", fontSize: "12px", background: "rgba(0,0,0,0.7)", padding: "4px 8px", borderRadius: "4px", whiteSpace: 'nowrap' }}>
                        BLUE PILL
                    </div>
                </Html>
            </group>

            <pointLight position={[0, 5, 15]} intensity={isMatrixMode ? 2 : 0} color="#ffffff" distance={10} />
        </>
    );
};

export default MatrixPills;
