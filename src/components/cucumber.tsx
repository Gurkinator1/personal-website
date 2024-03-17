//@ts-nocheck
import { useEffect, useRef, useState } from 'react'
import { MeshProps, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import { RapierRigidBody, RigidBody, vec3 } from '@react-three/rapier'
import * as THREE from 'three';

export default function Cucumber(props: { position: Array<number> }) {
  const mesh_ref = useRef<THREE.Mesh>(null);
  const rigidBody_ref = useRef<RapierRigidBody>(null);
  const [clicked, click] = useState(false);

  const model = useLoader(GLTFLoader, './suzanne.glb');

  return (
    <RigidBody ref={rigidBody_ref} restitution={1} onCollisionEnter={(e) => {
      //rigidBody_ref.current?.applyImpulse(vec3({x: 0, y: 300, z: 0}), true);
    }}>
      <mesh
        {...props}
        ref={mesh_ref}
        scale={clicked ? 3: 2}
        onClick={(event) => click(!clicked)}
      >
        <primitive object={model.scene} />
      </mesh>
    </RigidBody>
  )
}