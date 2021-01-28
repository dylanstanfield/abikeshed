import { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrthographicCamera, OrbitControls, Text } from "@react-three/drei";

import { Position } from "./utils/Position";
import { Box } from "./utils/Box";

const BrushText: React.FC<{ size: number }> = ({ size, children }) => (
  <Text
    color={"#000"}
    maxWidth={8}
    fontSize={size}
    lineHeight={1.4}
    font={"/fonts/NanumBrushScript-Regular.ttf"}
  >
    {children}
  </Text>
);

const NameTag: React.FC<{ name: string }> = ({ name }) => (
  <group>
    <Box color="white" height={1} width={2} depth={0.1} />

    <Position y={0.3} z={0.051}>
      <BrushText size={0.3}>Hello, my name is</BrushText>
    </Position>

    <Position y={-0.15} z={0.051}>
      <BrushText size={0.4}>{name.toUpperCase()}</BrushText>
    </Position>
  </group>
);

const Demo: React.FC<{ names: string[] }> = ({ names }) => {
  const cam = useRef();
  console.log(names);

  return (
    <Canvas shadowMap camera={{ position: [12, 12, 12] }}>
      <OrthographicCamera ref={cam} zoom={10} />
      <OrbitControls maxDistance={100} />
      <ambientLight />
      <spotLight
        color={"white"}
        intensity={0.6}
        position={[5, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <group>
        {names.map((name, i) => (
          <Position key={i} x={i * 2.5}>
            <NameTag name={name} />
          </Position>
        ))}
      </group>
    </Canvas>
  );
};

export default Demo;
