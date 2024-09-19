import Link from "next/link"

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center">
        <h2>
          <Link className="text-xl" href="/">
            Housing Hunt
          </Link>
        </h2>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/listing/add">Add Listing</Link>
          </li>
          <li>
            <a href="#">Check Status</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
