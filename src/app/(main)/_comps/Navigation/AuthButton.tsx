"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function AuthButton({}: Props) {
    const router = useRouter();

    const goToRegister = () => {
        router.push("/register");
    };

    return (
        <Button size="sm" onClick={goToRegister}>
            Login/Register
        </Button>
    );
}
