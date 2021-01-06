import { Cylinder } from '../utils/Cylinder'
import { Position } from '../utils/Position'

const range = (length: number) => [...(new Array(length)).keys()]

const Log = () => (
  <Position rotate={{ x: 90 }}>
    <Cylinder radius={ 0.25 } length={ 0.75 } color={ '#5e5035' } />
    <Cylinder radius={ 0.2 } length={ 0.76 } color={ '#85734e' } />
  </Position>
)

const LogLine: React.FC<{ length: number }> = ({ length }) => (
  <group>
    { range(length).map((i) => (
      <Position x={ i * 0.51 }>
        <Log />
      </Position>
    )) }
  </group>
)

export const Woodpile = () => (
  <group>
    <LogLine length={ 6 } />
    <Position x={ 0.255 } y={ 0.4 }>
      <LogLine length={ 5 } />
    </Position>
    <Position x={ 0.5 } y={ 0.8 }>
      <LogLine length={ 2 } />
    </Position>
    <Position x={ 2.05 } y={ 0.8 }>
      <LogLine length={ 1 } />
    </Position>
  </group>
)