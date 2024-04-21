import { FaTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col justify-center items-center py-[40px]">
      <div className="w-full flex flex-col md:flex-row h-[400px]">
        {/* Contact Us */}
        <div>
          <p>Phone Details</p>
        </div>
        {/* Location */}
        <div>
          <p>Location</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <p>${currentDate} Copyright. Ledga Innovative Solutions Limited </p>
        <div className="flex flex-row gap-[5px] items-center">
          <FiLinkedin className="text-[20px] text-baseGray" />
          <FaTwitter className="text-[20px] text-baseGray" />
        </div>
      </div>
    </div>
  );
}
