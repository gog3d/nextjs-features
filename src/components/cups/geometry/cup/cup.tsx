///<reference path="../../../../../node_modules/@types/three/index.d.ts" />

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useCustomization } from '@/context/customization';

type GLTFResult = GLTF & {
  nodes: {
    coffee_with_sugar_1: THREE.Mesh
    coffee_with_sugar_2: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    wire_087225198: THREE.MeshStandardMaterial
  }
}

//color={'rgba(210, 219, 225, 1)'}
const Cup = (props: JSX.IntrinsicElements['group']) => {

  const {
    colors,
    checkedColor,
    setCheckedColor,
    cupColor,
    setCupColor
  } = useCustomization();

  const { nodes, materials } = useGLTF('/cups/models/cup_1.glb') as GLTFResult

  return (
   <group dispose={null} position-y={-5.5} >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1} >
        <mesh geometry={nodes.coffee_with_sugar_1.geometry} dispose={null}>
          <meshStandardMaterial
            color={cupColor}
          />
        </mesh>
        <mesh geometry={nodes.coffee_with_sugar_2.geometry} visible={true}>
          <meshStandardMaterial
            color={'rgba(44, 48, 53, 1)'}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/cups/models/cup_1.glb');

export default Cup;