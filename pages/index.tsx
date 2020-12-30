import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Example = dynamic(() => import('./example'), {
  ssr: false
})

const HomePage = () => (
  <div style={{ height: '100vh', background: 'DarkSlateBlue' }}>
    <Example />
  </div>
)

export default HomePage
