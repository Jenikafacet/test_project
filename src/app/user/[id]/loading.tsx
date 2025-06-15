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
        <div className="flex flex-col justify-start items-center h-screen m-10">
            <p className="mt-6 text-gray-500 text-center text-sm font-medium p-5">
                Загрузка...
            </p>
            <Card className="w-full max-w-sm animate-pulse bg-slate-100">
                <CardHeader className="flex justify-center text-2xl">
                    <CardTitle><div className="h-8 w-48 bg-slate-300 rounded" /></CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="flex flex-col gap-2 p-5 bg-slate-100">
                        <li><div className="h-4 w-3/4 bg-slate-300 rounded" /></li>
                        <li><div className="h-4 w-1/2 bg-slate-300 rounded" /></li>
                        <li><div className="h-4 w-2/3 bg-slate-300 rounded" /></li>
                        <li><div className="h-4 w-1/3 bg-slate-300 rounded" /></li>
                        <li><div className="h-4 w-1/2 bg-slate-300 rounded" /></li>
                        <li><div className="h-4 w-1/4 bg-slate-300 rounded" /></li>
                    </ul>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <div className="h-10 w-full bg-slate-300 rounded" />
                </CardFooter>
            </Card>
        </div>
    );
}
