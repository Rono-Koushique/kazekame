import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "@/components/icon";

type Props = {
    label: string;
    href: string;
    isActive?: boolean;
};

export default function SideNavlink({ label, href, isActive = false }: Props) {
    return (
        <li className="p-2 transition-all duration-150 ease-in-out group">
            <Link
                href={href}
                className={cn("h-full flex items-center justify-between")}
            >
                <p className="text-neutral-200 group-hover:text-purple-500 transition-all duration-150 ease-in-out">
                    {label}
                </p>
                <p>
                    <ChevronRight className="text-white text-2xl group-hover:text-purple-500 transition-all duration-150 ease-in-out" />
                </p>
            </Link>
        </li>
    );
}
