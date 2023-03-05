import type { NextPage } from 'next'
import Hero from "./Hero"

const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
    </div>
  )
}

export default Home;
