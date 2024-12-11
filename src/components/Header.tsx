import Image from "next/image";
import Burguer from "../../public/burguer.png";
import Link from "next/link";

export default () => {
  return (
    <header className="pl-20 bg-background-lighter flex border-b  border-b-slate-200 justify-between h-36 items-center ">
      <div className="flex gap-10 items-center ">
        <Image
          src={Burguer}
          width={100}
          height={100}
          alt="Burguer logo"
        ></Image>
        <nav className="max-[900px]:hidden">
          <ul className="flex gap-12 pt-2 text  ">
            <Link href={"/"} className="cursor-pointer hover:text-primary-red transition-all duration-200">
              Home
            </Link>
            <Link
              href={"/community"}
              className="cursor-pointer hover:text-primary-red transition-all duration-200"
            >
              Foodies Community
            </Link>
            <Link href={""} className="cursor-pointer hover:text-primary-red transition-all duration-200">
              About
            </Link>
            <Link href={""} className="cursor-pointer hover:text-primary-red transition-all duration-200">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4 px-12">
        <Link href={"/sign"} className="px-6 py-2 text-primary-orange hover:text-primary-red transition-all duration-200">
          Sign Up
        </Link>
        <Link
          href={"/login"}
          className="text-white px-8 py-2.5 rounded-md bg-background-red hover:bg-primary-orange transition-all duration-200"
        >
          Login
        </Link>
      </div>
    </header>
  );
};
