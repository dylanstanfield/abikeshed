import { Cylinder as DreiCylinder } from '@react-three/drei'
import { Color } from 'react-three-fiber'

interface CylinderProps {
  radius?: number;
  length?: number;
  segments?: number;
  color?: Color;
}

export const Cylinder: React.FC<CylinderProps> = ({ radius, length, segments, color }) => (
  <DreiCylinder args={ [ radius ?? 1, radius ?? 1, length ?? 1, segments ?? 50] } castShadow receiveShadow>
    <meshStandardMaterial color={ color ?? 'red' } metalness={ 0.25 } roughness={ 0.75 } />
  </DreiCylinder>
)