"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Cucumber from '@/components/cucumber';
import AsciiRenderer from './asciiEffect';
import { CuboidCollider, Physics } from '@react-three/rapier';
import { Suspense, useRef, useState } from 'react';

function Scene() {
    useThree(({camera}) => {
        camera.position.z = 15;
    });
    return null;
}

export default function Fiber() {
    var [state, setState] = useState(false)

    return (
        <div className='fixed h-full w-full'>
            <button onClick={() => { setState(!state); console.log("aa") }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ASCII!</button>
            <Canvas>
                <color attach="background" args={["black"]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1000} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense>
                    <Physics debug={process.env!.NODE_ENV==="development"}>
                        <Cucumber position={[0, 0, 0]} />

                        <CuboidCollider args={[10, 1, 10]} position={[0, -2, 0]} restitution={2}/>
                        <CuboidCollider args={[10, 1, 10]} position={[0, 10, 0]} restitution={0}/>
                        <CuboidCollider args={[10, 10, 1]} position={[0, 5, -10]} />
                        <CuboidCollider args={[10, 10, 1]} position={[0, 5, 10]} />

                        <CuboidCollider args={[1, 10, 10]} position={[10, 5, 0]} />
                        <CuboidCollider args={[1, 10, 10]} position={[-10, 5, 0]} />
                    </Physics>
                </Suspense>
                {state ? <AsciiRenderer /> : null}
                <Scene/>
            </Canvas>
        </div>
    );
}