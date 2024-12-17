import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "../../../../lib/meals";
import { Params } from "next/dist/server/request/params";

interface Meals {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

async function Meal({ params }: { params: Params }): Promise<JSX.Element> {
  const { mealslug }: Params = await params;
  const meal: Meals = getMeal(mealslug);
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`${meal.image}`}
            alt={meal.title}
            fill
          ></Image>
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={`${classes.creator} my-3`}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary} </p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default Meal;
