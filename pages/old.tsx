import dynamic from 'next/dynamic'

const BikeShed = dynamic(() => import('../components_old/BikeShed'), {
  ssr: false,
})

const HomePage = () => (
  <div style={{ height: '100vh', background: 'DarkSlateBlue' }}>
    <BikeShed />
  </div>
)

export default HomePage
