import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

const color = '#4d4839'

export const Frame = () => (
  <group>
    {/* Floor */}

    <Position z={ 1.75 }>
      <Box height={ 0.5 } width={ 6 } depth={ 0.5 } color={ color } />
    </Position>
    <Position z={ -1.75 }>
      <Box height={ 0.5 } width={ 6 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ -2.75 } rotate={{ y: 90 }}>
      <Box height={ 0.5 } width={ 4 } depth={ 0.5 } color={ color } />
    </Position>

    {/* Door */}

    <Position x={ 2.75 } z={ -1.25 } rotate={{ y: 90 }}>
      <Box height={ 0.5 } width={ 1.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } z={ 1.25 } rotate={{ y: 90 }}>
      <Box height={ 0.5 } width={ 1.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 1 } z={ 0.75 } >
      <Box height={ 2.5 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 1 } z={ -0.75 } >
      <Box height={ 2.5 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 2 } rotate={{ y: 90 }}>
      <Box height={ 0.5 } width={ 2 } depth={ 0.5 } color={ color } />
    </Position>

    {/* Walls */}

    <Position x={ -2.75 } y={ 1.25 } z={ 1.75 } >
      <Box height={ 3 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 1.25 } z={ 1.75 } >
      <Box height={ 3 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 1.75 } z={ -1.75 } >
      <Box height={ 4 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ -2.75 } y={ 1.75 } z={ -1.75 } >
      <Box height={ 4 } width={ 0.5 } depth={ 0.5 } color={ color } />
    </Position>

    {/* Ceiling */}

    <Position z={ 1.75 } y={ 2.5 }>
      <Box height={ 0.5 } width={ 6 } depth={ 0.5 } color={ color } />
    </Position>
    <Position z={ -1.75 } y={ 3.5 }>
      <Box height={ 0.5 } width={ 6 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ 2.75 } y={ 3.25 } rotate={{ y: 90, z: 15 }}>
      <Box height={ 0.5 } width={ Math.sqrt(1 + (4 * 4)) + 1 } depth={ 0.5 } color={ color } />
    </Position>
    <Position x={ -2.75 } y={ 3.25 } rotate={{ y: 90, z: 15 }}>
      <Box height={ 0.5 } width={ Math.sqrt(1 + (4 * 4)) + 1 } depth={ 0.5 } color={ color } />
    </Position>
  </group>
)