"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useSidebar } from "./SidebarContext";
import sitemap from "./sitemap";
import SideNavlink from "./SideNavlink";
import MenuButton from "./MenuButton";

type Props = {};

export default function Sidebar({}: Props) {
    const { isOpen, setOpen } = useSidebar();

    return (
        <div className={cn(!isOpen && "hidden")}>
            <SidebarOverlay />
            <SidebarBody />
        </div>
    );
}

function SidebarOverlay() {
    const { isOpen, setOpen } = useSidebar();
    return (
        <div
            className={cn(
                "fixed inset-0 z-20 bg-black/30 animate-appear",
                !isOpen && "hidden"
            )}
            onClick={() => setOpen((prev) => !prev)}
        />
    );
}

function SidebarBody() {
    const { isOpen, setOpen } = useSidebar();
    return (
        <div
            className={cn(
                "fixed top-0 left-0 z-30 w-full max-w-md h-[100vh] animate-from-left bg-[#222222]",
                !isOpen && "hidden"
            )}
        >
            <div className="w-full h-full overflow-y-auto flex flex-col">
                <div className="h-[4.5rem] md:h-20 xl:h-[5.5rem] px-6 bg-neutral-900 flex items-center justify-between">
                    <div className="center">
                        <h1 className="text-xl text-white font-bold">Kazekame</h1>
                    </div>
                    <MenuButton />
                </div>
                <div className="p-6">
                    <ul className="w-full flex flex-col">
                        {sitemap.map((route, idx) => {
                            return (
                                <SideNavlink
                                    label={route.label}
                                    href={route.href}
                                    key={"side-navlink-" + idx}
                                />
                            );
                        })}
                    </ul>
                </div>
                <div className="px-8">
                    <div className="border-b border-neutral-500 w-full" />
                </div>
                <div className="p-8">
                    <p className="text-white text-lg">Our Office</p>
                    <p className="mt-4 text-sm text-neutral-400 leading-8">
                        712H St NE, Washington, DC 20002
                        <br />
                        (202)796-0445
                        <br />
                        <span className="text-purple-700">
                            admerk@abmerkcorp.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
