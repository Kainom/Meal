"use client"
export default function Error(): JSX.Element {
  return (
    <>
      <article className="h-screen  items-center justify-center  flex">
        <div className="mb-40">
          <h1 className="text-center text-6xl font-bold text-text-pepper  ">
            Error in Meals
          </h1>
          <p
            className="text-center text-xl font-medium tracking-tight 
          text-red-600
          
          mt-10"
          >
            The page you're looking for doesn't exist.
          </p>
        </div>
      </article>
    </>
  );
}
