import React from 'react';
import { ResumeResponse } from '@/interfaces/dashboard';

interface Props {
    profileInstance: ResumeResponse;
}

//Profile Resume or Description with basic info about the current account.
export const ProfileResume: React.FC<Props> = ({profileInstance}) => {
    const profileObject = profileInstance
    const profileList = [
        { label: "Email", value: profileObject.email },
        { label: "User", value: profileObject.username },
        { label: "Age", value: profileObject.age },
        { label: "Created at", value: profileObject.createdAt },
    ];

    return (
        <>
            <div className='drop-shadow-lg mb-5'>
                <h1 className='pl-4 text-3xl font-bold' >Profile Information</h1>
                <ul className='flex p-8 m-4 rounded-lg bg-gray-200 justify-around text-slate-900'>
                    {profileList.map((v, key) => {
                        return <li key={key} className='flex flex-col'>
                            <label className='text-lg mx-auto font-bold'>{v.label}</label>
                            <span className='text-lg mx-auto'>{v.value}</span>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
