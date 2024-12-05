import Link from "next/link";
import HomeSvg from "../../public/home.svg";
import RestaurantSvg from "../../public//restaurant.svg";
import ProfileSvg from "../../public/user.svg";
import HeartSvg from "../../public/heart.svg";
import ClockSvg from "../../public/clock.svg";

import OrderSvg from "../../public/market-car.svg"
import Image from "next/image";
export const SideBar = () => {
  return (
    <div className="flex h-screen flex-col w-64 bg-slate-100 border-r border-gray-700">
      <h2 className="text-black font-bold p-4 text-xl">Meal</h2>
      <ul className="flex flex-col list-none p-4 gap-4">
        <li className="flex items-center" >
          <Link href="#" className="w-full text-black flex gap-2 content-center text-center hover:text-gray-500">
          <Image  width={20}  src={HomeSvg} alt=""></Image>
                  <p className=" mt-1">Home</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="w-full text-black flex gap-2 hover:text-gray-500">
          <Image  width={20}  src={RestaurantSvg} alt=""></Image>

                  <p className=" mt-1">Restaurants</p>
          </Link>
        </li>
       
        <li>
          <Link href="#" className="w-full text-black flex gap-2 hover:text-gray-500">
          <Image  width={20}  src={OrderSvg} alt=""></Image>

                  <p className=" mt-1">My Orders</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="w-full text-black flex gap-2 hover:text-gray-500">
          <Image  width={20}  src={ProfileSvg} alt=""></Image>

                  <p className=" mt-1"> Profile</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="w-full text-black flex gap-2 hover:text-gray-500">
          <Image   width={20}  src={HeartSvg} alt=""></Image>

                  <p className=" mt-1">Favorites</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="w-full text-black flex gap-2 hover:text-gray-500">
          <Image  width={20}  src={ClockSvg} alt=""></Image>
                  <p className=" mt-1">Order History</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
