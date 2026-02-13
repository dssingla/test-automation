import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-10 py-4">
      <h1 className="text-2xl font-bold">MyProject</h1>

      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>

        <Link href="/login">
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
