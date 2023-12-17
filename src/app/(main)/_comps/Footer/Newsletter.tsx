import React from "react";
import NewsletterForm from "./NewsletterForm";

type Props = {};

export default function Newsletter({}: Props) {
    return (
        <div className="py-12 bg-purple-700">
            <div className="container">
                <div className="w-full flex flex-col lg:flex-row items-center gap-4 md:gap-6">
                    <h1 className="text-2xl leading-normal md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal text-white text-center lg:text-left font-semibold lg:w-1/2">
                        Subscribe for everyday job newsletter.
                    </h1>
                    <NewsletterForm />
                </div>
            </div>
        </div>
    );
}
