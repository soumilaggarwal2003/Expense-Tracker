"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/dbConfig";
import { Budgets, expenses } from "../../../../utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import ExpenseListTable from "./_components/ExpenseListTable";

function page() {
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
    <div className="p-5">
      <h2 className="font-bold text-lg mt-5">Latest Expenses</h2>
      <ExpenseListTable
        expensesList={expensesList}
        refreshData={() => getBudgetList()}
      />
    </div>
  );
}

export default page;
