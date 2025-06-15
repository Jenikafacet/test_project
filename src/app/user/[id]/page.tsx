import { UserPage } from "../../components/userPage";
import { notFound } from "next/navigation";
import { Params, UserData } from "../../types";

export default async function User({ params }: Params) {
    
    const { id } = await params;
    let user: UserData | undefined;
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to load data");
    }
    const data: UserData[] = await res.json();
    user = data.find((user) => user.id === Number(id));
    } catch (error) {
        console.log(error)
        throw new Error("Failed to load data");
    }

    if (!user) {
        notFound()
    }

    return (
        <div className="fade-animation flex justify-center items-center m-10">
            <UserPage 
            key={user.id} 
            name={user.name} 
            username={user.username} 
            email={user.email} 
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company} 
            />
        </div>
    )
}
