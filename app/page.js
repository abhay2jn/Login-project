"use client";

import { useRouter } from "next/navigation";
import Users from "./users/page";

function page() {
  const router = useRouter();

  function any(page) {
    router.push(page);
  }
  
  return (
    <div>
      <Users />
    </div>
  )
}

export default page;