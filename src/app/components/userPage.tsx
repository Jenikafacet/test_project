"use client";

import { HomeButton } from "./homeButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserRound } from "lucide-react";

import { UserPageProps } from "../types";

export function UserPage(props: UserPageProps) {
  const { name, username, email, address, phone, website, company } = props

  return (
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center gap-2 mr-3 text-2xl">
          <UserRound/>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2 p-5 bg-slate-100">
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Address: {address.street}, {address.city}</li>
            <li>Phone: {phone}</li>
            <li>Website: {website}</li>
            <li>Company name: {company.name}</li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <HomeButton />
        </CardFooter>
      </Card>
  )
}
