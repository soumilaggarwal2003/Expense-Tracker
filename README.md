# Expense Tracker Website
This project is an Expense Tracker Website built using Next.js, Drizzle ORM, PostgreSQL, and Tailwind CSS. The application allows users to create budgets, add expenses, and visualize their spending with a bar chart.

# Features
**Budget Management:** 

Users can create budgets for different expenses.

**Expense Tracking:** 

Add expenses to each budget and track them effectively.

**Filtering:** 

View all expenses or filter by specific budgets.

**Data Visualization:** 

A bar chart is provided for visual representation of expenses within each budget.

**Responsive Design:** 

The application is fully responsive, ensuring a seamless experience across various devices and screen sizes.

# Technologies Used

**Next.js:** React framework for building server-side rendered applications.

**Drizzle ORM:** TypeScript ORM for PostgreSQL, providing a type-safe data access layer.

**PostgreSQL:** Relational database for storing application data.

**Tailwind CSS:** Utility-first CSS framework for designing responsive user interfaces.

# Getting Started
To run this project locally, follow these steps:

**Prerequisites**

Node.js

npm or yarn

PostgreSQL

**Installation**

**1) Clone the repository:**

git clone https://github.com/soumilaggarwal2003/Expense-Tracker

cd expense-tracker

**2) Install dependencies:**

npm install
**or**
yarn install

**3) Set up environment variables:**

Create a .env.local file in the root directory.

Add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_DATABASE_URL=

**4) Run database migrations:**

npm run db:push

npm run db:studio

**5) Start the development server:**

npm run dev
**or**
yarn dev

**6) Open your browser and navigate to:**

http://localhost:3000

# Usage

Create budgets for various expenses.

Add expenses to each budget.

Filter expenses by specific budgets or view all expenses.

Use the bar chart to visualize expenses within each budget.

# Acknowledgements
Next.js Documentation

Drizzle ORM Documentation

PostgreSQL Documentation

Tailwind CSS Documentation
