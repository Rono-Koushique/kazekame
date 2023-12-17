import React from "react";

type Props = {};

export default function Copyright({}: Props) {
    return (
        <div className="py-6">
            <div className="container flex flex-col">
                <p className="text-sm text-center text-white">
                    © 2024 Bytestack. Made with{" "}
                    <span className="text-purple-700">♥</span> by{" "}
                    <span className="text-purple-700">RonoKoushique</span>
                </p>
            </div>
        </div>
    );
}
