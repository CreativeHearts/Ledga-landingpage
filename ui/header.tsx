import Link from "next/link";
export default function Header() {
  return (
    <div className="flex flex-row z-50 absolute bg-transparent w-full py-[10px] px-[10px] items-end justify-between">
      {/* Logo */}
      <div className="flex flex-row items-center">
        <Link href={"/"} className="font-bold text-white text-[25px] mr-6">
          Ledga
        </Link>
        <div className="flex flex- items-center gap-[10px]">
          <Link href={"/"} className="text-white font-light text-[16px]">
            About Us
          </Link>
          <Link href={"/"} className="text-white font-light text-[16px]">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Contact Us */}
      <div>
        <button className="bg-baseBlue w-fit rounded-[px] px-[15px] py-[5px] text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
