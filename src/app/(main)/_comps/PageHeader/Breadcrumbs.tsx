"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
    paths: { label: string; href?: string }[];
    className?: string;
};

export default function Breadcrumbs({ paths, className }: Props) {
    const router = useRouter();

    const goToPath = (href: string) => {
        router.push(href);
    };

    return (
        <div className={cn("flex items-center w-fit", className)}>
            {paths &&
                paths.map((path, idx) => {
                    return (
                        <div key={"bread-crumb-" + idx}>
                            <p className="text-white text-xs xl:text-sm capitalize">
                                {!!idx && <span className="px-2">{"//"}</span>}
                                <span
                                    className={cn(
                                        "cursor-pointer hover:text-purple-600 transition-all duration-500 ease-in-out",
                                        idx === paths.length - 1 &&
                                            "text-purple-600"
                                    )}
                                    onClick={() => {
                                        if (path.href) goToPath(path.href);
                                    }}
                                >
                                    {path.label}
                                </span>
                            </p>
                        </div>
                    );
                })}
        </div>
    );
}
