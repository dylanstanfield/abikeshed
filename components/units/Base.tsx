import { Box } from '../utils/Box'
import { Position } from '../utils/Position'

export const Base = () => (
  <group>
    <Position y={ 0.3 }>
      <Box height={ 0.1 } width={ 6 } depth={ 4 } color={ '#666666' } />
    </Position>
    <Position y={ 0.3 } x={ 3.5 }>
      <Box height={ 0.1 } width={ 1 } depth={ 2 } color={ '#666666' } />
    </Position>
    <Box height={ 0.5 } width={ 10 } depth={ 10 } color={ '#1f7a1f' } />
  </group>
)