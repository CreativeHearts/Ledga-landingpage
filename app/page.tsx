import Image from 'next/image';
import blueCard from '@/public/bluecard.png';
import Button from '@/ui/Button';
import desktopCard from '@/public/Subtract (2).png';
import halfImage from '@/public/half-image.png';
import iphone from '@/public/iphone.png';
// import woman from '@/public/woman .png';
import lady from '@/public/lady.png';

export default function Home() {
  return (
    <main>
      <div className='  w-[90%] ml-auto relative sm:hidden'>
        <Image src={blueCard} alt='hero background w-[95%]  ' />
        <div className='absolute top-[10%] left-[10%] w-[70%]'>
          <h3 className='text-[30px] font-bold leading-8 text-white '>
            Revolutionizing
            <br />
            Financial
            <br />
            Management
          </h3>
          <p className='text-xs mt-4 leading-1 text-white'>
            Simplify and streamline your institution&apos;s finances with
            Ledga&apos;s innovative platform. Experience transparency and
            efficiency like never before.
          </p>
        </div>
      </div>
      <div className='flex w-[80%] gap-1 justify-center items-center sm:hidden mt-[-50px] mx-auto'>
        <input
          type='text'
          placeholder='Enter email to get started'
          className='bg-input w-[70%] rounded-full text-[12px] px-8 py-2'
        />
        <Button />
      </div>
      <div className='sm:hidden relative mt-10'>
        <Image
          src={halfImage}
          alt='background image'
          className='mr-10 w-[85%] '
        />
        <div className='absolute top-[10%] left-[20%]'>
          <Image
            src={iphone}
            alt='iphone'
            className='w-[55%] translate-[50%]'
          />
          <h2 className='text-subBlue text-[12px] bg-white w-fit py-1 px-3 rounded-md absolute top-[28%] left-[-10%] shadow-md'>
            Make Payments
          </h2>
          <h2 className='text-subBlue text-[12px] bg-white w-fit py-1 px-3 rounded-md absolute top-[53%] left-[30%] shadow-md'>
            Settle your bills
          </h2>
        </div>
      </div>
      <div className='w-[90%] mx-auto relative hidden lg:block md:block mt-5 sm:block'>
        <Image src={desktopCard} alt='hero background w-[40%]  absolute ' />
        <div className='absolute top-[20%] left-[10%] w-[70%] lg:left-[5%]'>
          <h3 className='text-[30px] font-bold leading-8 text-white lg:text-[35px] lg:leading-10  '>
            Revolutionizing
            <br />
            Financial
            <br />
            Management
          </h3>
          <p className='text-xs mt-6 leading-1 w-[50%] lg:text-lg lg:leading-5 text-white'>
            Simplify and streamline your institution&apos;s finances with
            Ledga&apos;s innovative platform. Experience transparency and
            efficiency like never before.
          </p>
        </div>
        <div>
          <Image
            src={iphone}
            alt='iphone'
            className='w-[25%] absolute top-[15%] left-[70%]'
          />
          <h2 className='text-subBlue text-[12px] bg-white w-fit py-2 px-7 rounded-md absolute top-[45%] left-[66%] shadow-md'>
            Make Payments
          </h2>
          <h2 className='text-subBlue text-[12px] bg-white w-fit py-2 px-7 rounded-md absolute top-[70%] left-[87%] shadow-md'>
            Settle your bills
          </h2>
        </div>
        <div className='flex gap-4 absolute top-[85%] ml-24'>
          <input
            type='text'
            placeholder='Enter email to get started'
            className='bg-input w-96 rounded-full text-[13px] px-8 py-2'
          />
          <Button />
        </div>
      </div>
      <p className=' text-center mt-24'>
        worked and supported by many fininacial services
      </p>

      {/* <div className='flex w-[80%] mx-auto mt-24 '>
        <div>
          <h2 className='font-bold text-3xl text-subBlue text-center'>
            Our Solution
          </h2>
          <p className='text-subBlue'>
            ledga provides an intuitive web application for educational
            institution to manage finances effortlessly. with zero onboarding
            costs, administrators can create sub-accounts and member wallet,
            monitor financial flow, delegate roles, simplify fee collection and
            enhance payment transparency, all through user friendly interface,
            achieving greater efficiency and transparency.
          </p>
        </div>
        <Image src={woman} alt='lady' className='w-[70%]' />
      </div> */}
      <div className='w-[80%] mx-auto mt-32 relative xs:static xs:flex xs:flex-col xs:items-center'>
        <h2 className='font-bold text-3xl text-subBlue text-center absolute top-[30%] xs:static left-[20%] xs:text-center '>
          Our Solution
        </h2>
        <p className='text-subBlue absolute left-20 top-[40%] w-[40%] justify-end xs:static xs:text-center xs:w-[90%] xs:mt-8'>
          ledga provides an intuitive web application for educational
          institution to manage finances effortlessly. with zero onboarding
          costs, administrators can create sub-accounts and member wallet,
          monitor financial flow, delegate roles, simplify fee collection and
          enhance payment transparency, all through user friendly interface,
          achieving greater efficiency and transparency.
        </p>
        <Image src={lady} alt='lady' className='' />
      </div>
    </main>
  );
}
