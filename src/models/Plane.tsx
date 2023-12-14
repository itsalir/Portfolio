import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import planeScene from "../assets/3d/Plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { AnimationClip } from "three";
type Props = { isRotating: boolean };

const Plane = ({ isRotating, ...props }: Props) => {
  const ref = useRef(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations<AnimationClip>(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
