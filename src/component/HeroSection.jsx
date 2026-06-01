"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
    const slides = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
            title: "Book Tutors Anytime",
            description:
                "Find skilled tutors and schedule learning sessions easily with MediQueue.",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
            title: "Smart Online Learning",
            description:
                "Connect students and tutors through a modern booking platform.",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
            title: "Modern Tutor Platform",
            description:
                "Manage bookings, sessions, and learning experiences smoothly.",
        },
    ];

    return (
        <section className="bg-[#07111F] px-4 py-10 pt-20 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="rounded-[32px] relative"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative h-[550px] w-full">

                                {/* Background Image */}
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

                                {/* Content */}
                                <div className="absolute inset-0 flex items-center">
                                    <div className="max-w-2xl px-8 lg:px-16">
                                        <span className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                            MediQueue • Tutor Booking System
                                        </span>

                                        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                                            {slide.title}
                                        </h1>

                                        <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
                                            {slide.description}
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="mt-8 absolute bottom-10 left-5 z-10 flex flex-wrap gap-4">
                        <button className="rounded-2xl bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300">
                            Get Started
                        </button>

                        <button className="rounded-2xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                            Explore Tutors
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}