import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
	BsFillChatDotsFill,
	BsFillWalletFill,
	BsHospital,
} from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { GrPower } from "react-icons/gr";
import { TbBuildingSkyscraper, TbSchool } from "react-icons/tb";
import { LuHotel } from "react-icons/lu";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex bg-white  min-h-screen flex-col text-black items-center justify-between">
			{/* Main Screen Board */}
			<div className="w-full">
				<Image
					className="h-[600px] w-full"
					src={"/giant company.jpg"}
					alt={"banner"}
					width={1000}
					height={1000}
				/>
				<div className="bg-black bg-opacity-40 w-full h-[600px] top-0 absolute"></div>

				<div className={`absolute top-1/3 text-[30px] px-4`}>
					<p className="text-white font-bold">
						Get convenience of
						<br />
						transaction with Ledga
					</p>
					<p className="text-[16px] font-light text-white">
						Make payments, settle bills and
						<br />
						send to friends with ease, fast and free.{" "}
					</p>
					<button className="bg-baseBlue w-fit rounded-[5px] text-[15px] mt-[30px] px-[15px] py-[5px] text-white">
						Get Started
					</button>
				</div>
			</div>

			{/* Metrics */}
			<div className="flex flex-col items-center md:flex-row justify-between py-[100px] px-[40px] gap-10">
				<div className="flex flex-row items-center gap-2">
					<p className="text-4xl font-bold ">70k</p>
					<p className="text-sm">Wallets Created</p>
				</div>
				<div className="flex flex-row items-center gap-2">
					<p className="text-4xl font-bold ">4M+</p>
					<p className="text-sm">Transactions processed monthly</p>
				</div>
				<div className="flex flex-row items-center gap-2">
					<p className="text-4xl font-bold ">4.9M</p>
					<p className="text-sm">Transactions processed monthly</p>
				</div>
			</div>

			<div className="bg-[#E7E9ED] w-full h-[2px]"></div>

			{/* Benefits */}
			<div className="py-[100px]">
				<p className="font-bold text-2xl text-center mb-[20px]">
					What Ledga Offers You
				</p>
				<div className="flex flex-col items-center md:flex-row gap-[10px]">
					<div className="py-[20px] shadow-md rounded-[1px] px-[5px] flex flex-col items-center w-[200px]">
						<BsFillWalletFill className="text-baseBlue text-[50px]" />
						<p className="mt-2">Internal Wallet</p>
						<p className="font-light text-center">
							Every team members has an intenal wallet to make
							effective transactions.
						</p>
					</div>
					<div className="py-[20px] shadow-md rounded-[1px] px-[5px] flex flex-col items-center w-[200px]">
						<GrPower className="text-baseBlue text-[50px]" />
						<p className="mt-2">Administrative Powers</p>
						<p className="font-light text-center">
							Enables businesses grant tailored access to managers
							& sub admins and monitoring overview
						</p>
					</div>
					<div className="py-[20px] shadow-md rounded-[1px] px-[5px] flex flex-col items-center w-[200px]">
						<FaMoneyBills className="text-baseBlue text-[50px]" />
						<p className="mt-2">Bill Creation</p>
						<p className="font-light text-center">
							Enables businesses create bills and levies for their
							organizations and target specific people or groups.
						</p>
					</div>
					<div className="py-[20px] shadow-md rounded-[1px] px-[5px] flex flex-col items-center w-[200px]">
						<BsFillChatDotsFill className="text-baseBlue text-[50px]" />
						<p className="mt-2">Sub Accounts</p>
						<p className="font-light text-center">
							Effectively manage payments fom all your different
							purposes and have them with different accounts
						</p>
					</div>
				</div>
			</div>

			{/* What We Offer */}
			<div className="  w-full bg-[#F4F7FA]  py-[100px] flex flex-col items-center">
				<p className="font-bold text-2xl text-center mb-[20px]">
					Why You Should Choose Us
				</p>
				<div className="flex flex-col gap-[40px] md:flex-row items-center">
					<Image
						src={"/choose us.jpg"}
						alt="sub image"
						width={500}
						height={500}
						className=" object-cover "
					/>
					<div
						className={`${montserrat.className} gap-4 px-[20px] flex flex-col text-baseGray`}>
						<div className="flex flex-row gap-[20px]">
							<p className="rounded-full inline-flex text-[#473BF0] font-bold self-center items-center justify-center h-[30px] w-[30px] bg-subBlue bg-opacity-15">
								1
							</p>
							<div>
								<p className="font-bold">
									Swift & Free Transactions
								</p>
								<p>
									All transactions on Ledga are totally free
									and fast
								</p>
							</div>
						</div>

						<div className="flex flex-row gap-[20px]">
							<p className="rounded-full inline-flex text-[#473BF0] font-bold self-center items-center justify-center h-[30px] w-[30px] bg-subBlue bg-opacity-15">
								2
							</p>
							<div>
								<p className="font-bold">
									Pocket Money Management
								</p>
								<p>
									Ledga helps your student manage pocket money
									and make payments
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-[20px]">
							<p className="rounded-full inline-flex text-[#473BF0] font-bold self-center items-center justify-center h-[30px] w-[30px] bg-subBlue bg-opacity-15">
								3
							</p>
							<div>
								<p className="font-bold">
									Alternative Income Stream
								</p>
								<p>
									Earn every time your student funds their
									account
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sectors*/}
			<div className="flex flex-col bg-white w-full py-[100px] items-center">
				<p className="font-bold text-2xl text-center mb-[20px]">
					Sectors We Operate In
				</p>
				<div className="flex flex-col w-full  md:flex-row items-center">
					<div
						className={`${montserrat.className} grid grid-cols-2 md:flex md:flex-row  items-center  py-[10px] justify-center gap-[40px] w-full text-baseGray`}>
						<div className="flex flex-col items-center gap-[20px]">
							<TbSchool className="text-[50px] text-baseBlue" />
							<p className="font-bold">Schools</p>
						</div>
						<div className="flex flex-col items-center gap-[20px]">
							<LuHotel className="text-[50px] text-baseBlue" />
							<p className="font-bold">Hotels</p>
						</div>
						<div className="flex flex-col items-center gap-[20px]">
							<BsHospital className="text-[50px] text-baseBlue" />
							<p className="font-bold">Hospital</p>
						</div>
						<div className="flex flex-col items-center gap-[20px]">
							<TbBuildingSkyscraper className="text-[50px] text-baseBlue" />
							<p className="font-bold">Organisation</p>
						</div>
					</div>
				</div>
			</div>

			<div className="h-[50px] w-full bg-baseBlue"></div>
		</main>
	);
}
