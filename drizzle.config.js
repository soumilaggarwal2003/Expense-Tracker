/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://Expense-Tracker_owner:h7BJtM1AvuWr@ep-young-brook-a1an9syo.ap-southeast-1.aws.neon.tech/Expense-Tracker?sslmode=require",
  },
};
