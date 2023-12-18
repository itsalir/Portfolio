import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";
import { Island } from "../models/island";
import { Sky } from "../models/Sky";
import Plane from "../models/Plane";
import { Bird } from "../models/Brid";
import HomeInfo from "../Components/HomeInfo";
import { hotjar } from "react-hotjar";

const Home = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  useEffect(() => {
    if (hotjar.initialized()) {
      hotjar.stateChange("/Home");
    }
  },[])
  const adjustIslandForScreenSize = () => {
    let screenScale: Array<number> | null = null;
    const screenPostion: Array<number> = [0, -6.5, -43];
    const rotation: Array<number> = [0.1, 4.7, 0.0];
    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPostion, screenScale, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion;

    if (window.innerWidth <= 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -0.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -1, -4];
    }
    return [screenPostion, screenScale];
  };
  const [islandPosition, islandScale, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScreen, PlaneScale] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={1} />
          <Bird />
          <Plane
            isRotating={isRotating}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            position={planeScreen}
            rotation={[0, 20.1, 0]}
            scale={PlaneScale}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
