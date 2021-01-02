import { Box } from '@react-three/drei'

export const Floor = () => (
  <group>
    <Box scale={ [5.6, 0.2, 3.6] } position={ [0, -0.4, 0] } castShadow receiveShadow>
      <meshLambertMaterial color='#595959' />
    </Box>
    <Box scale={ [0.2, 0.2, 1.1] } position={ [2.9, -0.4, 0] } castShadow receiveShadow>
      <meshLambertMaterial color='#595959' />
    </Box>
  </group>
)