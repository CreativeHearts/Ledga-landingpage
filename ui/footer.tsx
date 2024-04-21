import { FaTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col justify-center items-center py-[40px]">
      <div className="w-full px-[20px] flex flex-col md:flex-row gap-[40px] py-[20px] justify-between">
        {/* Contact Us */}
        <div>
          <p className="font-bold text-baseGray">Contact</p>
          <p className="text-subBlue">08050605253</p>
          <p className="text-subBlue">hello@ledgafinance.com</p>
        </div>
        {/* Location */}
        <div>
          <p className="font-bold text-baseGray">Address</p>
          <p>Abuja, Nigeria</p>
        </div>
        {/* More */}
      </div>
      <div className="bg-[#E7E9ED] my-[20px] w-full h-[2px]"></div>
      <div className="w-full flex flex-row justify-between items-end px-[20px]">
        <p>{currentDate} Copyright. Ledga Innovative Solutions Limited </p>
        <div className="flex flex-row gap-[10px] items-end">
          <FiLinkedin className="text-[20px] text-baseGray" />
          <FaTwitter className="text-[20px] text-baseGray" />
        </div>
      </div>
    </div>
  );
}
