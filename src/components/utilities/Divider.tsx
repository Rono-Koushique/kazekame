import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    className?: string;
    accent?: boolean;
};

export default function Divider({ className, accent = false }: Props) {
    return (
        <div className="relative">
            <div
                className={cn("border-b border-neutral-500 w-full", className)}
            />
            {accent && (
                <div
                    className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-b-[3px] border-purple-700 w-[3rem]"
                    )}
                />
            )}
        </div>
    );
}
