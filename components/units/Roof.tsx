import random from 'seedrandom';

import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

const rng = random('roof', {})
const roofColor = '#4d4839'
const depth = Math.sqrt(1 + (4 * 4)) + 0.8
const range = (length: number) => [...(new Array(length)).keys()]
const shingleColors = ['#4f473f', '#4a423a', '#544b42', '#52473d']
const shingleColor = () => shingleColors[Math.floor(rng() * shingleColors.length)]

const Shingle = () => (
  <Position y={ rng() * 0.01 } rotate={{ y: rng() * 6 * (rng() > 0.5 ? -1 : 1) }}>
    <Box height={ 0.05 } width={ 0.5 } depth={ 0.6 } color={ shingleColor() } />
  </Position>
)

export const Roof = () => (
  <group>
    <Box height={ 0.2 } width={ 5.9 } depth={ depth } color={ roofColor } />
    <Position y={ 0.125 } x={ -2.25 } z={ -2.25 }>
      { range(10).map((i) => (
        <Position z={ i * 0.5 } rotate={{ x: i === 9 ? 0 : -6.25 }} key={ i }>
          { range(10).map((i) => (
            <Position x={ i * 0.5 } key={ i }>
              <Shingle />
            </Position>
          )) }
        </Position>
      ))}
    </Position>

    {/* Light */}
    <Position y={ -0.85 }>
      <spotLight intensity={ 0.5 } color={ '#fce792' } distance={ 6 } decay={ 0.5 } castShadow />
    </Position>
    <Position y={ -0.15 }>
      <Box height={ 0.1 } width={ 2 } color={ '#fce792' } cancelShadow />
    </Position>
  </group>
)