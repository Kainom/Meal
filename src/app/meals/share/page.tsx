import ImagePicker from "@/components/meals/ImagePicker";
import classes from "./page.module.css";

interface MealPost {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

function ShareMeal() {
  async function shareMeal(formData:any) {
    "use server";
    const meal: MealPost = {
      title: formData.get("title"),
      slug: formData.get("title").toLowerCase().replace(/\s/g, "-"),
      image: formData.get("image"), 
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
    console.log(meal);
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={"You image"} name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}

export default ShareMeal;
