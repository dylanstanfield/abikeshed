import { Board } from '../parts/Board'
import { colors } from '../colors'

export const Frame = () => (
  <group>
    {/* Floor */}
    <Board scale={ [6, 0.4, 0.4] } position={ [0, -0.3, -1.8] } color={ colors.frame } /> {/* North */}
    <Board scale={ [6, 0.4, 0.4] } position={ [0, -0.3, 1.8] } color={ colors.frame } /> {/* South */}
    <Board scale={ [0.4, 0.4, 4] } position={ [-2.8, -0.3, 0] } color={ colors.frame } /> {/* West */}

    {/* Door */}
    <Board scale={ [0.4, 0.4, 1] } position={ [2.8, -0.3, 1.1] } color={ colors.frame } />
    <Board scale={ [0.4, 0.4, 1] } position={ [2.8, -0.3, -1.1] } color={ colors.frame } />
    <Board scale={ [0.4, 2.2, 0.4] } position={ [2.8, 0.6, 0.75] } color={ colors.frame } />
    <Board scale={ [0.4, 2.2, 0.4] } position={ [2.8, 0.6, -0.75] } color={ colors.frame } />
    <Board scale={ [0.4, 0.4, 1.9] } position={ [2.8, 1.75, 0] } color={ colors.frame } />

    {/* Posts */}
    <Board scale={ [0.4, 3, 0.4] } position={ [2.8, 1, 1.8] } color={ colors.frame } /> {/* Southeast */}
    <Board scale={ [0.4, 3, 0.4] } position={ [-2.8, 1, 1.8] } color={ colors.frame } /> {/* Southwest */}
    <Board scale={ [0.4, 4, 0.4] } position={ [2.8, 1.5, -1.8] } color={ colors.frame } /> {/* Northeast */}
    <Board scale={ [0.4, 4, 0.4] } position={ [-2.8, 1.5, -1.8] } color={ colors.frame } /> {/* Northwest */}

    {/* Ceiling */}
    <Board scale={ [6, 0.4, 0.4] } position={ [-0, 3.3, -1.8] } color={ colors.frame } /> {/* North */}
    <Board scale={ [6, 0.4, 0.4] } position={ [-0, 2.3, 1.8] } color={ colors.frame } /> {/* South */}
    <Board scale={ [0.4, 0.4, 5] } position={ [-2.8, 2.9, 0] } rotation={ [0.27, 0, 0] } color={ colors.frame } /> {/* West */}
    <Board scale={ [0.4, 0.4, 5] } position={ [2.8, 2.9, 0] } rotation={ [0.27, 0, 0] } color={ colors.frame } /> {/* East */}
  </group>
)