import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex flex-row w-full h-[200px] items-end justify-center">
      {/* Logo */}
      <div className="flex flex-row w-1/3 items-center">
        <Link href={"/"} className="text-white text-[25px]">
          Ledga
        </Link>
        <div className="flex flex-row gap-[10px]">
          <Link href={"/"} className="text-white font-light text-[20px]">
            About Us
          </Link>
          <Link href={"/"} className="text-white text-[20px]">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Contact Us */}
      <div>
        <button className="bg-subBlue px-[5px] py-[2px] text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
