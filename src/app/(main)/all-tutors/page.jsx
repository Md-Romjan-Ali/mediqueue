import SearchPage from '@/component/SearchTutor';
import { tutors } from '@/component/tutorsData';
import React from 'react';

const AlltutorPage = async () => {
    const tutorsData = await tutors();
    return (
        <div>
            <SearchPage tutorsData={tutorsData}></SearchPage>
        </div>
    );
};

export default AlltutorPage;