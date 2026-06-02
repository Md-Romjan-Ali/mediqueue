import React from 'react';
import BookingTable from './Table';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookingtutor`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    });
    const myBookings = await res.json();


    const bookings = myBookings?.filter(
        booking => booking?.tutorId === session?.user?.id
    );

    return (
        <div className="my-20">
            {bookings.length === 0 ? (
                <div className="max-w-2xl mx-auto text-center py-16 px-6">
                    <h2 className="text-4xl font-bold text-gray-200 mb-3">
                        No Bookings Yet
                    </h2>
                    <p className="text-gray-300">
                        You have not received any booking requests yet.
                        Once students book your tutoring sessions,
                        they will appear here.
                    </p>
                </div>
            ) : (
                <BookingTable bookings={bookings} />
            )}
        </div>
    );
};

export default BookingPage;