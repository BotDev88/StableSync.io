import Button from '../components/Button';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-16 bg-blue-100">
        <h1 className="text-4xl font-bold">Welcome to StableSync.io</h1>
        <p className="text-xl mt-2">Digital Stable Management for Everyone</p>
        <a href="/contact">
          <Button text="Get Started" />
        </a>
      </header>
      <section className="p-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Monitor food, grass, and shavings</li>
          <li>Weather updates</li>
          <li>Offline support</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;