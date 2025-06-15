"use client";

import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 flex justify-start items-center bg-slate-300 p-3.5 font-bold text-lg">
        <Link href="/">Users Base</Link>
    </div>
  )
}