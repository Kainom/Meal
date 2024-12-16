import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center p-10  text-text-light border-t border-background-dark bg-background-darkHeavy">
        &copy;{new Date().getFullYear()} MealApp. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
