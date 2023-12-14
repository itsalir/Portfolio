import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import skyboxScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

interface Props {
  isRotating: boolean;
}
export function Sky({ isRotating }: Props) {
  const sky = useGLTF(skyboxScene);
  const skyRef =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
