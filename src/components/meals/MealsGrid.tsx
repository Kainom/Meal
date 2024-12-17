import React, { ReactElement } from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./MealItem";

type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

interface MyProps {
  meals: Meal[];
}

const MealsGrid: React.FC<MyProps> = ({ meals }): React.ReactNode => {
  console.log()
  return (
    <React.Fragment>
      <ul className={classes.meals}>
        {meals.map((meal: Meal) => {
          return (
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default MealsGrid;
