import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

const range = (length: number) => [...(new Array(length)).keys()]

const Slat = () => (
  <group>
    <Position rotate={{ x: 30 }}>
      <Box height={ 0.025 } width={ 1.2 } depth={ 0.1 } color={ '#615530' } />
    </Position>
  </group>
)

export const DoorAwning = () => (
  <group>
    <Box height={ 0.1 } width={ 1.15 } depth={ 2.05 } color={ '#5c512f' } />

    <Position y={ -0.1 } z={ 0.9 }>
      <Box height={ 0.25 } depth={ 0.1 } color={ '#3d3c38' } />
    </Position>
    <Position y={ -0.1 } z={ -0.9 }>
      <Box height={ 0.2 } depth={ 0.1 } color={ '#3d3c38' } />
    </Position>
    <Position y={ 0.05 } z={ -0.975 }>
      { range(15).map((i) => (
        <Position z={ i * 0.14 } key={ i }>
          <Box height={ 0.025 } width={ 1.15 } depth={ 0.09 } color={ '#615530' } />
        </Position>
      )) }
    </Position>
  </group>
)