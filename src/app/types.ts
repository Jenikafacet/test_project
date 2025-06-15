export interface Params {
    params: Promise<{
        id: string;
    }>;
}

export interface UserData { 
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export type UserCardProps = Pick<UserData, "id" | "name" | "email" | "company">;

export type UserPageProps = Omit<UserData, "id">;
