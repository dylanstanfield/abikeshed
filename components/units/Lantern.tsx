import random from 'seedrandom';
import { useState } from 'react'
import { Color, useFrame } from 'react-three-fiber'
import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

const rng = random('lantern', {})
const colors: Array<Color> = [ '#f5d142', '#f5d742', '#f5dd42']

export const Lantern = () => {
  const [ frame, setFrame ] = useState(0)
  const [ intensity, setIntensity ] = useState(0.1)
  const [ color, setColor ] = useState(colors[0])
  useFrame(() => {
    setFrame(frame >= 60 ? 0 : frame + 1)

    if (frame % 15 === 0) {
      setColor(colors[Math.floor(rng() * colors.length)])
      setIntensity(rng() * 0.2)
    }
  })

  return (
    <group>
      <pointLight intensity={ intensity } distance={ 5 } decay={ 0.5 } color={ color } castShadow />
      <Box height={ 0.5 } width={ 0.25 } depth={ 0.25 } color={ color } cancelShadow />
      <Position y={ -0.3 }>
        <Box height={ 0.1 } width={ 0.4 } depth={ 0.4 } color={ '#292929' } />
      </Position>
      <Position y={ 0.3 }>
        <Box height={ 0.1 } width={ 0.4 } depth={ 0.4 } color={ '#292929' } />
      </Position>
      <Position y={ 0.4 }>
        <Box height={ 0.25 } width={ 0.25 } depth={ 0.1 } color={ '#292929' } />
      </Position>
  
      <Position x={ 0.15 } z={ -0.15 }>
        <Box height={ 0.5 } width={ 0.05 } depth={ 0.05 } color={ '#292929' } />
      </Position>
      <Position x={ 0.15 } z={ 0.15 }>
        <Box height={ 0.5 } width={ 0.05 } depth={ 0.05 } color={ '#292929' } />
      </Position>
      <Position x={ -0.15 } z={ -0.15 }>
        <Box height={ 0.5 } width={ 0.05 } depth={ 0.05 } color={ '#292929' } />
      </Position>
      <Position x={ -0.15 } z={ 0.15 }>
        <Box height={ 0.5 } width={ 0.05 } depth={ 0.05 } color={ '#292929' } />
      </Position>
    </group>
  )
}