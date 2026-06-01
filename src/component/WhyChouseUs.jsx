import React from "react";
import {
    FaChalkboardTeacher,
    FaUserGraduate,
    FaBookOpen,
    FaClock,
} from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="text-4xl text-green-500" />,
            title: "Expert Tutors",
            description:
                "Learn from experienced and qualified tutors who are passionate about helping students succeed.",
        },
        {
            icon: <FaUserGraduate className="text-4xl text-green-500" />,
            title: "Personalized Learning",
            description:
                "Get one-on-one guidance tailored to your learning style, goals, and academic needs.",
        },
        {
            icon: <FaBookOpen className="text-4xl text-green-500" />,
            title: "Wide Range of Subjects",
            description:
                "Find tutors for mathematics, science, languages, programming, and many other subjects.",
        },
        {
            icon: <FaClock className="text-4xl text-green-500" />,
            title: "Flexible Scheduling",
            description:
                "Book sessions at times that fit your schedule and learn at your own pace.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Why Choose Our <span className="text-green-500">Tutor Platform?</span>
                </h2>

                <p className="mt-5 max-w-3xl mx-auto text-gray-400 text-lg">
                    Our platform connects students with skilled tutors, making learning
                    more accessible, personalized, and effective. Whether you want to
                    improve grades, master a new skill, or prepare for exams, we have the
                    right tutor for you.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features?.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-base-200 rounded-2xl p-8 border border-base-300 hover:border-green-500 transition-all duration-300"
                    >
                        <div className="mb-5">{feature.icon}</div>

                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;