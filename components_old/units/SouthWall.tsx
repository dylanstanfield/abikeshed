import { Board } from '../parts/Board'
import { WallSlat } from '../parts/WallSlat'
import { Glass } from '../parts/Glass'
import { colors } from '../colors'

export const SouthWall = () => (
  <group>
    <WallSlat position={ [0, 0.1, 1.75] } width={ 5.2 } />
    <WallSlat position={ [0, 0.55, 1.75] } width={ 5.2 } />
    <group>
      <WallSlat position={ [0, 1, 1.75] } width={ 1.2 } />
      <WallSlat position={ [2.5, 1, 1.75] } width={ 0.5 } />
      <WallSlat position={ [-2.5, 1, 1.75] } width={ 0.5 } />
    </group>
    <group>
      <WallSlat position={ [0, 1.45, 1.75] } width={ 1.2 } />
      <WallSlat position={ [2.5, 1.45, 1.75] } width={ 0.5 } />
      <WallSlat position={ [-2.5, 1.45, 1.75] } width={ 0.5 } />
    </group>
    <WallSlat position={ [0, 1.9, 1.75] } width={ 5.2 } />

    {/* Window Southwest */}
    <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 0.8, 1.8] } color={ colors.window.trim } />
    <Board scale={ [1.7, 0.1, 0.2] } position={ [-1.42, 1.7, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [-2.22, 1.2, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [-0.62, 1.2, 1.8] } color={ colors.window.trim } />
    <Glass position={ [-1.42, 1.2, 1.8] } height={ 0.9 } width={ 1.6 } />

    {/* Window Southeast */}
    <Board scale={ [1.7, 0.1, 0.2] } position={ [1.42, 0.8, 1.8] } color={ colors.window.trim } />
    <Board scale={ [1.7, 0.1, 0.2] } position={ [1.42, 1.7, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [2.22, 1.2, 1.8] } color={ colors.window.trim } />
    <Board scale={ [0.1, 0.9, 0.2] } position={ [0.62, 1.2, 1.8] } color={ colors.window.trim } />
    <Glass position={ [1.42, 1.2, 1.8] } height={ 0.9 } width={ 1.6 } />
  </group>
)