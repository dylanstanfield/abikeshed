import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

const GrassClump = () => (
  <group>
    <Box height={ 0.2 } width={ 0.05 } depth={ 0.05 } color={ '#1f731f' } />
    <Position x={ 0.1 } y={ -0.05 } z={ 0.1 }>
      <Box height={ 0.2 } width={ 0.05 } depth={ 0.05 } color={ '#1f731f' } />
    </Position>
    <Position x={ 0.1 } y={ -0.075 } z={ -0.1 }>
      <Box height={ 0.2 } width={ 0.05 } depth={ 0.05 } color={ '#1f731f' } />
    </Position>
  </group>
)

export const Base = () => (
  <group>
    <Position y={ 0.3 }>
      <Box height={ 0.1 } width={ 6 } depth={ 4 } color={ '#666666' } />
    </Position>
    <Position y={ 0.3 } x={ 3.5 }>
      <Box height={ 0.1 } width={ 1 } depth={ 2 } color={ '#666666' } />
    </Position>
    <Box height={ 0.5 } width={ 10 } depth={ 10 } color={ '#1f7a1f' } />
    <Position y={ 0.3 }>
      <Position z={ 3.5 } rotate={{ y: 30 }}>
        <GrassClump />
      </Position>
      <Position x={ 0.8 } z={ 4.4 } rotate={{ y: 120 }}>
        <GrassClump />
      </Position>
      <Position x={ 3.5 } z={ 4.5 } rotate={{ y: 90 }}>
        <GrassClump />
      </Position>
      <Position x={ 4.1 } z={ 2.7 } rotate={{ y: -30 }}>
        <GrassClump />
      </Position>
      <Position x={ 3.4 } z={ 1.5 } rotate={{ y: -60 }}>
        <GrassClump />
      </Position>
      <Position x={ 3.5 } z={ -1.5 } rotate={{ y: -100 }}>
        <GrassClump />
      </Position>
      <Position x={ 4.2 } z={ -2.5 } rotate={{ y: 50 }}>
        <GrassClump />
      </Position>
      <Position x={ 3 } z={ -3.5 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
      <Position x={ 4.5 } z={ -4.3 } rotate={{ y: 58 }}>
        <GrassClump />
      </Position>
      <Position x={ 1.5 } z={ -4 } rotate={{ y: 70 }}>
        <GrassClump />
      </Position>
      <Position x={ 0 } z={ -3.25 } rotate={{ y: 180 }}>
        <GrassClump />
      </Position>
      <Position x={ -1 } z={ -3.75 } rotate={{ y: 49 }}>
        <GrassClump />
      </Position>
      <Position x={ -2.5 } z={ -4.4 } rotate={{ y: 170 }}>
        <GrassClump />
      </Position>
      <Position x={ -3.7 } z={ -4 } rotate={{ y: 30 }}>
        <GrassClump />
      </Position>
      <Position x={ -4.35 } z={ -3 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
      <Position x={ 2.5 } z={ 4 } rotate={{ y: 15 }}>
        <GrassClump />
      </Position>
      <Position x={ -2 } z={ 3.7 } rotate={{ y: 60 }}>
        <GrassClump />
      </Position>
      <Position x={ -3 } z={ 2.5 } rotate={{ y: 109 }}>
        <GrassClump />
      </Position>
      <Position x={ -4 } z={ 4.25 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
      <Position x={ -4.2 } z={ 0.9 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
      <Position x={ -3.6 } z={ -0.5 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
      <Position x={ -4 } z={ -1.5 } rotate={{ y: 0 }}>
        <GrassClump />
      </Position>
    </Position>
  </group>
)