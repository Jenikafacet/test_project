"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function HomeButton() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/"); 
  };

  return (
    <Button type="button" className="w-30 cursor-pointer" onClick={handleNavigation}>
      Back Home
    </Button>
  )
}