"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function BrandLogo({}: Props) {
    const router = useRouter();

    return (
        <div className="center">
            <h1
                className="text-xl text-white font-bold cursor-pointer"
                onClick={() => router.push("/")}
            >
                Kazekame
            </h1>
        </div>
    );
}
