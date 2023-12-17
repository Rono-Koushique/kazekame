import React from "react";
import Newsletter from "./Newsletter";
import Contents from "./Contents";

type Props = {};

export default function index({}: Props) {
    return (
        <footer>
            <Newsletter />
            <Contents />
        </footer>
    );
}
