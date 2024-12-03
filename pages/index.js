export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto p-4 flex justify-between">
          <h1 className="text-xl font-bold">My Website</h1>
          <nav>
            <a href="#about" className="mr-4">About</a>
            <a href="#contact" className="mr-4">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h2>
        <p className="text-gray-600 mb-8">A simple website created using Next.js and Tailwind CSS.</p>
        <a
          href="#features"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Learn More
        </a>
      </main>
      <footer className="w-full bg-gray-800 text-white text-center p-4">
        © 2024 My Website. All rights reserved.
      </footer>
    </div>
  );
}

