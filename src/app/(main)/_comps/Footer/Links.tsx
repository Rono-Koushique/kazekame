import React from "react";
import SocialLink from "./SocialLink";
import { Facebook, Whatsapp, X } from "@/components/icon";
import LinkList from "./LinkList";
import FooterLink from "./FooterLink";

type Props = {};

export default function Links({}: Props) {
    return (
        <section className="pt-20 pb-12 xl:pt-32 xl:pb-24">
            <div className="container flex flex-col lg:flex-row gap-7 md:gap-8 xl:gap-28">
                <div className="lg:max-w-[14rem]">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-2xl text-center text-white font-bold">
                            Kazekame
                        </h1>
                        <p className="mt-4 xl:mt-10 text-sm xl:text-base text-neutral-300 text-center md:text-left leading-normal md:leading-loose xl:leading-loose max-w-sm">
                            Land your dream job with the platform that fuels
                            successful businesses
                        </p>
                        <div className="mt-6 xl:mt-8 flex justify-between gap-3">
                            <SocialLink Icon={Facebook} />
                            <SocialLink Icon={Whatsapp} />
                            <SocialLink Icon={X} />
                        </div>
                    </div>
                </div>
                <div className="lg:grow grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-8 xl:gap-24">
                    <div className="col-span-1">
                        <LinkList title="Company">
                            <FooterLink label="About Us" />
                            <FooterLink label="Why Extobot" />
                            <FooterLink label="Contact With Us" />
                            <FooterLink label="Our Partners" />
                        </LinkList>
                    </div>
                    <div className="col-span-1">
                        <LinkList title="Resources">
                            <FooterLink label="Quick Links" />
                            <FooterLink label="Job Packages" />
                            <FooterLink label="Post New Job" />
                            <FooterLink label="Job Listing" />
                        </LinkList>
                    </div>
                    <div className="col-span-1">
                        <LinkList title="Legal">
                            <FooterLink label="Affiliate" />
                            <FooterLink label="Blog" />
                            <FooterLink label="Help & Support" />
                            <FooterLink label="Careers" />
                        </LinkList>
                    </div>
                    <div className="col-span-1">
                        <LinkList title="Products">
                            <FooterLink label="Start a Trial" />
                            <FooterLink label="How It Works" />
                            <FooterLink label="Features" />
                            <FooterLink label="Price & Planing" />
                        </LinkList>
                    </div>
                </div>
            </div>
        </section>
    );
}
