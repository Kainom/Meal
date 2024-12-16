import sql from "better-sqlite3";
import type { Database } from "better-sqlite3";
const db: Database = sql("meals.db");

async function getMeal(): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
    .then(() => console.log("Hello World"))
    .catch((e) => e);
  return db.prepare("SELECT * FROM meals").all();
}

export default getMeal;
