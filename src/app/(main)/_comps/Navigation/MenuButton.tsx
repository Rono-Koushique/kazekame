"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarContext";

type Props = {
    className?: string;
};

export default function MenuButton({ className = "h-3" }: Props) {
    const { isOpen, setOpen } = useSidebar();

    return (
        <Button size="sm" onClick={() => setOpen(!isOpen)}>
            <div
                className={cn(
                    "aspect-square relative overflow-hidden",
                    className
                )}
            >
                <Bar
                    className={cn(
                        "top-0",
                        isOpen &&
                            "top-1/2 -translate-y-1/2 origin-center rotate-45 scale-[118%] delay-150"
                    )}
                />
                <Bar
                    className={cn(
                        "top-1/2 -translate-y-1/2",
                        isOpen && "-translate-x-full"
                    )}
                />
                <Bar
                    className={cn(
                        "bottom-0",
                        isOpen &&
                            "bottom-1/2 translate-y-1/2 origin-center -rotate-45 scale-[118%] delay-150"
                    )}
                />
            </div>
        </Button>
    );
}

type BarProps = {
    className?: string;
};

function Bar({ className }: BarProps) {
    return (
        <div
            className={cn(
                "w-full h-[2px] rounded-full bg-white absolute left-0 transition-all duration-150 ease-in-out",
                className
            )}
        />
    );
}
