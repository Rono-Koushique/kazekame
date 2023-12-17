import Image from "next/image";
import React from "react";
import BannerBackground from "@/assets/image/bg/banner.jpg";
import BannerAccent1 from "@/assets/accents/home-1.png";
import BannerAccent2 from "@/assets/accents/home-2.png";
import BannerAccent3 from "@/assets/accents/home-3.png";
import BannerAccent4 from "@/assets/accents/home-4.png";
import SearchWidget from "./SearchWidget";

type Props = {};

export default function Banner({}: Props) {
    return (
        <section className="w-full relative pt-28 pb-24 sm:py-0 sm:h-[600px] md:h-[600px] lg:h-[700px] xl:h-[860px] center">
            <Background />
            <div className="w-full flex flex-col">
                <div className="container">
                    <div className="py-5">
                        <h1 className="text-neutral-50 text-center font-semibold md:font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug transition-all duration-150 ease-in-out">
                            <span className="text-purple-500">2,500</span> job
                            available
                            <br />
                            for students, expats & refugees
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-neutral-200 text-center leading-relaxed md:leading-relaxed">
                            At Admerk, we offer you a fresh start or a career
                            boost with our job offerings.
                        </p>
                    </div>
                    <div className="mt-2 xl:mt-4">
                        <SearchWidget />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Background() {
    return (
        <div className="absolute inset-0 -z-20 overflow-hidden">
            <div
                className="hidden xl:block absolute top-0 right-0 z-10 h-52 aspect-[3/5] animate-sway-x"
                style={{
                    animationDuration: "15s",
                }}
            >
                <Image
                    src={BannerAccent1}
                    fill={true}
                    className="object-contain z-10"
                    sizes="10vw"
                    alt="banner-accent-1"
                />
            </div>
            <div
                className="hidden xl:block absolute -top-16 -right-8 z-10 h-52 aspect-[3.6/3] animate-sway-x"
                style={{
                    animationDuration: "10s",
                }}
            >
                <Image
                    src={BannerAccent2}
                    fill={true}
                    className="object-contain z-10"
                    sizes="10vw"
                    alt="banner-accent-1"
                />
            </div>
            <div className="hidden xl:block absolute bottom-12 right-12 z-10 h-24 aspect-[1.1/1] opacity-50">
                <Image
                    src={BannerAccent3}
                    fill={true}
                    className="object-contain z-10"
                    sizes="10vw"
                    alt="banner-accent-1"
                />
            </div>
            <div
                className="hidden xl:block absolute bottom-16 left-0 z-10 h-64 aspect-[1/1.7] animate-sway-y"
                style={{
                    animationDuration: "4s",
                }}
            >
                <Image
                    src={BannerAccent4}
                    fill={true}
                    className="object-contain z-10"
                    sizes="10vw"
                    alt="banner-accent-1"
                />
            </div>
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
