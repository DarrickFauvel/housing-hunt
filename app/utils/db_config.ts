import { db, db_name } from "./db_connect"

export const createTable = async (tableName: string) => {
  await db.sql`USE DATABASE ${db_name};`
  await db.sql`CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY, address TEXT NOT NULL, city TEXT NOT NULL, state TEXT NOT NULL);`
  db.close()
}

export const dropTable = async (tableName: string) => {
  await db.sql`USE DATABASE ${db_name};`
  await db.sql`DROP TABLE IF EXISTS ${tableName};`
  db.close()
}

// export const insertListing = async (listingAddress: string) => {
//   await db.sql`USE DATABASE ${db_name};`
//   await db.sql`INSERT INTO listings (address) VALUES (${listingAddress});`
//   db.close()
// }
