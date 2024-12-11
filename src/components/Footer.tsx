import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center p-10 bg-background-lighter text-text-dark border-t border-slate-200">
        &copy;{new Date().getFullYear()} MealApp. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
