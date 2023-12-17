import React from "react";
import sitemap from "./sitemap";
import AuthButton from "./AuthButton";
import MenuButton from "./MenuButton";
import TopNavlink from "./TopNavlink";
import BrandLogo from "./BrandLogo";

type Props = {};

export default function Topbar({}: Props) {
    return (
        <header className="absolute top-0 left-0 w-full z-10 border-b border-neutral-700">
            <div className="container h-[4.5rem] md:h-20 xl:h-[5.5rem]">
                <div className="inset-0 h-full flex justify-between">
                    <BrandLogo />
                    <div className="hidden lg:block">
                        <ul className="h-full flex">
                            {sitemap.map((route, idx) => {
                                return (
                                    <TopNavlink
                                        label={route.label}
                                        href={`/${route.href}`}
                                        key={"top-navlink-" + idx}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <AuthButton />
                        <div className="block lg:hidden">
                            <MenuButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
