export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-6xl text-bold">Oops!</h1>
      <p className="text-4xl text-bold">Sorry, there's nothing here now.</p>
      <p className="text-3xl text-bold">
        but please try{" "}
        <a
          className="text-3xl text-bold underline"
          href="http://localhost:3000/engagements/2021_0001/reviewnotes"
        >
          here
        </a>
      </p>
    </div>
  );
}
