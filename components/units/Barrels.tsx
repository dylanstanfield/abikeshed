import { Box } from '../utils/Box'
import { Cylinder } from '../utils/Cylinder'
import { Position } from '../utils/Position'

const colorWood = '#786348'
const colorWoodDark = '#5c4b35'
const colorBand = '#878787'

export const Barrel = () => (
  <group>
    <Cylinder radius={ 0.4 } length={ 0.4 } color={ colorWood } />

    <Position y={ 0.25 }>
      <Cylinder radius={ 0.35 } length={ 0.2 } color={ colorWood } />
    </Position>
    <Position y={ 0.35 }>
      <Cylinder radius={ 0.3 } length={ 0.2 } color={ colorWood } />
    </Position>
    <Position y={ 0.3501 }>
      <Cylinder radius={ 0.25 } length={ 0.2 } color={ colorWoodDark } />
    </Position>

    <Position y={ -0.25 }>
      <Cylinder radius={ 0.35 } length={ 0.2 } color={ colorWood } />
    </Position>
    <Position y={ -0.35 }>
      <Cylinder radius={ 0.3 } length={ 0.2 } color={ colorWood } />
    </Position>
    <Position y={ -0.3501 }>
      <Cylinder radius={ 0.25 } length={ 0.2 } color={ colorWoodDark } />
    </Position>


    <Position y={ 0.225 }>
      <Cylinder radius={ 0.4 } length={ 0.05 } color={ colorBand } />
    </Position>
    <Position y={ -0.225 }>
      <Cylinder radius={ 0.4 } length={ 0.05 } color={ colorBand } />
    </Position>
  </group>
)

export const Barrels = () => (
  <group>
    <Barrel />
    <Position x={ 1.1 } y={ -0.1 } rotate={{ y: 30, z: 90 }}>
      <Barrel />
    </Position>
  </group>
)