import sql from "better-sqlite3";
import type { Database } from "better-sqlite3";
const db: Database = sql("meals.db");

interface Meals {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
interface Meal extends Meals {
  id: number;
}

async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
} 

const getMeal: Function = (slug: string): Meals => {
  const some: Meals = <Meals>(
    db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
  );
  return some;
};

export default getMeals;
export { getMeal };
