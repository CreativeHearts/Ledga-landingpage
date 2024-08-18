import { FaTwitter } from 'react-icons/fa6';
import { FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';
import Button from '@/ui/button';
import footerBlack from '@/public/footerblack.png';
import X from '@/public/X.png';
import linkin from '@/public/linkin.png';

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className='w-[90%] mx-auto relative'>
      <div className='flex  w-[60%] gap-1 absolute top-10 ml-9 items-center '>
        <input
          type='text'
          placeholder='Enter email to get started'
          className='bg-input w-[70%] rounded-full text-[12px] px-8 py-5'
        />
        <Button />
      </div>
      <Image
        src={footerBlack}
        alt='footer background'
        className='w-[127rem] mt-28'
      />
      <p className='text-white absolute top-[189px] left-[75px] text-[15px] font-light'>
        {currentDate} Copyright. Ledga Innovative <br /> Solutions Limited
      </p>
      <div className='flex'>
        <div>
          <div className=' text-white absolute left-[747px] top-[82px]'>
            <h1 className='text-lg font-semibold'>Contact</h1>
            <p className='font-light text-[15px]'>08050605253</p>
            <p className='font-light text-[15px]'>hello@ledgafinance.com</p>
            <div className=' mt-2 flex gap-4'>
              <Image src={linkin} alt='linkin logo' className='w-6 h-6' />
              <Image src={X} alt='X logo' className='w-7 h-6' />
            </div>
          </div>
        </div>
        <div className='absolute left-[950px] text-white top-[82px]'>
          <h1 className='text-lg font-semibold'>Address</h1>
          <p className='font-light text-[15px]'>Abuja, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
