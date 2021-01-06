import { Box } from "../utils/Box";
import { Cylinder } from "../utils/Cylinder";
import { Position } from "../utils/Position";

const range = (length: number) => [...(new Array(length)).keys()]

const Slat: React.FC<{ width: number }> = ({ width }) => {
  const facadeColor = '#635732'
  const interiorColor = '#5c512f'

  return (
    <group>
      <Position y={ 0.05 }>
        <Box width={ width } depth={ 0.05 } height={ 0.4 } color={ facadeColor } />
      </Position>
      <Position y={ -0.05 } z={ -0.05 }>
        <Box width={ width } depth={ 0.05 } height={ 0.4 } color={ interiorColor } />
      </Position>
    </group>
  )
}

const Window = () => {
  const sillColor = '#4d4437'
  const glassColor = '#2194ce'
  const dividerColor = '#404040'

  return (
    <group>
      <Box height={ 0.1 } width={ 1.375 } depth={ 0.2 } color={ sillColor } />
      <Position x={ 0.6375 } y={ 0.45 }>
        <Box height={ 1 } width={ 0.1 } depth={ 0.2 } color={ sillColor } />
      </Position>
      <Position x={ -0.6375 } y={ 0.45 }>
        <Box height={ 1 } width={ 0.1 } depth={ 0.2 } color={ sillColor } />
      </Position>
      <Position y={ 0.9 }>
        <Box height={ 0.1 } width={ 1.375 } depth={ 0.2 } color={ sillColor } />
      </Position>
      <Position y={ 0.45 }>
        <Box height={ 0.05 } width={ 1.175 } depth={ 0.1 } color={ dividerColor } />
      </Position>
      <Position y={ 0.45 }>
        <Box height={ 0.8 } width={ 0.05 } depth={ 0.1 } color={ dividerColor } />
      </Position>

      <Position y={ 0.45 }>
        <Box
          height={ 0.85 }
          width={ 1.275 }
          depth={ 0.05 }
          material={(
          <meshStandardMaterial
            color={ glassColor }
            metalness={ 0 }
            roughness={ 0 }
            transparent
            opacity={ 0.4 } />
          )} />
      </Position>
    </group>
  )
}

export const Walls = () => (
  <group>
    {/* South */}

    <Position y={ 0.5 } z={ 1.75 }>
      <Position>
        <Slat width={ 5 } />
      </Position>
      <Position y={ 1.5 }>
        <Slat width={ 5 } />
      </Position>
      <Position y={ 0.5 }>
        <Slat width={ 0.75 } />
      </Position>
      <Position y={ 1 }>
        <Slat width={ 0.75 } />
      </Position>
      <Position y={ 0.5 } x={ 2.125 }>
        <Slat width={ 0.75 } />
      </Position>
      <Position y={ 1 } x={ 2.125 }>
        <Slat width={ 0.75 } />
      </Position>
      <Position y={ 0.5 } x={ -2.125 }>
        <Slat width={ 0.75 } />
      </Position>
      <Position y={ 1 } x={ -2.125 }>
        <Slat width={ 0.75 } />
      </Position>

      <Position x={ 1.0625 } y={ 0.3 }>
        <Window />
      </Position>
      <Position x={ -1.0625 } y={ 0.3 }>
        <Window />
      </Position>
    </Position>

    {/* North */}

    <Position y={ 0.5 } z={ -1.75 } rotate={{ y: 180 }}>
      { range(6).map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 5 } />
        </Position>
      )) }
    </Position>
    
    {/* East */}

    <Position x={ 2.8 } y={ 0.5 } z={ 1.25 } rotate={{ y: 90 }}>
      <Position>
        { range(4).map((i) => (
          <Position y={ 0.5 * i }>
            <Slat width={ 0.5 } />
          </Position>
        )) }
      </Position>
      <Position x={ 2.5 }>
        { range(4).map((i) => (
          <Position y={ 0.5 * i }>
            <Slat width={ 0.5 } />
          </Position>
        )) }
      </Position>
      <Position x={ 1.25 } y={ 2 }>
        <Slat width={ 3 } />
      </Position>
      <Position x={ 1.6 } y={ 2.5 }>
        <Slat width={ 2.5 } />
      </Position>
      <Position x={ 2.6 } y={ 3 }>
        <Slat width={ 0.75 } />
      </Position>
    </Position>

    {/* West */}

    <Position x={ -2.8 } y={ 0.5 } rotate={{ y: -90 }}>
      <Position>
          <Slat width={ 3 } />
      </Position>
      <Position x={ 1.0925 } y={ 0.5 }>
          <Slat width={ 0.8125 } />
      </Position>
      <Position x={ 1.0925 } y={ 1 }>
          <Slat width={ 0.8125 } />
      </Position>
      <Position x={ -1.0925 } y={ 0.5 }>
          <Slat width={ 0.8125 } />
      </Position>
      <Position x={ -1.0925 } y={ 1 }>
          <Slat width={ 0.8125 } />
      </Position>
      <Position y={ 1.5 }>
          <Slat width={ 3 } />
      </Position>
      <Position y={ 2 }>
          <Slat width={ 3 } />
      </Position>
      <Position x={ -0.3 } y={ 2.5 }>
        <Slat width={ 2.5 } />
      </Position>
      <Position x={ -1.3 } y={ 3 }>
        <Slat width={ 0.75 } />
      </Position>

      <Position y={ 0.3 }>
        <Window />
      </Position>
    </Position>

    {/* Door */}
    <Position x={ 3.3 } y={ 0.75 } z={ -0.6 } rotate={{ y: 110 }}>
      <Box height={ 2 } width={ 0.1 } color={ '#5c512f' } />
      <Position x={ 0 } y={ 0 } z={ 0.35 } rotate={{ z: 90 }}>
        <Cylinder radius={ 0.05 } length={ 0.2 } color={ '#292929' } />
      </Position>
      <Position x={ 0.05} y={ 0 } z={ -0.5 }>
        <Cylinder radius={ 0.025 } length={ 0.15 }color={ '#666666' } />
      </Position>
      <Position x={ 0.05} y={ 0.75 } z={ -0.5 }>
        <Cylinder radius={ 0.025 } length={ 0.15 }color={ '#666666' } />
      </Position>
      <Position x={ 0.05} y={ -0.75 } z={ -0.5 }>
        <Cylinder radius={ 0.025 } length={ 0.15 }color={ '#666666' } />
      </Position>
    </Position>
  </group>
)