"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserRound } from 'lucide-react';

import { UserCardProps } from "../types"

export function UserCard(props: UserCardProps) {
  const { id, name, email, company } = props;
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/user/${id}`); 
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex gap-2">
        <UserRound/>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-1 mb-2">
          <li>Email: {email}</li>
          <li>Company name: {company.name}</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button type="button" className="w-full hover:bg-slate-300 cursor-pointer" variant="secondary" onClick={handleNavigation}>
          Show more info
        </Button>
      </CardFooter>
    </Card>
  )
}
