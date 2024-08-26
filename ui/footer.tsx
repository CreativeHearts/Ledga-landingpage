import { FaTwitter } from 'react-icons/fa6';
import { FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';
import Button from '@/ui/Button';
import footerBlack from '@/public/footerblack.png';
import footersmall from '@/public/footersmall.png';
import X from '@/public/X.png';
import linkin from '@/public/linkin.png';

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className='w-[90%] mx-auto relative xs:mx-0 xs:w-[100%] mt-20'>
      <div className='flex w-[60%] gap-1 absolute  xs:w-[100%] top-10 xs:top-0 ml-9 xs:mx-auto items-center '>
        <input
          type='text'
          placeholder='Enter email to get started'
          className='bg-input w-[70%] xs:w-[50%] rounded-full text-[12px] px-8 xs:py-2 xs:ml-[20px] py-5 '
        />
        <Button />
      </div>
      <Image
        src={footerBlack}
        alt='footer background'
        className='w-[100%] mt-28 xs:hidden'
      />
      <Image
        src={footersmall}
        alt='footer bg'
        className='hidden xs:block xs:w-[1276px]'
      />
      <p className='text-white xs:text-[10px] absolute top-[75%] left-[10%] text-[15px] font-light xs:left-[20px]  '>
        {currentDate} Copyright. Ledga Innovative <br /> Solutions Limited
      </p>
      <div className='flex'>
        <div>
          <div className=' text-white absolute left-[64%] top-[25%] xs:left-[20px] xs:top-[30%]'>
            <h1 className='text-lg font-semibold xs:text-sm'>Contact</h1>
            <p className='font-light text-[15px] xs:text-[10px]'>08050605253</p>
            <p className='font-light xs:text-[10px] text-[15px]'>
              hello@ledgafinance.com
            </p>
            <div className=' mt-2 flex gap-4'>
              <Image
                src={linkin}
                alt='linkin logo'
                className='w-6 h-6 xs:w-5 xs:h-5'
              />
              <Image src={X} alt='X logo' className='w-7 h-6 xs:w-6 xs:h-5' />
            </div>
          </div>
        </div>
        <div className='absolute left-[85%] text-white xs:left-[292px] top-[25%] xs:top-[30%]'>
          <h1 className='text-lg font-semibold xs:text-sm'>Address</h1>
          <p className='font-light xs:text-[10px] text-[15px]'>
            Abuja, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
