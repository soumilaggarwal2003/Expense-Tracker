// "use client";
// import React from "react";
// import Image from "next/image";
// import { UserButton, useUser } from "@clerk/nextjs";
// import Link from "next/link";
// import { Button } from "../../components/ui/button";
// function Header() {
//   const { user, isSignedIn } = useUser();
//   return (
//     <div className="p-5 flex justify-between items-center border shadow-sm">
//       <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
//       {isSignedIn ? (
//         <UserButton />
//       ) : (
//         <Link href={"/sign-in"}>
//           <Button>Get Started</Button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default Header;

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
