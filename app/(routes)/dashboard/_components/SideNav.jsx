// "use client";
// import { UserButton } from "@clerk/nextjs";
// import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect } from "react";

// function SideNav() {
//   const menuList = [
//     {
//       id: 1,
//       name: "Dashboard",
//       icon: LayoutGrid,
//       path: "/dashboard",
//     },
//     {
//       id: 2,
//       name: "Budgets",
//       icon: PiggyBank,
//       path: "/dashboard/budgets",
//     },
//     {
//       id: 3,
//       name: "Expenses",
//       icon: ReceiptText,
//       path: "/dashboard/expenses",
//     },
//     {
//       id: 4,
//       name: "Upgrade",
//       icon: ShieldCheck,
//       path: "/dashboard/upgrade",
//     },
//   ];

//   const path = usePathname();

//   useEffect(() => {}, [path]);

//   return (
//     <div className="h-screen p-5 border shadow-sm">
//       <Image src={"/logo.svg"} alt="logo" width={160} height={100} />

//       <div className="mt-5">
//         {menuList.map((menu, index) => (
//           <Link href={menu.path}>
//             <h2
//               className={`flex gap-2 text-gray-500 items-center font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
//                 path == menu.path && "text-primary bg-blue-100"
//               }`}
//             >
//               <menu.icon />
//               {menu.name}
//             </h2>
//           </Link>
//         ))}
//       </div>

//       <div className="fixed bottom-10 p-5 flex gap-2 items-center">
//         <UserButton />
//         Profile
//       </div>
//     </div>
//   );
// }

// export default SideNav;

// "use client";
// import { UserButton } from "@clerk/nextjs";
// import {
//   LayoutGrid,
//   PiggyBank,
//   ReceiptText,
//   ShieldCheck,
//   X,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// function SideNav({ onClose }) {
//   const menuList = [
//     {
//       id: 1,
//       name: "Dashboard",
//       icon: LayoutGrid,
//       path: "/dashboard",
//     },
//     {
//       id: 2,
//       name: "Budgets",
//       icon: PiggyBank,
//       path: "/dashboard/budgets",
//     },
//     {
//       id: 3,
//       name: "Expenses",
//       icon: ReceiptText,
//       path: "/dashboard/expenses",
//     },
//     {
//       id: 4,
//       name: "Upgrade",
//       icon: ShieldCheck,
//       path: "/dashboard/upgrade",
//     },
//   ];

//   const path = usePathname();

//   const handleMenuClick = () => {
//     if (onClose) {
//       onClose();
//     }
//   };

//   return (
//     <div className="h-screen p-5 border shadow-sm">
//       <div className="flex justify-between items-center">
//         <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
//         {onClose && (
//           <button onClick={onClose} className="md:hidden p-2">
//             <X />
//           </button>
//         )}
//       </div>

//       <div className="mt-5">
//         {menuList.map((menu) => (
//           <Link href={menu.path} key={menu.id} onClick={handleMenuClick}>
//             <h2
//               className={`flex gap-2 text-gray-500 items-center font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
//                 path == menu.path && "text-primary bg-blue-100"
//               }`}
//             >
//               <menu.icon />
//               {menu.name}
//             </h2>
//           </Link>
//         ))}
//       </div>

//       <div className="fixed bottom-10 p-5 flex gap-2 items-center">
//         <UserButton />
//         Profile
//       </div>
//     </div>
//   );
// }

// export default SideNav;

"use client";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav({ isSideNavOpen, onClose }) {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
        <button className="md:hidden p-2" onClick={onClose}>
          <X />
        </button>
      </div>

      <div className="mt-5">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id} onClick={onClose}>
            <h2
              className={`flex gap-2 text-gray-500 items-center font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
                path == menu.path && "text-primary bg-blue-100"
              }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;
