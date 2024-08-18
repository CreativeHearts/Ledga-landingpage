import React from 'react';
import '@/app/globals.css';
import SecondBtn from '../../ui/secondBtn';
export default function SecondLandingPage() {
  return (
    <main>
      <div className='w-[75%] mx-auto mt-28 flex justify-between '>
        <div className='flex flex-col justify-start self-start'>
          <h1 className='leading-[54px] text-[60px] font-light'>
            Get convenience <br /> of transaction <br /> with Ledga
          </h1>
          <p className='mt-7 text-[22px] leading-7'>
            Make payments, settle bills <br /> and send to friends with <br />{' '}
            ease, fast and free.
          </p>
          <div className='flex relative mt-10'>
            <input
              type='text'
              placeholder='Enter email to get started'
              className='border border-[#1358CD] focus:border-blue-700 focus:outline-none py-[5px] w-80 rounded-md text-[15px] px-5 placeholder-[#1358CD40]'
            />
            <div>
              <SecondBtn />
            </div>
          </div>
        </div>
        <div className='w-[300px] h-[300px] bg-subBlue  rounded-[110px] rotate-45 mt-[70px]'></div>
      </div>
      {/*  */}
      <div className='bg-subBlue relative mb-64 w-[75%] mx-auto text-white mt-32 rounded-3xl text-center h-[300px]'>
        <h1 className=' pt-16 align-middle font-extralight italic text-[30px] '>
          Why You Should
          <span className='not-italic font-semibold'> Choose Us</span>
        </h1>
        <div className='flex top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-1%]  w-[75%]  mx-auto gap-8'>
          <div className='bg-white py-10 shadow-md  flex rounded-3xl flex-col items-center px-8 w-[294px]'>
            <h1 className='bg-subBlue w-[50px] h-[50px] rounded-full align-middle flex items-center justify-center font-bold text-[30px] mb-5 '>
              1
            </h1>
            <div>
              <h1 className='text-subBlue leading-4 font-bold font-suisseWorks'>
                Swift & Free <br /> Transactions
              </h1>
              <p className='text-black mt-5 text-[14px]  font-light'>
                All transactions on Ledga are totally free and fast
              </p>
            </div>
          </div>
          <div className='bg-white py-10 shadow-md w-[294px] flex rounded-3xl flex-col items-center px-8'>
            <h1 className='bg-subBlue w-[50px] h-[50px] rounded-full align-middle flex items-center justify-center font-bold text-[30px] mb-5 '>
              2
            </h1>
            <div>
              <h1 className='text-subBlue leading-4 font-bold font-suisseWorks'>
                Pocket Money <br /> Management
              </h1>
              <p className='text-black mt-5 text-[14px]  font-light'>
                Ledga helps your student manage pocket money and make payments{' '}
              </p>
            </div>
          </div>
          <div className='bg-white py-10 shadow-md w-[294px] flex rounded-3xl flex-col items-center px-8'>
            <h1 className='bg-subBlue w-[50px] h-[50px] rounded-full align-middle flex items-center justify-center font-bold text-[30px] mb-5 '>
              3
            </h1>
            <div>
              <h1 className='text-subBlue leading-4 font-bold font-suisseWorks'>
                Alternative <br /> Income Stream
              </h1>
              <p className='text-black mt-5 text-[14px]  font-light'>
                All transactions on Ledga are totally free and fast
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
