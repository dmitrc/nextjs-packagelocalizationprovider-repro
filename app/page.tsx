export default function Home() {
  return (
    <main>
      <h1>Home without parallel route</h1>
      <p>
        <a href="/test">
          Page that throws, script from layout does not execute
        </a>
      </p>
      <p>
        <a href="/zzz">Not found page, script from layout executes</a>
      </p>
    </main>
  );
}
