import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.35} groundColor="#444" />
      <directionalLight castShadow intensity={0.8} position={[5, 5, 5]} shadow-mapSize={1024} />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
