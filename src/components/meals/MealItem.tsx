import React from "react";
import classes from "./meal-item.module.css";
import Link from "next/link";
import Image from "next/image";

interface MyProps {
  title: string;
  creator: string;
  slug: string;
  summary: string;
  image: string;
}

export const MealItem = ({
  title,
  creator,
  slug,
  summary,
  image,
}: MyProps): JSX.Element => {
  return (
    <React.Fragment>
      {" "}
      <article className={classes.meal}>
        <header>
          <div className={classes.image}>
            <Image src={image} alt={title} />
          </div>
          <div className={classes.headerText}>
            <h2>{title}</h2>
            <p>by {creator}</p>
          </div>
        </header>
        <div className={classes.content}>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.actions}>
            <Link href={`/meals/${slug}`}>View Details</Link>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default MealItem;
