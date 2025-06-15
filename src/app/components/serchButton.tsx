"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SearchButton() {
    const formStatus = useFormStatus();

    return (
        <Button type="submit" variant="outline">{formStatus.pending ? "Searching..." : "Search"}
        </Button>
    )
}
