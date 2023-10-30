import Link from "next/link";
import Image from 'next/image';

function Navbar() {
  // added a comment by vampire
  return (
    <nav className="bg-[#227C70] p-4">
      <Image className="flex justify-between items-center"
        src="/logo.png"
        width={100}
        height={100}
        alt="VitalFlow"
      />
      <ul className="flex item-center gap-[4vw]">
        <li>
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li>
          <Link href="/addDocter" className="text-white ">
            Add docter
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
