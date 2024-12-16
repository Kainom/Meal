import Link from "next/link";
import NavLink from "./NavLink";

export default () => {
  return (
    <header className="min-[894px]:pl-20 bg-background-darkHeavy flex border-b  border-b-background-dark max-[341px]:justify-start justify-between h-36 items-center ">
      <NavLink />
      <div className="flex  items-center gap-4 min-[393px]:px-12 ">
        <Link
          href={"/sign"}
          className="max-[390px]:px-6 py-2 text-primary-orange hover:text-primary-red transition-all duration-200"
        >
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
