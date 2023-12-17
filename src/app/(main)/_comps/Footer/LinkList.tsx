import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import FooterLink from "./FooterLink";

type Props = {
    title: string;
    children?: React.ReactNode | React.ReactNode[];
};

export default function LinkList({ title, children }: Props) {
    return (
        <>
            <Accordion type="multiple" className="md:hidden">
                <AccordionItem value="company" className="border-0">
                    <AccordionTrigger className="px-5 py-5 bg-slate-800 text-neutral-100 text-sm font-semibold hover:no-underline border border-slate-700">
                        {title}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 py-5 bg-slate-800">
                        {children}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="hidden md:block">
                <h1 className="text-neutral-100 text-xl xl:text-2xl font-semibold">
                    {title}
                </h1>
                <div className="mt-5 xl:mt-8 flex flex-col">{children}</div>
            </div>
        </>
    );
}
