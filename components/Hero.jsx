export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6">

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Welcome to My Project 🚀
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl">
        Build modern and responsive websites using Next.js and Tailwind CSS.
        Perfect for college projects and startups.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
          Learn More
        </button>
      </div>

    </section>
  );
}
