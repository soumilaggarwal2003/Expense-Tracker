import { Trash } from "lucide-react";
import React from "react";
import { db } from "../../../../../utils/dbConfig";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { expenses, Budgets } from "../../../../../utils/schema";
function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(expenses)
      .where(eq(expenses.id, expense.id))
      .returning();

    if (result) {
      refreshData();
      toast("Expense Deleted");
    }
  };

  return (
    <div className="mt-3">
      <div className="grid grid-cols-4 bg-slate-200 p-2">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>

      {expensesList.map((expense, index) => (
        <div key={index} className="grid grid-cols-4 bg-slate-100 p-2">
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{expense.createdAt}</h2>
          <h2>
            <Trash
              className="text-red-600 cursor-pointer"
              onClick={() => deleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
