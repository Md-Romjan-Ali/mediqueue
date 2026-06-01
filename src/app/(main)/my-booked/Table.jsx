
import Image from "next/image";
import {
    FaPhone,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const BookingTable = async ({ bookings }) => {



    return (
        <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="table table-zebra">
                <thead>
                    <tr className="bg-base-200">
                        <th>sl No.</th>
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
                                            {booking?.studentEmail}
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
                                    <button className="">
                                        Cancell
                                    </button>
                                ) : (
                                    <button className="text-3xl">
                                        -
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