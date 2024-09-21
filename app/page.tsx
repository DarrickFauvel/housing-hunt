import Link from "next/link"
import { createTable, dropTable } from "./utils/db_config"

// dropTable("listings")
// createTable("listings")

export default function Home() {
  return (
    <>
      <h1 className="text-3xl pb-4">Housing Hunt</h1>
      <div className="flex gap-4">
        <Link href="/listing/add" className="btn">
          Add Listing
        </Link>
        <a href="#" className="btn">
          Check Status
        </a>
      </div>
    </>
  )
}
