import Image from "next/image";
import Burguer from "../../public/burguer.png";
import Link from "next/link";

export default () => {
  return (
    <header className="pl-20 flex border-b  border-b-slate-300 justify-between h-36 items-center ">
      <div className="flex gap-10 items-center ">
        <Image
          src={Burguer}
          width={100}
          height={100}
          alt="Burguer logo"
        ></Image>
        <nav>
          <ul className="flex gap-12 pt-2 text  ">
            <li>Home</li>
            <li>Restaurants and Market</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4 px-12">
        <Link href={"/sign"} className="px-6 py-2 text-primary-orange">
          Sign Up
        </Link>
        <Link href={"/login"} className="text-white px-8 py-2.5 rounded-md bg-background-red ">
          Login
        </Link>
      </div>
    </header>
  );
};
