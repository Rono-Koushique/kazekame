import { Card, CardHeader } from "@/components/ui/card";
import Divider from "@/components/utilities/Divider";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    title: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
};

export default function AuthCard({ title, className, children }: Props) {
    return (
        <Card
            className={cn(
                "px-6 py-7 xs:px-9 xs:py-8 md:px-12 md:py-10 xl:px-16 xl:py-12 max-w-lg",
                className
            )}
        >
            <CardHeader className="p-0 pb-4 text-center text-xl xl:text-3xl font-semibold text-slate-900 leading-none">
                {title}
            </CardHeader>
            <Divider className="border-slate-300" accent />
            {children}
        </Card>
    );
}
