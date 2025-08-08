export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        <a href="/test">Normal page, script from layout executes</a>
      </p>
      <p>
        <a href="/zzz">Not found page, script from layout does not execute</a>
      </p>
    </main>
  );
}
