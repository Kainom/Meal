"use client";
import Link from "next/link";
import Food1 from "../../public/food1.jpg";
import Food2 from "../../public/food2.jpg";
import Food3 from "../../public/food3.jpg";
import Food4 from "../../public/food4.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import Image from "next/image";
import classe from "./food.module.css"

interface Food {
  src: StaticImport | any;
  alt: string;
}
const foods: Food[] = [
  { src: Food1, alt: "food1" },
  { src: Food2, alt: "food2" },
  { src: Food3, alt: "food3" },
  { src: Food4, alt: "food4" },
];

const FoodSlide = () => {
  const [food, setFood] = useState<number>(0);
  useEffect(() => {
    const interval: any = setInterval(() => {
      setFood((prev) => (prev < foods.length - 1 ? prev + 1 : 0));
    }, 3000);
    console.log(food);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-4 pb-10 mt-5 flex justify-center gap-10 flex-wrap">
        <Image
          className={`rounded-md transition-opacity opacity-1 duration-75 ${classe.anime}`}
          loading="lazy"
          width={440}
          height={300}
          src={foods[food].src}
          alt={foods[food].alt}
        />
      <div className="p-10">
        <h1 className="text-4xl text-primary-red">
          NEXTLEVEL FOOD FOR
          <br />
          NEXTLEVEL FOODIES
        </h1>
        <p className="text-2xl mt-5">
          Taste & share food from all over the world
        </p>
        <span className="flex mt-10 items-center gap-10 flex-wrap">
          <strong>
          <p className="text-3xl text-primary-orange">Join the Community</p>
          </strong>
     
          <Link
            href="/signup"
            className="rounded-md text-white bg-red-500 px-10 py-2 hover:bg-red-600"
          >
            Explore Meals
          </Link>
        </span>
      </div>
    </main>
  );
};

export default FoodSlide;
