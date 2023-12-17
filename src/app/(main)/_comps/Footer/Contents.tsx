import React from "react";
import Links from "./Links";
import Copyright from "./Copyright";
import Divider from "@/components/utilities/Divider";

type Props = {};

export default function Contents({}: Props) {
    return (
        <div className="bg-slate-900">
            <Links />
            <div className="container md:mt-4">
                <Divider className="border-slate-800" />
            </div>
            <Copyright />
        </div>
    );
}
