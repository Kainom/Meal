import sql from "better-sqlite3";
import type { Database } from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { shareMeal } from "./shareActions/action";
import * as fs from "fs/promises";
import path from "node:path";
import { File } from "node:buffer";

const db: Database = sql("meals.db");

interface Meals {
  title: string;
  image: string;
  slug: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

interface Meal extends Meals {
  id: number;
}
interface MealPost extends Omit<Meals, "image"> {
  image: File;
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

const save = async (mealShare: MealPost): Promise<boolean | undefined> => {
  mealShare.slug = slugify(mealShare.title, { lower: true });
  mealShare.instructions = xss(mealShare.instructions as string);

  if (mealShare.image) {
    mealShare.image.name.split(".").pop();
    const fileExtension: string = path.extname(mealShare.image.name);
    const fileName: string = `${mealShare.slug}${fileExtension}`;
    const filePath: string = path.join("public", "images", fileName);

    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Read and write the image file
    const arrayBuffer: ArrayBuffer = await mealShare.image.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));

    // Update image path for the database
    const imagePath: string = `/images/${fileName}`;

    db.prepare(
      `INSERT INTO meals (title, image, slug, summary, instructions, creator, creator_email) VALUES (
      @title,
      @image,
      @slug,
      @summary,
      @instructions,
      @creator,
      @creator_email
      )`
    ).run({
      ...mealShare,
      image: imagePath,
    });
    return true;
  }
  return undefined;
};

export default getMeals;
export { getMeal, save };
