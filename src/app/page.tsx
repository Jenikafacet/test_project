import { UserCard } from "./components/userCard";
import { UserData } from "./types";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Suspense } from "react";
import { HomeButton } from "./components/homeButton";
import SearchButton from "./components/serchButton";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

async function getUserData(url: string) {
    try {
        const data = await fetch(url, {
            cache: "no-store",
        });  
        if (!data.ok) {
            throw new Error("Failed to load data");
        }   
        return await data.json(); 
    } catch (error) {
        console.log(error)
        throw new Error("Failed to load data");
    }
}

function getUrl(name: string | string[]) {
    return `${baseUrl}${name ? `?name_like=${name}` : ""}`;
}

export default async function UsersPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const name = (await searchParams).name || "";
    const url = getUrl(name);
    const users: UserData[] = await getUserData(url);
    
    return (
        <main className="fade-animation flex flex-col items-center m-2 gap-2">
            <Form action="/" className="flex w-full max-w-sm items-center gap-2">
                <Input name="name" type="text" placeholder="search by username" />
                <SearchButton />
            </Form> 
            <Suspense key={url} fallback={<div>Loading...</div>}>
            {users.length > 0 ? (
                <ul className="fade-animation flex flex-col items-center w-full gap-2" >
                    {users.map((user) => (
                        <UserCard 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        company={user.company} 
                        />
                    ))}
                </ul>
            ) : (
                <div className="fade-animation text-red-800 font-bold m-2">User not found</div>
            )}
            </Suspense>
            <HomeButton />
        </main>   
    )
}
