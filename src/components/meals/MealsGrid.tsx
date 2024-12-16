import React, { ReactElement } from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./MealItem";

type Meal = {
  id: number;
  title: string;
  creator: string;
  slug: string;
  summary: string;
  image: string;
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
