"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookingModal = ({ tutor }) => {
    const router = useRouter()
    const today = new Date();

    const curentDate = today.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }).replace(/ /g, "-");

    const { data: session } = authClient.useSession()


    const bookingHandle = async (e) => {
        e.preventDefault()
        const { data: token } = await authClient.token()
        console.log(token.token, 'token from booking');
        if (!session) {
            router.push("/login")
            return;
        }
        const formData = new FormData(e.target)
        const submit = Object.fromEntries(formData.entries('dialog'))

        const data = {
            ...submit,
            curentDate,
            status: 'confirm',
            slot: tutor?.totalSlot,
            image: tutor?.photo
        }

        const res = await fetch(`http://localhost:5000/bookingtutor`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token?.token}`
            },
            body: JSON.stringify(data)
        })
        const req = await res.json()
        console.log(req);
        toast.success("booking Succesfull")

    }
    return (
        <div>
            {/* Open Modal Button */}
            <button
                className="btn btn-primary btn-outline w-full mt-3"
                onClick={() => document.getElementById("book_modal").showModal()}
            >
                Book Tutor
            </button>

            {/* Modal */}
            <dialog id="book_modal" className="modal">
                <div className="modal-box max-w-2xl rounded-2xl">

                    {/* Header */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Book This Tutor
                    </h3>

                    {/* Form */}
                    <form onSubmit={bookingHandle} className="space-y-5">

                        {/* Student Name */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Student Name
                                </span>
                            </label>

                            <input
                                type="text"
                                name="studentName"
                                placeholder="Enter Student name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Phone
                                </span>
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Tutor ID */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Tutor ID
                                </span>
                            </label>

                            <input
                                type="text"
                                name="tutorId"
                                value={session?.user?.id}
                                readOnly
                                className="input w-full"
                            />
                        </div>

                        {/* Tutor Name */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Tutor Name
                                </span>
                            </label>

                            <input
                                type="text"
                                name="tutorName"
                                value={tutor.tutorName}
                                readOnly
                                className="input w-full"
                            />
                        </div>

                        {/* Student Email */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Student Email
                                </span>
                            </label>

                            <input
                                type="email"
                                name="studentEmail"
                                // value={user?.email}
                                readOnly
                                value={session?.user?.email}
                                className="input w-full"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="modal-action">

                            <button
                                type="submit"
                                className="btn bg-green-600 text-white hover:bg-green-700"
                            >
                                Confirm Booking
                            </button>

                            <form method="dialog">
                                <button className="btn">
                                    Close
                                </button>
                            </form>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;