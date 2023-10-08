import React from 'react'

export default function ProfileResume() {
    const profileList = [
        { label: "Email", value: "gerardo@gmail.com" },
        { label: "User", value: "Gerardo" },
        { label: "Projects", value: "0" },
        { label: "Created at", value: "2023" },
    ];

    return (
        <>
            <div className='drop-shadow-lg my-1'>
                <h1 className='pl-4 text-3xl font-bold' >Profile Information</h1>
                <ul className='flex p-8 m-4 rounded-lg bg-gray-200 justify-around'>
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
