/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 P5.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/P5.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Retopo_Sphere004_mesh001.geometry} material={materials['Black Base.005']} />
      <mesh geometry={nodes.Retopo_lambert1001_mesh001.geometry} material={materials['Fabric.003']} />
      <mesh geometry={nodes.Cube009_Cube001.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Object_2_Object_0001.geometry} material={materials['sh_carharttWorkBoot.002']} />
      <mesh geometry={nodes.sweatshirt002.geometry} material={materials['1.006']} rotation={[0, 0.08, 0]} />
      <mesh geometry={nodes.Oculus_Headset_Cube013mesh002.geometry} material={materials['Material.027']} />
      <mesh geometry={nodes.Oculus_Headset_Cube013mesh002_1.geometry} material={materials['Material.032']} />
    </group>
  )
}

useGLTF.preload('/P5.gltf')
