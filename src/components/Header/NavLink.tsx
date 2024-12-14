"use client";
import Image from "next/image";
import Burguer from "../.././assets/icons/burguerLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const path: string = usePathname();
  
  return (
    <>
      <div className="flex min-[393px]:gap-10 items-center  ">
        <Image
          src={Burguer}
          width={100}
          height={100}
          alt="Burguer logo"
          className="cursor-pointer hover:scale-110 transition-all duration-200
          max-[341px]:hidden
          "
        ></Image>
        <nav className="max-[900px]:hidden">
          <ul className="flex gap-12 pt-2 text  ">
            <Link
              href={"/"}
              className={`cursor-pointer ${
                path === "/" ? "text-primary-red" : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              Home
            </Link>
            <Link
              href={"/community"}
              className={`cursor-pointer ${
                path.startsWith("/community")
                  ? "text-primary-red"
                  : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              Foodies Community
            </Link>
            <Link
              href={""}
              className={`cursor-pointer ${
                path.startsWith("/about")
                  ? "text-primary-red"
                  : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              About
            </Link>
            <Link
              href={""}
              className={`cursor-pointer ${
                path.startsWith("/contact")
                  ? "text-primary-red"
                  : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};