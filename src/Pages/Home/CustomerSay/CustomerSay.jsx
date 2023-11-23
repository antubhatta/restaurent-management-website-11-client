import one from '../../../assets/one.avif'
import two from '../../../assets/two.jpg'
import three from '../../../assets/three.jpg'
import four from '../../../assets/four.webp'

const CustomerSay = () => {
    return (
        <div>
            <h3 className="text-xl lg:text-3xl font-bold mb-7 text-center">What Our Customers Say</h3>
            <div className='grid container mx-auto lg:mb-20 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 gap-6'>
                <div className="rounded-xl bg-[#F9F9F7]">
                    <h3 className="text-base lg:text-2xl font-bold text-[#AD343E] pt-8 px-6 mb-3 lg:mb-5 ">“The best restaurant”</h3>
                    <p className=" text-sm  lg:text-lg text-[#414536] px-6 mb-3 lg:mb-5 ">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                    <div className="px-6">
                    <p className="border-b border-solid border-[#DBDFD0] h-[1px]"></p>
                    </div>
                    <div className='pl-6 pb-4 lg:pb-7 flex items-center gap-4'>
                        <img className=' rounded-full w-[70px] object-cover h-[70px] mt-3 lg:mt-5' src={one} alt="" />
                        <div>
                            <h3 className='text-base text-[#2C2F24] font-bold mb-1'>Antu Bhatta</h3>
                            <p className='text-base text-[#414536]'>Los Angeles, CA</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-[#F9F9F7]">
                    <h3 className="text-base lg:text-2xl font-bold text-[#AD343E] pt-8 px-6 mb-3 lg:mb-5 ">“Simply delicious”</h3>
                    <p className=" text-sm lg:text-lg text-[#414536] px-6 mb-3 lg:mb-5 ">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                    <div className="px-6">
                    <p className="border-b border-solid border-[#DBDFD0] h-[1px]"></p>
                    </div>
                    <div className='pl-6 pb-4 lg:pb-7 flex items-center gap-4'>
                        <img className=' rounded-full w-[70px] object-cover h-[70px] mt-3 lg:mt-5' src={two} alt="" />
                        <div>
                            <h3 className='text-base text-[#2C2F24] font-bold mb-1'>Masud Rana</h3>
                            <p className='text-base text-[#414536]'>San Diego, CA</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-[#F9F9F7]">
                    <h3 className="text-base lg:text-2xl font-bold text-[#AD343E] pt-8 px-6 mb-3 lg:mb-5 ">“One of a kind restaurant”</h3>
                    <p className=" text-sm lg:text-lg text-[#414536] px-6 mb-3 lg:mb-5 ">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                    <div className="px-6">
                    <p className="border-b border-solid border-[#DBDFD0] h-[1px]"></p>
                    </div>
                    <div className='pl-6 pb-4 lg:pb-7 flex items-center gap-4'>
                        <img className=' rounded-full w-[70px] object-cover h-[70px] mt-3 lg:mt-5' src={three} alt="" />
                        <div>
                            <h3 className='text-base text-[#2C2F24] font-bold mb-1'>Dabbrata Dey</h3>
                            <p className='text-base text-[#414536]'>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-[#F9F9F7]">
                    <h3 className="text-base lg:text-2xl font-bold text-[#AD343E] pt-8 px-6 mb-3 lg:mb-5 ">“A wonderful experience”</h3>
                    <p className=" text-sm lg:text-lg text-[#414536] px-6 mb-3 lg:mb-5 ">We recently had the pleasure of dining at EatsHub, and it was truly a wonderful experience. The ambiance, the service, and the flavors of the dishes exceeded our expectations.</p>
                    <div className="px-6">
                    <p className="border-b border-solid border-[#DBDFD0] h-[1px]"></p>
                    </div>
                    <div className='pl-6 pb-4 lg:pb-7 flex items-center gap-4'>
                        <img className=' rounded-full w-[70px] object-cover h-[70px] mt-3 lg:mt-5' src={four} alt="" />
                        <div>
                            <h3 className='text-base text-[#2C2F24] font-bold mb-1'>Mossarof Hossain</h3>
                            <p className='text-base text-[#414536]'>New York, NY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSay;