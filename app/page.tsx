import Image from 'next/image';

import '@/app/globals.css';

import blueCard from '@/public/bluecard.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Button from '@/ui/button';
import desktopCard from '@/public/Subtract (2).png';
import halfImage from '@/public/half-image.png';
import iphone from '@/public/iphone.png';
import woman from '@/public/woman .png';
import lady from '@/public/lady.png';
import phones from '@/public/phone2.png';
import recGrad from '@/public/recradient.png';
import GetStartedBtn from '@/ui/Button';
import hand from '@/public/hand.png';
import subBlue from '@/public/bluesub.png';
import subBlack from '@/public/Subtract dark (1).png';
import circle from '@/public/circleblack.png';
import arrow from '@/public/arrow.png';
import whiteBg from '@/public/subWhite.png';
import bigBlue from '@/public/bigBlue.png';
import bigsmall from '@/public/bigsmall.png';
import rectanglesmall from '@/public/Rectangle 49.png';
import Testimonial from '@/ui/testimonial';

export default function Home() {
  return (
    <main>
      <div className='  w-[90%] ml-auto relative sm:hidden'>
        <Image src={blueCard} alt='hero background' className='w-[100%]' />
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
      <div className='flex w-[80%] gap-1 justify-center items-center sm:hidden mt-[-50px] mx-auto xs:w-[90%]'>
        <input
          type='text'
          placeholder='Enter email to get started'
          className='bg-input w-[70%] rounded-full text-[12px] px-8 py-2'
        />
        <GetStartedBtn />
      </div>
      <div className='sm:hidden relative mt-10'>
        <Image
          src={halfImage}
          alt='background image'
          className='mr-10 w-[85%]  '
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
          <div className='flex  w-[60%] gap-1 absolute top-10 ml-9 items-center '></div>
          <GetStartedBtn />
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
        <Image src={lady} alt='lady' className='xs:hidden mb-10' />
        <Image
          src={woman}
          alt='woman'
          className='hidden xs:block my-10 rounded-3xl'
        />
      </div>
      {/* first set */}
      <div className=' my-16 flex xs:flex-col w-[90%] mx-auto justify-between xs:justify-center align-middle gap-9 '>
        <div className='w-[100%] h-[594px] xs:w-[371px] xs:h-[375.42px] bg-black relative rounded-[40px] shadow-xl '>
          <h1 className='text-white absolute left-10 top-14 font-bold text-3xl xs:text-lg'>
            Innovative <br />
            Solutions
          </h1>
          <p className='text-white absolute leading-5 left-10 top-40 font-light w-[50%] xs:text-[11px] xs:w-[45%]'>
            Ledga offers unique futures like internal wallets, peer transfers,
            sub-accounts, and automated savings, ensuring all your financial
            needs are met.
          </p>
          <div className='absolute bottom-10 left-10'>
            <GetStartedBtn />
          </div>
          <Image
            src={phones}
            alt='dark rectangle background'
            className='w-[46%] absolute bottom-0 right-0 rounded-br-3xl'
          />
        </div>
        <div className='relative w-[100%] h-[587px] xs:w-[370px] xs:h-[375px] shadow-xl rounded-[40px] '>
          {/* Hand image at the background */}
          <Image
            src={hand}
            alt='hand'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 rounded-[40px]'
          />
          {/* RecGrad image on top */}
          <Image
            src={recGrad}
            alt='recGrad'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-10 rounded-[40px] shadow-md'
          />
          <h1 className='absolute top-96 left-[67px] text-white font-bold xs:text-lg text-2xl z-10 leading-6 xs:top-56 xs:left-9'>
            Experience Seamless <br /> Payments with Ease
          </h1>
          <p className='absolute top-[75%] xs:text-[11px] left-[67px] text-white font-light z-10 xs:w-[80%] xs:left-9 leading-5 w-[50%]'>
            Make payments, settle bills, and send money to friends effortlessly.
            Fast, free, and secure—discover the future of hassle-free
            transactions today. Join us and simplify your financial life now!
          </p>
          <div className='absolute top-10 right-10 z-10'>
            <GetStartedBtn />
          </div>
        </div>
      </div>
      {/* next set */}
      <div className='flex w-[100%] xs:flex-col mx-auto gap-9 xs:grid'>
        <div
          className='relative w-[100%]  rounded-[50px] 
         '
        >
          <Image
            src={subBlue}
            alt='blue background'
            className='w-[100%] h-[678px]  relative xs:w-[370px] xs:h-[374.41px]'
          />
          <p className='absolute top-[13%]  left-36 xs:left-16 font-semibold text-[20px] text-white '>
            Market size
          </p>
          <div className='absolute xs:left-16 top-[20%] left-36 xs:top-20 text-white '>
            <h1 className='font-bold text-[70px]  xs:text-[40px] '>264</h1>
            <p className='text-[15px] mt-[-20px] font-light xs:mt-[-10px]'>
              Tertiary Institution
            </p>
          </div>
          <div className='absolute xs:left-16 top-[40%] xs:top-40 left-36 text-white '>
            <h1 className='font-bold text-[70px] xs:text-[38px] '>104.6K</h1>
            <p className='text-[15px] mt-[-20px] font-light xs:mt-[-10px] '>
              Companies
            </p>
          </div>
          <div className='absolute xs:left-16 top-[60%] left-36 text-white xs:top-60'>
            <h1 className='font-bold text-[70px] xs:text-[40px]  '>1.8m</h1>
            <p className={`text-[15px] mt-[-20px] font-light xs:mt-[-10px] `}>
              Students
            </p>
          </div>
          <div>
            <Image
              src={circle}
              alt='circle'
              className='absolute top-[5%] right-[12%] w-[108px] h-[106px] xs:w-[60px] xs:h-[59px]'
            />
            <Image
              src={arrow}
              alt='arrow'
              className='absolute top-[10%] right-[17%] xs:top-[2.25rem] xs:right-[69px] w-[37px] h-[36px] xs:w-[20px] xs:h-[20px]'
            />
          </div>
        </div>
        <div className='relative w-[100%]'>
          <Image
            src={subBlack}
            alt='black background'
            className='w-[90%] h-[350px] xs:w-[377.45px] xs:mx-auto xs:h-[245px]'
          />
          <div className='absolute top-20 left-16 text-white xs:top-9'>
            <h1 className=' font-bold text-[70px] xs:text-[40px]'>N4.8m</h1>
            <p className='text-[15px] mt-[-20px] xs:mt-[-10px] w-[50%] xs:text-[15px] font-light '>
              Since January 2024, Ledga has processed over 4 million naira worth
              of transactions
            </p>
          </div>
          <div className='bg-[#F3F7FC] w-[90%] h-[179px] rounded-[50px] xs:w-[377px] xs:mx-auto xs:h-[117px] gap-8 xs:gap-6 mt-[47px] flex justify-center items-center '>
            <h1 className=' font-bold text-subBlue text-[70px] xs:text-[40px]'>
              70K
            </h1>
            <p className=' text-subBlue text-[15px]  w-[35%] xs:w-[60%] font-light '>
              Ongoing partnership with the university of Benin to integrate 70k
              wallets
            </p>
          </div>
        </div>
      </div>

      <div className='bg-[#1358CD0D] mt-20 py-10'>
        <h1 className='text-center text-subBlue font-semibold text-[30px] mb-10'>
          Why You Should Choose Us
        </h1>
        <div className='flex mx-auto w-[90%] xs:flex-col'>
          <div className='relative w-[100%]'>
            <Image
              src={whiteBg}
              alt='whiteB background'
              className='w-[368px] h-[367px]'
            />
            <h1 className='absolute top-[76px] left-[86px] bg-black w-[70px] h-[70px] rounded-full text-white font-bold text-[40px] flex items-center justify-center align-middle '>
              1
            </h1>
            <h1 className='absolute top-[167px] left-[86px] text-[15px] w-[30%] font-semibold leading-4'>
              Swift & Free Transactions
            </h1>
            <p className='absolute top-[218px] left-[86px] text-[12px] w-[50%]'>
              All transactions on Ledga are totally free and fast
            </p>
          </div>
          <div className='relative w-[100%]'>
            <Image
              src={whiteBg}
              alt='whiteB background'
              className='w-[368px] h-[367px]'
            />
            <h1 className='absolute top-[76px] left-[86px] bg-black w-[70px] h-[70px] rounded-full text-white font-bold text-[40px] flex items-center justify-center align-middle '>
              2
            </h1>
            <h1 className='absolute top-[167px] left-[86px] text-[15px] w-[30%] font-semibold leading-4'>
              Pocket Money Management
            </h1>
            <p className='absolute top-[218px] left-[86px] text-[12px] w-[50%]'>
              ALedga helps your student manage pocket money and make payments
            </p>
          </div>
          <div className='relative w-[100%]'>
            <Image
              src={whiteBg}
              alt='whiteB background'
              className='w-[368px] h-[367px]'
            />
            <h1 className='absolute top-[76px] left-[86px] bg-black w-[70px] h-[70px] rounded-full text-white font-bold text-[40px] flex items-center justify-center align-middle '>
              3
            </h1>
            <h1 className='absolute top-[167px] left-[86px] text-[15px] w-[30%] font-semibold leading-4'>
              Alternative Income Stream
            </h1>
            <p className='absolute top-[218px] left-[86px] text-[12px] w-[50%]'>
              Earn every time your student funds their account
            </p>
          </div>
        </div>
      </div>

      {/* Big Blue Bg */}
      <div className='relative xs:w-[400px]'>
        <div>
          <Image
            src={bigBlue}
            alt='Big blue background'
            className='w-[100%] h-[800px] xs:hidden '
          />
          <Image
            src={bigsmall}
            alt='small blue'
            className='hidden xs:block  xs:w-[100%]  '
          />
          <Image
            src={rectanglesmall}
            alt='rectangle'
            className='hidden xs:block xs:h-[600px] xs:w-[100%]'
          />
        </div>
        <div className='absolute top-[65px] left-[100px] xs:left-[40px]'>
          <h1 className='text-[30px]  font-semibold text-white xs:w-[50%]'>
            Who can use ledga?
          </h1>
          <p className='text-[18px] w-[45%] text-white xs:w-[90%]'>
            Ledga will be used by different organizations such as Schools,
            Hotels, Hospitals and other organization that will need the services
            of ledga
          </p>
        </div>
        <div className='grid grid-cols-2 gap-10 absolute xs:grid-cols-1 top-[350px] left-[100px] xs:top-[300px] xs:mx-auto xs:left-[40px]'>
          <div className=' top-[65px] left-[100px]'>
            <div className='flex gap-4 items-center align-middle '>
              <div className='w-5 h-5 bg-white rounded-md shadow-sm'></div>
              <h1 className='text-[25px]  font-semibold text-white'>Schools</h1>
            </div>
            <p className='text-[15px] w-[80%] text-white font-extralight'>
              Schools Ledga helps schools streamline fee collection, manage
              sub-accounts and member wallets, monitor financial flows, and
              delegate roles, enhancing transparency and reducing administrative
              burdens.
            </p>
          </div>
          <div className=' '>
            <div className='flex gap-4 items-center align-middle '>
              <div className='w-5 h-5 bg-white rounded-md shadow-sm'></div>
              <h1 className='text-[25px]  font-semibold text-white'>
                Hospitals
              </h1>
            </div>
            <p className='text-[15px] w-[80%] text-white font-extralight'>
              Hospitals Hospitals can use Ledga to manage departmental finances,
              patient payments, and expenses efficiently, ensuring transparent
              transactions and simplified billing processes.
            </p>
          </div>
          <div className=''>
            <div className='flex gap-4 items-center align-middle '>
              <div className='w-5 h-5 bg-white rounded-md shadow-sm'></div>
              <h1 className='text-[25px]  font-semibold text-white'>Hotels</h1>
            </div>
            <p className='text-[15px] w-[80%] text-white font-extralight'>
              Hotels Ledga enables hotels to handle booking payments, staff
              payroll, and multiple accounts, improving financial oversight and
              operational efficiency.
            </p>
          </div>
          <div className=''>
            <div className='flex gap-4 items-center align-middle '>
              <div className='w-5 h-5 bg-white rounded-md shadow-sm'></div>
              <h1 className='text-[25px]  font-semibold text-white'>
                Organizations
              </h1>
            </div>
            <p className='text-[15px] w-[80%] text-white font-extralight'>
              Organizations Organizations can leverage Ledga to manage project
              finances, peer transfers, and overall financial health with
              transparent tracking and easy role delegation.
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
    </main>
  );
}
