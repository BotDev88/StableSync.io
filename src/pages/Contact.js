import Button from '../components/Button';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (static for now)');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded h-32"
        ></textarea>
        <Button text="Submit" />
      </form>
    </div>
  );
}

export default Contact;