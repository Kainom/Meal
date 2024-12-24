"use server";

import { redirect } from "next/navigation";
import { save } from "../meals";

interface MealPost {
  title: any | null;
  image: File;
  slug: any | null;
  summary: any | null;
  instructions: any | null;
  creator: any | null;
  creator_email: any | null;
}
export async function shareMeal(formData: any) {
  const meal: MealPost = {
    title: formData.get("title"),
    image: formData.get("image"),
    slug: "",
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
  await save(meal);
  redirect("/meals");
}
