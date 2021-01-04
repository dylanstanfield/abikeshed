import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false,
})

const HomePage = () => (
  <div style={{ height: '100vh', background: 'DarkSlateBlue' }}>
    <Scene />
  </div>
)

export default HomePage
