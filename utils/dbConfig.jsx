import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://Expense-Tracker_owner:h7BJtM1AvuWr@ep-young-brook-a1an9syo.ap-southeast-1.aws.neon.tech/Expense-Tracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
