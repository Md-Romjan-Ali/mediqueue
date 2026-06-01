import DisplyCard from '@/component/DisplyCard';
import { tutors } from '@/component/tutorsData';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const Mytutor = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session?.user?.id;
    const tutorData = await tutors();

    const mytutors = tutorData?.filter(tutor => tutor.userId === userId
    );

    return (
        <div className='max-w-7xl py-32 mx-auto'>
            <section className="text-center max-w-4xl mx-auto px-4">

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-300">
                    Manage Your <span className="text-cyan-400">Tutors</span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                    Here you can view, manage, and organize all your booked tutors in one place.
                    Track your learning sessions, manage schedules, and stay updated with your
                    ongoing tutoring activities easily.
                </p>

                {/* Small highlight */}
                <div className="mt-6 flex justify-center">
                    <span className="px-4 py-2 rounded-full bg-green-50 text-cyan-400 text-sm font-medium border border-green-100">
                        Learning made simple & organized
                    </span>
                </div>

            </section>
            {mytutors.length === 0 ? (
                <div className='flex flex-col items-center justify-center  text-center'>
                    <h2 className='text-3xl font-bold mb-3'>
                        No Tutors Found
                    </h2>
                    <p className='text-gray-300 max-w-md'>
                        You have not posted any tutor listings yet.
                        Create your first tutor profile to start connecting with students.
                    </p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10'>
                    {mytutors?.map(tutor => (
                        <DisplyCard
                            key={tutor?._id}
                            tutor={tutor}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Mytutor;