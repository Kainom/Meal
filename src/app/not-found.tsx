export default function NotFound(): JSX.Element {
  return (
    <>
     <article className="h-screen  items-center justify-center  flex">
     <div className="mb-40">
     <h1 className="text-center text-6xl font-bold text-text-pepper  ">
        Page Not Found
      </h1>
      <p
        className="text-center text-xl font-medium tracking-tight text-gray-700 mt-10"
      >
        The page you requested could not be found.
      </p>
     </div>
     </article>
    </>
  );
}
