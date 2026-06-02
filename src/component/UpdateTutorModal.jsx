"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateTutorModal = ({ tutor }) => {
    const router = useRouter()

    const updateHandle = async (e) => {
        e.preventDefault()
        const { data: token } = await authClient.token()
        console.log(token, 'from update');
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutor._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token?.token}`
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()

        if (result.modifiedCount > 0) {
            document.getElementById(`update_modal${tutor._id}`).close();
            e.target.reset();
            router.refresh()
        }
    }
    return (
        <div>
            <button
                className="btn btn-accent btn-outline text-lg flex justify-center items-center gap-1"
                onClick={() => document.getElementById(`update_modal${tutor._id}`).showModal()}
            >
                <FaEdit />
                Edit
            </button>

            <dialog id={`update_modal${tutor._id}`} className="modal">
                <div className="modal-box">
                    <h1 className='text-3xl font-semibold text-gray-200 my-3'>Update Tutors </h1>
                    <form onSubmit={updateHandle}>
                        <div className="space-y-5">

                            <input
                                name="tutorName"
                                type="text"
                                required
                                defaultValue={tutor?.tutorName}
                                placeholder="Tutor Name"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <input
                                name="photo"
                                type="url"
                                required
                                defaultValue={tutor?.photo}
                                placeholder="Photo URL (imgbb link)"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <select
                                name="subject"
                                required
                                className="select select-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            >
                                <option value="">Select Subject</option>
                                <option value={'mathematics'}>Mathematics</option>
                                <option value={'Physics'}>Physics</option>
                                <option value={'Chemistry'}>Chemistry</option>
                                <option value={'Biology'}>Biology</option>
                                <option value={'English'}>English</option>
                            </select>
                            <textarea
                                name="experience"
                                required
                                defaultValue={tutor?.experience}
                                placeholder="Institution & Experience"
                                rows={4}
                                className="textarea textarea-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                type="button"
                                className="btn"
                                onClick={() =>
                                    document.getElementById(`update_modal${tutor._id}`).close()
                                }
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateTutorModal;