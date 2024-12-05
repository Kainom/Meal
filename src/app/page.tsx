import Link from "next/link";

function Home() {
  return (
    <main>
      <h1>Welcome to meal</h1>
      <p>
        <Link href={"/meals"}>
       Meals 
        </Link>
      </p>
    </main>
  );
}

export default Home;
