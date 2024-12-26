"use server";

import { redirect } from "next/navigation";
import { save } from "../meals";

interface MealPost {
  title: string | null;
  image: File;
  slug: string | null;
  summary: string | null;
  instructions: string | null;
  creator: string | null;
  creator_email: string | null;
}

type Message = {
  isValid: boolean;
  message: string;
};

const isInvalidText = (text: string | null): boolean => {
  return !text || text.trim() === "";
};

export async function shareMeal(
  prevState: Message,
  formData: any
): Promise<Message> {
  const meal: MealPost = {
    title: formData.get("title"),
    image: formData.get("image"),
    slug: "",
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (!meal.title || meal.title.trim() === "") {
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email?.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      isValid: false, 
      message:
        "Please fill out all required fields and ensure the image is valid.",
    } as Message;
  }

  await save(meal as MealPost | any);
  redirect("/meals");
}
