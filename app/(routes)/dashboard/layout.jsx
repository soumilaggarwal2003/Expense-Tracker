// "use client";
// import React, { useEffect } from "react";
// import SideNav from "./_components/SideNav";
// import DashboardHeader from "./_components/DashboardHeader";
// import { db } from "../../../utils/dbConfig";
// import { Budgets } from "../../../utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { eq } from "drizzle-orm";
// import { useRouter } from "next/navigation";

// function DashboardLayout({ children }) {
//   const { user } = useUser();
//   const router = useRouter();
//   useEffect(() => {
//     user && checkUserBudgets();
//   }, [user]);

//   const checkUserBudgets = async () => {
//     const result = await db
//       .select()
//       .from(Budgets)
//       .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

//     if (result?.length == 0) {
//       router.replace("/dashboard/budgets");
//     }
//   };

//   return (
//     <div>
//       <div className="fixed md:w-64 hidden md:block ">
//         <SideNav />
//       </div>
//       <div className="md:ml-64">
//         <DashboardHeader />
//         {children}
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// "use client";
// import React, { useState, useEffect } from "react";
// import SideNav from "./_components/SideNav";
// import DashboardHeader from "./_components/DashboardHeader";
// import { db } from "../../../utils/dbConfig";
// import { Budgets } from "../../../utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { eq } from "drizzle-orm";
// import { useRouter } from "next/navigation";

// function DashboardLayout({ children }) {
//   const { user } = useUser();
//   const router = useRouter();
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   useEffect(() => {
//     user && checkUserBudgets();
//   }, [user]);

//   const checkUserBudgets = async () => {
//     const result = await db
//       .select()
//       .from(Budgets)
//       .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

//     if (result?.length == 0) {
//       router.replace("/dashboard/budgets");
//     }
//   };

//   const toggleSideNav = () => {
//     setIsSideNavOpen(!isSideNavOpen);
//   };

//   return (
//     <div>
//       <div className="fixed md:w-64 hidden md:block">
//         <SideNav />
//       </div>
//       <div className="md:ml-64">
//         <DashboardHeader />
//         <button
//           onClick={toggleSideNav}
//           className="md:hidden p-2 border rounded-md"
//         >
//           Menu
//         </button>
//         {isSideNavOpen && (
//           <div className="fixed inset-0 z-50 bg-white md:hidden">
//             <SideNav onClose={toggleSideNav} />
//           </div>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

"use client";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "../../../utils/dbConfig";
import { Budgets } from "../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div className="relative">
      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeSideNav}
        ></div>
      )}
      <div
        className={`fixed z-20 md:w-64 ${
          isSideNavOpen ? "block" : "hidden"
        } md:block`}
      >
        <SideNav isSideNavOpen={isSideNavOpen} onClose={closeSideNav} />
      </div>
      <div className="md:ml-64">
        <DashboardHeader onMenuClick={toggleSideNav} />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
