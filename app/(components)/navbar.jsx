import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li>
          <Link href="/health" className="text-white">
            Health
          </Link>
        </li>
        <li>
          <Link href="/workout" className="text-white">
            Workout
          </Link>
        </li>

        <li>
          <Link href="/calculator" className="text-white">
            calculator
          </Link>
        </li>
        <li>
          <Link href="/womaniya" className="text-white">
            Women
          </Link>
        </li>

        <li>
          <Link href="/login" className="text-white">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className="text-white">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
