import React from "react";

type Props = {
    label: string;
    href?: string;
};

export default function FooterLink({ label, href }: Props) {
    return (
        <div className="py-2 md:py-3 text-neutral-300 hover:text-purple-600 cursor-pointer text-xs md:text-sm xl:text-base">
            {label}
        </div>
    );
}
