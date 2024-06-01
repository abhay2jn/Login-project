"use client";

import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  function any(page) {
    router.push(page);
  }
  
  return (
    <section>
      <h1>Routing</h1>
      <button className="border px-2 py-4" onClick={() => any("about")}>Go to about page</button>
    </section>
  )
}

export default page;
// onClick={() => router.push("about")} first method