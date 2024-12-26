"use client";
import { FormStatus, useFormStatus } from "react-dom";
const MealsFormSubmit = () => {
  const { pending }: FormStatus = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
};


export default MealsFormSubmit;