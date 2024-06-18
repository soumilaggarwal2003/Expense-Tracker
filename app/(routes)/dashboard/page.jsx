"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CardInfo from "../dashboard/_components/CardInfo";
import BarChartDashboard from "./_components/BarChartDashboard";
import { db } from "../../../utils/dbConfig";
import { Budgets, expenses } from "../../../utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";
function Dashboard() {
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(expenses, eq(Budgets.id, expenses.budgetId))
      .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
    getAllExpenses();
  };

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: expenses.id,
        name: expenses.name,
        amount: expenses.amount,
        createdAt: expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(expenses, eq(Budgets.id, expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(expenses.id));
    setExpensesList(result);
  };
  return (
    <div className="p-8">
      <h2 className="font-bold text-3xl">Hi, {user?.fullName} 👋</h2>
      <p className="text-gray-500">
        Here's what happening with your money, Let's manage your expense
      </p>

      <CardInfo budgetList={budgetList} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
        <div className="md:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <h2 className="font-bold text-lg mt-5">Latest Expenses</h2>
          <ExpenseListTable
            expensesList={expensesList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
