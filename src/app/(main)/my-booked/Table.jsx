"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    FaPhone,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";

const BookingTable = ({ bookings }) => {

    const router = useRouter()

    const update = {
        status: 'Cancelled'
    }
    const cancellHandle = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancell it!"
        }).then(async (result) => {

            if (result.isConfirmed) {
                const res = await fetch(`http://localhost:5000/bookingtutor/${id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(update)
                })
                const req = await res.json()
                if (req.modifyCount > 0) {
                    Swal.fire({
                        title: "Cancelled!",
                        text: "Your file has been Cancelled.",
                        icon: "success"
                    });
                    router.refresh()
                }
            }
        });
    }
    const deleteHandle = async (id) => {
        const res = await fetch(`http://localhost:5000/bookingtutor/${id}`, {
            method: "DELETE"
        })
        const req = await res.json()
        router.refresh()
        toast.success('Delete Succefull!')
    }

    return (
        <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>Sl.</th>
                        <th>Tutor Info</th>
                        <th>Student Info</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings?.map((booking, index) => (

                        <tr key={booking?._id}>
                            <th>{index + 1}</th>
                            {/* Student Info */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <Image
                                                src={booking?.image}
                                                alt={booking?.studentName}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="font-bold">

                                            {booking?.tutorName}
                                        </div>
                                        <div className="text-sm opacity-70">
                                            {booking?.subject}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            {/* Tutor Info */}
                            <td>
                                <div className="font-medium">

                                    {booking?.studentName}
                                </div>
                            </td>

                            {/* Phone */}
                            <td>
                                <div className="flex items-center gap-2">
                                    <FaPhone className="text-info" />
                                    {booking?.phone}
                                </div>
                            </td>

                            {/* Date */}
                            <td>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-warning" />
                                    {booking?.curentDate}
                                </div>
                            </td>

                            {/* Slot */}
                            <td>
                                <div className="badge badge-secondary">
                                    {booking?.slot} Slots
                                </div>
                            </td>

                            {/* Status */}
                            <td>
                                {booking?.status === "confirm" ? (
                                    <div className="badge badge-success gap-2">
                                        <FaCheckCircle />
                                        Confirm
                                    </div>
                                ) : (
                                    <div className="badge badge-error gap-2">
                                        <FaTimesCircle />
                                        Cancel
                                    </div>
                                )}
                            </td>

                            {/* Action */}
                            <td className="flex justify-center">
                                {booking?.status === "confirm" ? (
                                    <button onClick={() => cancellHandle(booking._id)} className="">
                                        Cancell
                                    </button>
                                ) : (
                                    <button onClick={() => deleteHandle(booking?._id)} className="text-lg flex items-center gap-1 btn btn-error btn-outline">
                                        <FaTrash />
                                        Delete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;