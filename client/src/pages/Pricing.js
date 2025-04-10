import Button from '../components/Button';

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-4">Plans coming soon! Sign up for updates.</p>
      <a href="/contact">
        <Button text="Notify Me" />
      </a>
    </div>
  );
}

export default Pricing;