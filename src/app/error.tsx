'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-xl font-bold mb-4">Ошибка при загрузке страницы</h1>
            <p className="mb-4 text-gray-600">{error.message}</p>
            <Button type="button" className="cursor-pointer" onClick={() => reset()}>
                Перезагрузить
            </Button>
        </div>
    );
}
