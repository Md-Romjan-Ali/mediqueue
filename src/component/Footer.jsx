"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaDiscord,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0A0F1C] text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-14">

                {/* Footer Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Medi<span className="text-cyan-400">Queue</span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            MediQueue is a smart tutor booking platform that helps
                            students connect with expert tutors for personalized
                            learning and online class scheduling.
                        </p>
                    </div>

                    {/* Tutor Services */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Tutor Services
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-400"
                                >
                                    Find Tutors
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-400"
                                >
                                    Book Session
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-400"
                                >
                                    Online Classes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-400"
                                >
                                    Become a Tutor
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact Info
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Email: support@mediqueue.com</li>
                            <li>Phone: +880 1700-000000</li>
                            <li>Sherpur, Mymensingh, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaGithub />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaLinkedinIn />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaDiscord />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} MediQueue – Tutor Booking System.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}