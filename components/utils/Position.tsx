interface PositionProps {
  x?: number;
  y?: number;
  z?: number;
  rotate?: {
    x?: number;
    y?: number;
    z?: number;
  }
}

const radians = (deg: number) => deg * ( Math.PI / 180 )

export const Position: React.FC<PositionProps> = ({ x, y, z, rotate, children }) => (
  <group
    position={ [x ?? 0, y ?? 0, z ?? 0] }
    rotation={ [radians(rotate?.x ?? 0), radians(rotate?.y ?? 0), radians(rotate?.z ?? 0)] }
  >
    { children }
  </group>
)