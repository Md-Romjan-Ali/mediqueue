import React from "react";
import {
    FaSearch,
    FaCalendarCheck,
    FaVideo,
    FaTrophy,
} from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="text-4xl text-green-500" />,
            title: "Find a Tutor",
            description:
                "Browse through hundreds of qualified tutors and choose the one that matches your learning goals.",
        },
        {
            icon: <FaCalendarCheck className="text-4xl text-green-500" />,
            title: "Book a Session",
            description:
                "Select a convenient time and schedule your tutoring session in just a few clicks.",
        },
        {
            icon: <FaVideo className="text-4xl text-green-500" />,
            title: "Start Learning",
            description:
                "Join your lesson and receive personalized guidance tailored to your needs.",
        },
        {
            icon: <FaTrophy className="text-4xl text-green-500" />,
            title: "Achieve Success",
            description:
                "Improve your skills, boost confidence, and reach your academic goals faster.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold">
                    How <span className="text-green-500">It Works</span>
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-gray-400">
                    Getting started is simple. Follow these four easy steps to connect
                    with expert tutors and accelerate your learning journey.
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps?.map((step, index) => (
                    <div
                        key={index}
                        className="card shadow-2xl hover:shadow-cyan-500 bg-base-200 border border-base-300 hover:border-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="card-body">
                            <div className="mb-4">{step.icon}</div>

                            <div className="badge badge-outline">
                                Step {index + 1}
                            </div>

                            <h3 className="card-title mt-2">{step.title}</h3>

                            <p className="text-gray-500">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;