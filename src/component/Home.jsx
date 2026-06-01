import React from "react";
import { tutors } from "./tutorsData";
import DisplyCard from "./DisplyCard";
import Link from "next/link";

const HomePage = async () => {
    const tutorData = await tutors(4);

    return (
        <section className=" bg-gray-800 ">
            <div className="max-w-7xl mx-auto px-4 py-14">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-300">
                        Available <span className="text-cyan-400">MediQueue</span> Tutors
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                        Discover experienced tutors ready to help you learn and grow.
                        Browse top-quality teaching profiles from our platform.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {tutorData?.map((tutor) => (
                        <DisplyCard
                            key={tutor?._id}
                            tutor={tutor}
                        />
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-12">
                    <Link href={'/all-tutors'}>
                        <button
                            className="
            px-8 py-3
            rounded-xl
            bg-green-600
            text-white
            font-semibold
            shadow-md
            transition-all
            duration-300
            hover:bg-green-700
            hover:shadow-xl
            hover:-translate-y-1
            active:scale-95
          "
                        >
                            View All Tutors
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePage;