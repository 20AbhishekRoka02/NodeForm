"use client";

import { useState } from "react";
import { JSX } from "react";
import { ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const items = [
    {
        title: "About Us",
        content: "We are passionate about design and timeless furniture.",
    },
    {
        title: "Products",
        content: "Explore sofas, tables, rugs, and more.",
    },
    {
        title: "Designers",
        content: "Collaborations with top Nordic designers.",
    },
    {
        title: "Showroom",
        content: "Visit our showroom to experience our collection.",
    },
];

export default function Footer(): JSX.Element {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <footer className=" text-[#4b2e1e] ">

            {/* TOP SECTION */}
            <div className="px-6 md:px-10 lg:px-20 py-16 flex flex-col md:flex-row flex-wrap justify-between gap-12">

                {/* LEFT */}
                <div className="flex-1 space-y-6">

                    {/* LOGO */}
                    <h1 className="text-5xl md:text-9xl font-bold">
                        Nordform
                    </h1>

                    {/* SOCIALS */}
                    <div className="flex gap-6 text-2xl">
                        <FaFacebook className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaPinterest className="cursor-pointer" />
                    </div>

                    {/* TEXT */}
                    <p className="text-sm md:text-base text-[#5c4033] max-w-md">
                        Stay updated with the latest trends and exclusive offers from
                        Nordform. Follow our newsletter
                    </p>

                    {/* INPUT */}
                    <div className="flex max-w-md border border-[#d6d0c4]">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="flex-1 px-4 py-3 outline-none bg-transparent"
                        />
                        <button className="bg-[#4b2e1e] text-2xl text-white px-6">
                            <ChevronRight />
                        </button>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex-1 flex flex-col justify-center">

                    {items.map((item, index) => (
                        <div key={item.title} className="border-b border-[#d6d0c4]">

                            {/* HEADER */}
                            <div
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center py-6 cursor-pointer group"
                            >
                                <span className="text-2xl font-semibold">
                                    {item.title}
                                </span>

                                <ChevronRight
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""
                                        }`}
                                />
                            </div>

                            {/* CONTENT */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-lg text-gray-600">
                                    {item.content}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="bg-[#4b2e1e] text-white px-6 md:px-10 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                <p>© 2026 Nordform. All rights reserved. Built by{" "}
                    <a
                        href="https://www.linkedin.com/in/abhishek-roka-bbb2b3232/"
                        target="_blank"
                        className="font-medium hover:underline"
                    >
                        Abhishek Roka
                    </a></p>

                <div className="flex gap-6 flex-wrap justify-center">
                    <span className="cursor-pointer">FAQ</span>
                    <span className="cursor-pointer">Shipping & Returns</span>
                    <span className="cursor-pointer">Warranty Information</span>
                    <span className="cursor-pointer">Terms & Conditions</span>
                    <span className="cursor-pointer">Privacy Policy</span>
                </div>

            </div>

        </footer>
    );
}