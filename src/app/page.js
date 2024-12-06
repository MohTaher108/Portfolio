export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Hello, Worlds!</h1>
      <p className="text-lg text-white mt-4">Welcome to my portfolio page.</p>
      <a
        href="#"
        className="mt-6 px-4 py-2 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100"
      >
        Get Started
      </a>
    </div>
  );
}