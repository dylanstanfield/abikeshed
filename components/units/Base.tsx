import { Box } from '@react-three/drei'

export const Base = () => (
  <Box scale={ [8, 0.5, 6] } position={ [0, -0.75, 0] } castShadow receiveShadow>
    <meshLambertMaterial color='#3b752b' />
  </Box>
)