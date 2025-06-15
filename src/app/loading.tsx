import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Loading() {
    console.log("loading");

    return (
        <div className="flex flex-col justify-start items-center gap-2 h-screen">
            <p className="mt-6 text-gray-500 text-center text-sm font-medium p-3">
                Загрузка...
            </p>
            {[...Array(3)].map((_, index) => (
                <Card key={index} className="w-full max-w-sm animate-pulse bg-slate-100">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            <div className="h-8 w-48 bg-slate-300 rounded" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-1 mb-2">
                            <li><div className="h-4 w-1/2 bg-slate-300 rounded" /></li>
                            <li><div className="h-4 w-1/4 bg-slate-300 rounded" /></li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="h-10 w-full bg-slate-300 rounded" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
