"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddTutorForm() {
    const router = useRouter()
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const [data, setData] = useState({
        tutorName: "",
        photo: "",
        subject: "",
        availableDays: "",
        timeSlot: "",
        hourlyFee: "",
        totalSlot: "",
        startDate: "",
        teachingMode: "",
        experience: "",
    });
    const { data: session } = authClient.useSession()
    const userId = session?.user?.id


    const handleChange = async (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data: token } = await authClient.token()
        console.log(token?.token, 'from add post');
        const res = await fetch(`http://localhost:5000/tutors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token?.token}`
            },
            body: JSON.stringify({
                ...data,
                userId
            })
        })
        const req = await res.json()
        console.log(req);
        toast.success('Add tutor Succefully')
        router.push('/my-tutor')
    };

    return (
        <section className="bg-[#07111F] px-4 py-12 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">

                <h2 className="mb-8 text-3xl font-bold text-white">
                    Add Tutor (Step {step}/3)
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="space-y-5">

                            <input
                                name="tutorName"
                                type="text"
                                required

                                onChange={handleChange}
                                placeholder="Tutor Name"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <input
                                name="photo"
                                type="url"
                                required
                                onChange={handleChange}
                                placeholder="Photo URL (imgbb link)"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <select
                                name="subject"
                                required
                                onChange={handleChange}
                                className="select select-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            >
                                <option value="">Select Subject</option>
                                <option value={'mathematics'}>Mathematics</option>
                                <option value={'Physics'}>Physics</option>
                                <option value={'Chemistry'}>Chemistry</option>
                                <option value={'Biology'}>Biology</option>
                                <option value={'English'}>English</option>
                            </select>

                            <button
                                type="button"
                                onClick={nextStep}
                                className="btn w-full bg-cyan-400 text-black hover:bg-cyan-300"
                            >
                                Continue
                            </button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="space-y-5">

                            <input
                                name="availableDays"
                                type="text"
                                required
                                onChange={handleChange}
                                placeholder="Available Days (Sun - Thu)"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <input
                                name="timeSlot"
                                type="text"
                                required
                                onChange={handleChange}
                                placeholder="Time Slot (5:00 PM - 8:00 PM)"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <input
                                name="hourlyFee"
                                type="number"
                                required
                                onChange={handleChange}
                                placeholder="Hourly Fee"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn flex-1"
                                >
                                    Back
                                </button>

                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn flex-1 bg-cyan-400 text-black hover:bg-cyan-300"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="space-y-5">

                            <input
                                name="totalSlot"
                                type="number"
                                required
                                onChange={handleChange}
                                placeholder="Total Slot"
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <input
                                name="startDate"
                                type="date"
                                required
                                onChange={handleChange}
                                className="input input-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <select
                                name="teachingMode"
                                required
                                onChange={handleChange}
                                className="select select-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            >
                                <option value="">Select Mode</option>
                                <option value={"Onlie"}>Online</option>
                                <option value={"Offline"}>Offline</option>
                                <option value={"Both"}>Both</option>
                            </select>

                            <textarea
                                name="experience"
                                required
                                onChange={handleChange}
                                placeholder="Institution & Experience"
                                rows={4}
                                className="textarea textarea-bordered w-full bg-[#0B1730] text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                            />

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn flex-1"
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    className="btn flex-1 bg-cyan-400 text-black hover:bg-cyan-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}

                </form>
            </div>
        </section>
    );
}