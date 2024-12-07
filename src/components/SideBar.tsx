import Link from "next/link";
import HomeSvg from "../../public/home.svg";
import RestaurantSvg from "../../public//restaurant.svg";
import ProfileSvg from "../../public/user.svg";
import HeartSvg from "../../public/heart.svg";
import ClockSvg from "../../public/clock.svg";

import OrderSvg from "../../public/market-car.svg";
import Image from "next/image";

interface Item {
  id:number,
  component: React.Component<any>;
  label: string;
  href: string;
}

const items: Item[] = [
  { id:1,component: HomeSvg, label: "Home", href: "/" },
  { id:2,component: RestaurantSvg, label: "Restaurants", href: "/restaurants" },
  { id:3,component: OrderSvg, label: "My Orders", href: "/my-orders" },
  { id:4,component: ProfileSvg, label: "Profile", href: "/profile" },
  { id:5,component: HeartSvg, label: "Favorites", href: "/favorites" },
  { id:6,component: ClockSvg, label: "History Orders", href: "/history" },
]

const SideBar = () => {
  return (
    <div className="flex h-screen flex-col w-64 bg-background-light border-r border-gray-700">
      <h2 className="text-text-dark font-bold p-4 text-xl  bg-background-lightSecondary">Meal</h2>
      <ul className="flex flex-col list-none p-4 gap-4">
        <li className="flex items-center">
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 content-center text-center hover:text-gray-500"
          >
            <Image width={20} src={HomeSvg} alt=""></Image>
            <p className=" mt-1">Home</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 hover:text-gray-500"
          >
            <Image width={20} src={RestaurantSvg} alt=""></Image>

            <p className=" mt-1">Restaurants</p>
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 hover:text-gray-500"
          >
            <Image width={20} src={OrderSvg} alt=""></Image>

            <p className=" mt-1">My Orders</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 hover:text-gray-500"
          >
            <Image width={20} src={ProfileSvg} alt=""></Image>

            <p className=" mt-1"> Profile</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 hover:text-gray-500"
          >
            <Image width={20} src={HeartSvg} alt=""></Image>

            <p className=" mt-1">Favorites</p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="w-full text-text-dark flex gap-2 hover:text-gray-500"
          >
            <Image width={20} src={ClockSvg} alt=""></Image>
            <p className=" mt-1">Order History</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
