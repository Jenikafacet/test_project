'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="fade-animation flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-xl  text-red-800 font-bold mb-4">Error loading page</h1>
            <p className="mb-4 text-gray-600">{error.message}</p>
            <Button type="button" className="cursor-pointer" onClick={() => reset()}>
                Reset
            </Button>
        </div>
    );
}
