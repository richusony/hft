import Image from 'next/image'
import child from '../../assets/about-child.jpg'
import child2 from '../../assets/about-child2.jpg'
import Link from 'next/link';



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

            <div className="w-5/6 md:w-3/4 bg-white text-center mt-4 m-auto py-0 px-10 -translate-y-32">
                <h1 className="text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium">Our Story</h1>
                <p className='pt-6 text-xl md:pb-20 text-black flex justify-center'>In May 2016, one of Orphan Life Foundation’s members visited a school in the village of Didyr
                    , Burkina Faso which we had been helping by contributing to the improvement of the orphan education
                    environment present there. During the tour of the school, a child called him a “SAINT”. He asked as
                    to why the little girl said that. She stated that she had been using the same pencil that had been
                    given to her 2 years ago as part of Orphan Life Foundation’s efforts.</p>
            </div>

            <div className="px-2 md:flex md:px-4 ">
                <div className='md:w-[600px] rounded-[5%] shadow-2xl'><Image src={child} width={0} height={0} alt='child' className='transition duration-300 w-full h-full rounded-[5%] grayscale hover:grayscale-0 hover:scale-105 ease-linear' /></div>
                <div className='mt-10 md:w-1/2 text-center flex justify-center align-middle px-3'><p className=' text-xl m-auto'>The uplifting story about this young girl serves as an inspiration
                    for us and a display of gratitude on the part of the community for
                    extending our support. As Meryl Streep defined it, “The great gift
                    of human beings is that we have the power of empathy.” Please help
                    Orphan Life Foundation use the power of empathy along with YOUR
                    GRATITUDE to make the lives of these orphans and abandoned children better.</p></div>
            </div>

            <div className='text-center px-3 h-auto mb-20'>
                <h1 className='text-[40px] border-b-[4px] border-b-[#ff6600] inline-block rounded-sm pb-4 mt-20 text-black font-medium'>Your Gratitude</h1>
                <p className='text-2xl md:text-4xl mt-8 leading-10 tracking-wide'>
                    "Inspired by the words which came out of the mouth of the little girl
                    as well as many other children like her, we bestow the same honor upon each and every
                    generous person, by calling them a “SAINT.”"
                </p>
            </div>

            <div className="px-2 md:flex md:px-4 mt-20">
                <div className='mt-10 md:w-1/2 text-center flex justify-center align-middle px-3'><p className=' text-xl m-auto'>The uplifting story about this young girl serves as an inspiration
                    for us and a display of gratitude on the part of the community for
                    extending our support. As Meryl Streep defined it, “The great gift
                    of human beings is that we have the power of empathy.” Please help
                    Orphan Life Foundation use the power of empathy along with YOUR
                    GRATITUDE to make the lives of these orphans and abandoned children better.</p></div>
                <div className='md:w-[600px] mt-10 rounded-[5%] shadow-2xl'><Image src={child2} width={0} height={0} alt='child' className='transition duration-300 w-full h-full rounded-[5%] grayscale hover:grayscale-0 hover:scale-105 ease-linear' /></div>
            </div>

            <div className='text-center px-3 h-auto my-20'>
                <p className='text-2xl md:text-4xl mt-8 leading-10 tracking-wide'>
                    "Orphan Life Foundation is about taking action by expressing
                    and receiving gratitude to accomplish our mission"
                </p>
            </div>

            <div className='bg-[#ff6600] text-center py-20'>
                <h2 className='text-3xl text-white h-20 mx-auto tracking-wide mb-20 font-medium px-2'>Take action by partnering<br/>
                    with us today</h2>

                    <Link href='/donate' className='transition duration-300 text-[#ff6600] px-5 py-3 bg-white font-medium ease-linear hover:bg-[#ff6600] hover:text-white hover:border-2 hover:border-white'>DONATE NOW</Link>

            </div>
        </>
    )
}
export default about;