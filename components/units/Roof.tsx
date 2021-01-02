import { useState, useRef } from 'react'
import { Cylinder } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

import { Board } from '../parts/Board'
import { colors } from '../colors'
import { Group } from 'three'

interface OffsetProps {
  offset: number;
}

const Strip: React.FC<OffsetProps> = ({ offset }) => (
  <group position={ [offset, 0, 0] }>
    <Board scale={ [0.2, 0.05, 5] } position={ [0, 0.12, 0] } color={ '#595959' } rotation={ [0, 0, 210] } />
    <Board scale={ [0.2, 0.05, 5] } position={ [-0.15, 0.12, 0] } color={ '#666666' } rotation={ [0, 0, -210] } dontReceiveShadow />
  </group>
)

const Nail: React.FC<OffsetProps> = ({ offset }) => (
  <Cylinder scale={ [0.05, 0.1, 0.05] } position={ [offset, 0.1, 0] } castShadow receiveShadow>
    <meshLambertMaterial color={ '#4d4d4d' } />
  </Cylinder>
)

export const Roof = () => {
  const roof = useRef<Group>()
  const [open, setOpen] = useState(false)
  const toggleRoof = () => setOpen(!open)

  useFrame(() => {
    if (open && roof.current.rotation.x > -0.75) {
      roof.current.rotation.x -= 0.01133333
    }
    if (open && roof.current.position.y < 5) {
      roof.current.position.y += 0.02222222
    }
    if (!open && roof.current.rotation.x < 0.27) {
      roof.current.rotation.x += 0.01133333
    }
    if (!open && roof.current.position.y > 3) {
      roof.current.position.y -= 0.02222222
    }
  })
  
  return (
    <group ref={ roof } rotation={ [0.27, 0, 0] } position={ [0, 3, 0.03] } onClick={toggleRoof}>
      <Board scale={ [6, 0.1, 5] } position={ [0, 0, 0] } color={ colors.frame } />
      <group position={ [-2.8, 0, 0] } onClick={toggleRoof}>
        { [...Array(20).keys()].map((i) => <Strip offset={ i * 0.3 } key={i} />)}
      </group>
      <group position={ [-2.72, 0, 1.85] } onClick={toggleRoof}>
        { [...Array(7).keys()].map((i) => <Nail offset={ i * 0.9 } key={i} />)}
      </group>
      <group position={ [-2.72, 0, -1.85] } onClick={toggleRoof}>
        { [...Array(7).keys()].map((i) => <Nail offset={ i * 0.9 } key={i} />)}
      </group>
    </group>
  )
}