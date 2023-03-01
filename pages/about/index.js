import Image from 'next/image'
import child from '../../assets/about-child.jpg'


const about = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <div className='py-32 bg-cover bg-about-bg text-center '>
                    <h1 className='text-white text-4xl md:text-5xl font-medium font-sans'>Our Mission</h1>
                    <h2 className='text-white text-sm md:text-xl font-medium font-sans mt-2'>It is every child’s right to 
                    receive the love, care and attention of their family, community, or even a stranger.</h2>
                </div>
            </div>
            {/* <div className='bg-gradient-to-b from-black to-white w-full absolute h-8 opacity-30' ></div> */}
            
            <div className="w-3/4 bg-white text-center mt-4 m-auto py-0 px-10 -translate-y-32">
                <h1 className="text-[40px] border-b-[4px] border-b-orange-600 inline-block rounded-sm pb-4 mt-20 text-black">Our Story</h1>
                <p className='pt-6 text-xl pb-20 text-black flex justify-center'>In May 2016, one of Orphan Life Foundation’s members visited a school in the village of Didyr
                    , Burkina Faso which we had been helping by contributing to the improvement of the orphan education
                     environment present there. During the tour of the school, a child called him a “SAINT”. He asked as 
                     to why the little girl said that. She stated that she had been using the same pencil that had been
                      given to her 2 years ago as part of Orphan Life Foundation’s efforts.</p>
            </div>

            <div className="flex px-4">
                {/* <div className='w-[600px] bg-slate-500'><Image src={child} width={0} height={0} alt='child' /></div> */}
                <div className='w-1/2 text-center flex justify-center align-middle px-3'><p className=' text-xl m-auto'>The uplifting story about this young girl serves as an inspiration 
                    for us and a display of gratitude on the part of the community for
                     extending our support. As Meryl Streep defined it, “The great gift 
                     of human beings is that we have the power of empathy.” Please help 
                     Orphan Life Foundation use the power of empathy along with YOUR 
                     GRATITUDE to make the lives of these orphans and abandoned children better.</p></div>
            </div>
        </>
    )
}
export default about;