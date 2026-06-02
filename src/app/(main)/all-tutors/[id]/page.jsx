import BookingModal from '@/component/BookingModal';
import Image from 'next/image';
import {
    FaCalendarAlt,
    FaClock,
    FaDollarSign,
    FaLayerGroup,
    FaCalendarCheck,
    FaChalkboardTeacher
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
        cache: "no-store"
    });

    const tutor = await res.json();
    return (
        <div className="flex justify-center my-10 md:my-16 lg:my-20 px-4 sm:px-6 md:px-10 lg:px-20">

            <div className="
                w-full
                max-w-5xl
                bg-white
                border border-gray-100
                rounded-3xl
                shadow-lg
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-emerald-100

                flex flex-col md:flex-row
            ">

                {/* IMAGE SECTION */}
                <div className="
                    relative
                    w-full
                    md:w-[320px]
                    lg:w-[380px]
                    h-64 sm:h-72 md:h-auto
                    min-h-[250px]
                    flex-shrink-0
                ">
                    <Image
                        src={tutor?.photo}
                        alt={tutor?.tutorName}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                        priority
                    />

                    {/* Subject Badge */}
                    <div className="absolute bottom-4 left-4">
                        <span className="
                            flex items-center gap-1.5
                            bg-black/30 backdrop-blur-md
                            text-white
                            text-xs sm:text-sm
                            font-semibold
                            px-3 py-1.5
                            rounded-full
                        ">
                            <HiAcademicCap size={13} />
                            {tutor?.subject}
                        </span>
                    </div>

                    {/* Teaching Mode */}
                    <span className="
                        absolute top-4 right-4
                        bg-emerald-600
                        text-white
                        text-xs sm:text-sm
                        font-bold
                        px-3 py-1.5
                        rounded-full
                        shadow-md
                        flex items-center gap-1
                    ">
                        <FaChalkboardTeacher size={11} />
                        {tutor?.teachingMode}
                    </span>
                </div>

                {/* CONTENT SECTION */}
                <div className="
                    flex-1
                    p-4 sm:p-5 md:p-6 lg:p-8
                    flex flex-col
                    gap-3 sm:gap-4
                ">

                    {/* NAME */}
                    <div>
                        <h2 className="
                            text-xl sm:text-2xl md:text-3xl
                            font-extrabold
                            text-gray-900
                            leading-tight
                        ">
                            {tutor?.tutorName}
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                            Professional Tutor
                        </p>
                    </div>

                    {/* INFO BOXES */}
                    <div className="space-y-2 text-sm">

                        <InfoRow icon={<FaCalendarAlt className="text-amber-500" />} label="Available Days" value={tutor?.availableDays} bg="amber" />
                        <InfoRow icon={<FaClock className="text-sky-500" />} label="Time Slot" value={tutor?.timeSlot} bg="sky" />
                        <InfoRow icon={<FaDollarSign className="text-emerald-500" />} label="Hourly Fee" value={`$${tutor?.hourlyFee}`} strong />
                        <InfoRow icon={<FaLayerGroup className="text-violet-500" />} label="Total Slot" value={tutor?.totalSlot} bg="violet" />
                        <InfoRow icon={<FaCalendarCheck className="text-pink-500" />} label="Start Date" value={tutor?.startDate} bg="pink" />

                    </div>

                    {/* EXPERIENCE */}
                    <div className="bg-gray-50 border-l-4 border-emerald-400 rounded-r-xl px-4 py-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Experience
                        </p>

                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {tutor?.experience}
                        </p>
                    </div>

                    {/* BOOKING */}
                    <div className="mt-auto">
                        <BookingModal tutor={tutor} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;

/* Reusable Row Component */
function InfoRow({ icon, label, value, strong, bg = "gray" }) {

    const bgMap = {
        amber: "bg-amber-50 hover:bg-amber-100",
        sky: "bg-sky-50 hover:bg-sky-100",
        emerald: "bg-emerald-50 hover:bg-emerald-100",
        violet: "bg-violet-50 hover:bg-violet-100",
        pink: "bg-pink-50 hover:bg-pink-100",
        gray: "bg-gray-50 hover:bg-gray-100",
    };

    return (
        <div className={`
            flex items-center justify-between
            px-3 py-2
            rounded-xl
            transition-colors
            ${bgMap[bg]}
        `}>
            <span className="flex items-center gap-2 text-gray-500 font-medium text-xs sm:text-sm">
                {icon}
                {label}
            </span>

            <span className={`
                text-xs sm:text-sm
                ${strong ? "font-extrabold text-emerald-600" : "font-semibold text-gray-800"}
            `}>
                {value}
            </span>
        </div>
    );
}