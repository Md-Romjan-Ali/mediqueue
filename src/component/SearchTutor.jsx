"use client"
import DisplyCard from "@/component/DisplyCard";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchPage = ({ tutorsData }) => {
    const [value, setValue] = useState("")
    const [search, setSearch] = useState('')

    const searchByTutor = tutorsData?.filter(data => data.tutorName.toLowerCase().includes(String(value).toLowerCase()))
    const searchBySubject = tutorsData?.filter(data => data.subject.toLowerCase().includes(String(value).toLowerCase()))

    const searchBy = search === 'subject' ? searchBySubject : searchByTutor

    return (
        <section className="max-w-7xl mx-auto py-10">

            {/* Header */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-300">
                    Explore All <span className="text-cyan-400">Tutors</span>
                </h1>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Browse all available tutors and find the perfect teacher for your learning journey.
                </p>
            </div>

            {/* searc field */}
            <form className="flex justify-start my-3">
                <label className="input">
                    <FaSearch />
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        name="search" type="search" required placeholder="Search" />
                </label>
                <select onChange={(e) => setSearch(e.target.value)} className="bg-black" name="subject">
                    <option value="">Search by</option>
                    <option value="tutor">Tutor Name</option>
                    <option value="subject">Subject Name</option>
                </select>

            </form>
            {/* Tutors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {searchBy?.map((tutor) => (
                    <DisplyCard
                        key={tutor._id}
                        tutor={tutor}
                    />
                ))}
            </div>

        </section>
    );
};

export default SearchPage;