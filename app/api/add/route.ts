import { db, db_name } from "@/app/utils/db_connect"
import { redirect } from "next/navigation"

export async function POST(request: Request) {
  const formData = await request.formData()
  const address = formData.get("address")
  const city = formData.get("city")
  const state = formData.get("state")

  try {
    await db.sql`USE DATABASE ${db_name}`
    await db.sql`INSERT INTO listings (address, city, state) VALUES (${address}, ${city}, ${state})`
    db.close()
  } catch (err) {
    console.error("There was an error.", err)
  }
  redirect("/listing/add")
}
