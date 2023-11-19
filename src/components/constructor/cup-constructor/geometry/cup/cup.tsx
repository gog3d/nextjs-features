'use client';
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { selectColorsAmount, selectCupColorAmount, selectViewAmount, selectColorAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Canvas, extend, useThree } from '@react-three/fiber'

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

const Cup = (props: JSX.IntrinsicElements['group']) => {


  const cupColor = useAppSelector((state) => selectCupColorAmount(state));

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
