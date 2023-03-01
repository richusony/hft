import Image from 'next/image'
import child from '../public/sister-and-brother.png'
import cl from '../assets/child-labour.png'
import heart from '../assets/broken-heart.png'
import Map from '../components/Map'
import arrow from '../assets/arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {

    return (
        <>
            <div className='overflow-hidden'>
                <div className='py-32 bg-cover bg-bgimg text-center bg-fixed'>
                    <h1 className='text-white text-4xl md:text-5xl font-medium font-sans'>Hope For Tomorrow</h1>
                    <h2 className='text-white text-sm md:text-xl font-medium font-sans mt-2'>A family for every child in our lifetime</h2>
                </div>

            </div>
            <div className='bg-gradient-to-b from-black to-white w-full absolute h-8 opacity-30' >
            </div>
            <div className='p-20 text-center'>
                <h1 className='text-4xl md:text-5xl font-sans'>Children Belong in Families</h1>
                <h2 className='text-xl md:text-2xl font-sans mt-8'>We all know this. Every child has the right to a safe, stable and permanent home.
                    And yet millions of children remain in orphanages or bounce between foster homes.
                    Hope for Tomorrow is working to change that.</h2>
            </div>
            <div className='p-5 md:flex'>
                <div className='p-10 text-center m-auto'>
                    <Image src={child} width={0} height={0} className='m-auto w-24' alt='child-photo' />
                    <h3 className='text-xl md:text-2xl'>18 million children live on streets in India</h3>
                </div>
                <div className='p-10 text-center m-auto'>
                    <Image src={cl} width={0} height={0} className='m-auto w-24' alt='child-photo' />
                    <h3 className='text-xl md:text-2xl'>10.1 million childrens under child labour</h3>
                </div>
                <div className='p-10 text-center m-auto'>
                    <Image src={heart} width={0} height={0} className='m-auto w-24' alt='child-photo' />
                    <h3 className='text-xl md:text-2xl'>69% of childrens died due to malnutrition and malnourishment</h3>
                </div>
            </div>

            <div className='p-5 flex-row justify-between md:flex md:justify-between md:mt-40'>
                <div className='bg-cover bg-bg1 text-center mb-12 overflow-y-hidden rounded md:w-1/3 md:h-96'>
                    <div className='md:h-96 p-3 hover:backdrop-blur-2xl translate-y-72 left-0 hover:translate-y-0'>
                        <h1 className='text-white text-xl md:text-2xl mb-12 font-sans font-medium'>Prevent children from entering the system</h1>
                        <h3 className='text-white mb-12 font-sans md:text-xl'>The orphan crisis will never end until we stop it at the source. This means:
                            Identifying vulnerable families long before the idea of child placement
                            is necessary. Here’s how we do it.</h3>
                        <button className='text-white p-2 border rounded mb-7 hover:bg-white hover:text-black font-serif'>Learn More</button>
                    </div>
                </div>
                <div><Image src={arrow} width={500} height={800} className='absolute left-96 hidden md:block md:-rotate-45' alt='arrow' /></div>
                <div className='bg-cover bg-bg2 text-center overflow-y-hidden rounded md:w-1/3 md:h-96'>
                    <div className='md:h-96 p-3 hover:backdrop-blur-2xl translate-y-60 md:translate-y-72 left-0 hover:translate-y-0'>
                        <h1 className='text-white text-xl md:text-2xl mb-12 font-sans font-medium '>Unite Children with Families</h1>
                        <h3 className='text-white mb-12 font-sans md:text-xl'>It’s time to move from orphanages to families, and we have a proven field-tested method to make sure this is done safely. Help us bring them home.</h3>
                        <button className='text-white p-2 border rounded mb-7 hover:bg-white hover:text-black font-serif'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='bg-slate-400 h-96 p-3 md:h-screen'>
                <h2 className='text-white font-thin text-xl md:text-2xl md:mb-3'>Locate Us <FontAwesomeIcon icon={faLocationDot} /></h2>
                <Map />
            </div>
        </>
    )
}

export default Hero;