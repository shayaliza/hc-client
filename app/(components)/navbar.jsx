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
          <Link href="/addDocter" className="text-white">
           Add docter
          </Link>
        </li>
        <li>
          <Link href="/showDoctor" className="text-white">
         Show doctor
          </Link>
        </li>
        <li>
          <Link href="/hospitals" className="text-white">
            Hospitals
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
