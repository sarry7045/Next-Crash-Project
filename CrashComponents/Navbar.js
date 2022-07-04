import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/CrashAbout">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/CrashContact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
