import { Cylinder } from '@react-three/drei'

import { Board } from '../parts/Board'
import { colors } from '../colors'

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

export const Roof = () => (
  <group rotation={ [0.27, 0, 0] } position={ [0, 3, 0.03] }>
    <Board scale={ [6, 0.1, 5] } position={ [0, 0, 0] } color={ colors.frame } />
    <group position={ [-2.8, 0, 0] }>
      { [...Array(20).keys()].map((i) => <Strip offset={ i * 0.3 } key={i} />)}
    </group>
    <group position={ [-2.72, 0, 1.85] }>
      { [...Array(7).keys()].map((i) => <Nail offset={ i * 0.9 } key={i} />)}
    </group>
    <group position={ [-2.72, 0, -1.85] }>
      { [...Array(7).keys()].map((i) => <Nail offset={ i * 0.9 } key={i} />)}
    </group>
  </group>
)