import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
    label: string;
    href: string;
    isActive?: boolean;
};

export default function TopNavlink({ label, href, isActive = false }: Props) {
    return (
        <li className="mx-2 px-2 xl:mx-3 xl:px-3 transition-all duration-150 ease-in-out group">
            <Link
                href={href}
                className={cn(
                    "text-neutral-200 h-full flex items-center justify-center",
                    "group-hover:text-purple-500"
                )}
            >
                {label}
            </Link>
        </li>
    );
}
