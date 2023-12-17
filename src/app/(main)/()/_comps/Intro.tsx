import { Button } from "@/components/ui/button";
import { PlayArrow } from "@/components/icon";
import React from "react";

type Props = {};

export default function Intro({}: Props) {
    return (
        <section className="relative z-10 container center -mt-7 md:-mt-[2.25rem]">
            <div className="absolute inset -z-10 center">
                <div className="h-14 md:h-[4.5rem] aspect-square rounded-full border border-neutral-400 animate-pulse-ring" />
            </div>
            <Button className="rounded-full h-14 md:h-[4.5rem] aspect-square md:aspect-square">
                <PlayArrow className="text-3xl" />
            </Button>
        </section>
    );
}
