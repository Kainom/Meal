import React from "react";
import classe from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import getMeals from "../../../lib/meals";

export default async function Meals() {
  // Fetch data from your API
  const meals = await getMeals();

  return (
    <React.Fragment>
      <header
        className={`${classe.header} w-full min-[800px]:p-20 max-[800px]:grid max-[800px]:items-center  max-[800px]:p-10 max-[320px]:pt-20`}
      >
        <h1 className="max-[400px]:text-lg">
          Delicious Meals,created{" "}
          <span className={`${classe.highlight} min-[400px]:text-lg`}>
            by you
          </span>
        </h1>
        <p className="max-[400px]:text-lg max-[320px]:hidden ">
          Choose your favorite recipe and cook it yourself.It is easy and fun!
        </p>
        <p>
          <Link
            className={`${classe.cta} max-[418px]:p-1 p-2 py-2 max-[400px]:text-lg`}
            href={"/meals/share"}
          >
            Share <span className="max-[244px]:hidden">Your</span>{" "}
            <span className="max-[378px]:hidden max-[400px]:text-lg">
              favorite{" "}
            </span>
            Recipe
          </Link>
        </p>
      </header>
      <main className={classe.main}>
        <MealsGrid meals={meals} />
      </main>
    </React.Fragment>
  );
}
