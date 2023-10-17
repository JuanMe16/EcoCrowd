import React from 'react';

//Project Stats for a selected project.
export default function UserProjectsStats() {
    const project = {
        id: 1, title: "Project Template",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla reiciendis laborum animi dignissimos similique nesciunt maxime repellat explicabo placeat!",
        created: "2023-10-08",
        investment: 25000000,
        views: 245,
        likes: 20,
        investors: 40,
        money: 8700000
    }

    const fundRatio = (project.money/project.investment) * 100;
    const acceptanceRatio = Math.round((project.likes / project.views) * 100);

    return (
        <>
            <div className='flex flex-col my-1 drop-shadow-lg mx-12'>
                <h1 className='text-3xl pl-4 font-bold'>My Analytics</h1>
                <div className='flex flex-col p-8 m-4 bg-gray-200 rounded-lg text-slate-900'>
                    <h1 className='text-2xl my-1 font-bold'>{project.title}</h1>
                    <div className='my-2'>
                        <span className='font-bold'>Graphs</span>
                        <pre>Fund Progress Bar:</pre>
                        <div className='flex justify-around h-2 rounded-xl bg-gray-300'>
                            <div style={{width: `${fundRatio}%`}} className="bg-green-400"></div>
                            <div style={{width: `${100-fundRatio}%`}} className="bg-red-400"></div>
                        </div>
                        <pre>User interactions</pre>
                        <div className='flex justify-around h-2 rounded-xl bg-gray-300'>
                            <div style={{width: `${fundRatio}%`}} className="bg-teal-400"></div>
                            <div style={{width: `${100-fundRatio}%`}} className="bg-blue-400"></div>
                            <div style={{width: `${100-fundRatio}%`}} className="bg-yellow-400"></div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <span className='font-bold'>Analysis Stats</span>
                        <pre>Acceptance: {acceptanceRatio}%</pre>
                        <pre>Funds/Investment: {fundRatio}%</pre>
                    </div>
                    <div className='my-2'>
                        <span className='font-bold'>Project Stats</span>
                        <pre>Needed investment: ${project.investment}</pre>
                        <pre>Recauded Money: ${project.money}</pre>
                        <pre>Project created at: {project.created}</pre>
                    </div>
                    <div className='my-2'>
                        <span className='font-bold'>User Stats</span>
                        <pre>Likes: {project.likes}</pre>
                        <pre>Views: {project.views}</pre>
                        <pre>Investors: {project.investors}</pre>
                    </div>
                </div>
            </div>
        </>
    )
}
