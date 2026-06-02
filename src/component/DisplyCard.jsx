"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DeleteTutorModal from "./DeleteTutorModal";
import UpdateTutorModal from "./UpdateTutorModal";

const DisplyCard = ({ tutor }) => {
    const pathname = usePathname();

    const isMyTutorPage = pathname.startsWith("/my-tutor");

    return (
        <div className="
            group
            rounded-3xl
            overflow-hidden
            bg-white
            border border-gray-200
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            hover:shadow-green-200
        ">

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    src={tutor?.photo}
                    alt={tutor?.tutorName}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                    "
                />

                <span className="
                    absolute top-3 right-3
                    bg-green-600
                    text-white
                    text-[14px]
                    font-medium
                    px-3 py-1
                    rounded-full
                    shadow-md
                ">
                    {tutor?.teachingMode}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Name */}
                <h2 className="
                    text-2xl
                    font-bold
                    text-gray-900
                    mb-2
                    group-hover:text-green-700
                    transition-colors
                    tracking-tight
                ">
                    {tutor?.tutorName}
                </h2>

                {/* Subject */}
                <p className="text-lg text-gray-600 hover:bg-amber-200 py-1 px-1  rounded-xl font-semibold">
                    <span className="font-semibold text-gray-800 capitalize">
                        {tutor?.subject}
                    </span>
                </p>
                {/* Experience */}
                <div className="mt-4">
                    <p className="text-xl font-medium text-gray-400 mb-1">
                        Experience
                    </p>

                    <p title={`${tutor?.experience}`} className="text-sm text-gray-700  leading-relaxed line-clamp-2">
                        {tutor?.experience}
                    </p>
                </div>

                <Link className="
                        mt-5
                        flex
                        justify-center
                        w-full
                        py-2.5
                        rounded-xl
                        bg-green-600
                        text-white
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-green-700
                        hover:shadow-lg
                        active:scale-95
                    " href={`/all-tutors/${tutor?._id}`}>
                    View Details
                </Link>

                {/* My Tutor actions */}
                {isMyTutorPage && (
                    <div className="flex mt-3 gap-2 w-full">
                        <div className="w-[48%]">
                            <UpdateTutorModal tutor={tutor} />
                        </div>

                        <div className="w-[48%]">
                            <DeleteTutorModal tutor={tutor} />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DisplyCard;