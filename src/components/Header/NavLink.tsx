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
              href={"meals"}
              className={`cursor-pointer ${
                path.startsWith("/meals")
                  ? "text-primary-red"
                  : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              Meals
            </Link>
            <Link
              href={"/meals/share"}
              className={`cursor-pointer ${
                path === "/meals/share"
                  ? "text-primary-red"
                  : "hover:text-primary-red"
              } transition-all duration-200`}
            >
              Share
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
