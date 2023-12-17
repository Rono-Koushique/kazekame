import Image from "next/image";
import React from "react";
import BannerBackground from "@/assets/image/bg/banner.jpg";
import Breadcrumbs from "@/app/(main)/_comps/PageHeader/Breadcrumbs";

type Props = {
    title: string;
    paths: { label: string; href?: string }[];
};

export default function index({ title, paths }: Props) {
    return (
        <section className="pt-[4.5rem] md:pt-20 xl:pt-[5.5rem] relative overflow-hidden">
            <Background />
            <div className="py-20 xl:py-28">
                <div className="container">
                    <div className="w-full flex flex-col">
                        <h1 className="text-center text-3xl md:text-4xl xl:text-[2.5rem] text-white font-semibold">
                            {title}
                        </h1>
                        <div className="center mt-5">
                            <Breadcrumbs paths={paths} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Background() {
    return (
        <div className="absolute inset-0 -z-20">
            <Image
                src={BannerBackground}
                fill={true}
                className="object-cover blur-[2px] scale-110"
                sizes="100vw"
                alt="banner-bg"
            />
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
}
