import { Box } from "../utils/Box";
import { Position } from "../utils/Position";

const Slat: React.FC<{ width: number }> = ({ width }) => (
  <group>
    <Position y={ 0.05 }>
      <Box width={ width } depth={ 0.05 } height={ 0.4 } color={ '#635732' } />
    </Position>
    <Position y={ -0.05 } z={ -0.05 }>
      <Box width={ width } depth={ 0.05 } height={ 0.4 } color={ '#5c512f' } />
    </Position>
  </group>
)

export const Walls = () => (
  <group>
    {/* South */}

    <Position y={ 0.5 } z={ 1.75 }>
      { [...(new Array(4)).keys()].map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 5 } />
        </Position>
      )) }
    </Position>

    {/* North */}

    <Position y={ 0.5 } z={ -1.75 } rotate={{ y: 180 }}>
      { [...(new Array(6)).keys()].map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 5 } />
        </Position>
      )) }
    </Position>
    
    {/* East */}

    <Position x={ 2.8 } y={ 0.5 } z={ 1.25 } rotate={{ y: 90 }}>
      { [...(new Array(4)).keys()].map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 0.5 } />
        </Position>
      )) }
    </Position>
    <Position x={ 2.8 } y={ 0.5 } z={ -1.25 } rotate={{ y: 90 }}>
      { [...(new Array(4)).keys()].map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 0.5 } />
        </Position>
      )) }
    </Position>
    <Position x={ 2.8 } y={ 2.5 } rotate={{ y: 90 }}>
      <Slat width={ 3 } />
    </Position>
    <Position x={ 2.8 } y={ 3 }  z={ -0.3 } rotate={{ y: 90 }}>
      <Slat width={ 2.5 } />
    </Position>
    <Position x={ 2.8 } y={ 3.5 }  z={ -1.3 } rotate={{ y: 90 }}>
      <Slat width={ 0.75 } />
    </Position>

    {/* West */}

    <Position x={ -2.8 } y={ 0.5 } rotate={{ y: -90 }}>
      { [...(new Array(5)).keys()].map((i) => (
        <Position y={ 0.5 * i }>
          <Slat width={ 3 } />
        </Position>
      )) }
    </Position>
    <Position x={ -2.8 } y={ 3 }  z={ -0.3 } rotate={{ y: -90 }}>
      <Slat width={ 2.5 } />
    </Position>
    <Position x={ -2.8 } y={ 3.5 }  z={ -1.3 } rotate={{ y: -90 }}>
      <Slat width={ 0.75 } />
    </Position>
  </group>
)