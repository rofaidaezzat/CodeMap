import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Group } from "three";
import { pointsInner, pointsOuter } from "../utils";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";

interface IProps{
  description:string
  title:string;
  // backgroundImage:string

}

const ParticleRing = ({description,title}:IProps) => {
  const navigate=useNavigate()
  
  const navigateToRoadmap=()=>{

    navigate('/SecondPageOfRoadMap')
}
  return (
    <div className="relative ">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "80vh" }}
        className="bg-slate-900 rounded-md"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div className="flex flex-col justify-center gap-5 items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
      <h1 className="text-slate-200 font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center pointer-events-none">
        {title}
      </h1>
      <p className=" text-slate-200 text-[20px]">{description}</p>

      <Button className=" bg-white text-slate-900 px-4  w-[200px] h-[50px]  md:px-6 py-2 rounded-md flex items-center justify-center font-semibold text-[30px] md:text-base" onClick={navigateToRoadmap}>
                    Start Learning
        </Button>
      </div>
      

      
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group  ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;