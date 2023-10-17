import React from 'react';
import Link from 'next/link';

//Component to show Latest Projects launched on the web app.
export default function LatestProjects() {
    const projectsList = [
        { id: 1, title: "Proyecto Gato", description: "Proyecto creado para alimentar a todos los gatos del mundo con salmon y muchos pecesitos" },
        { id: 2, title: "Salvando Delfines", description: "Pensamos salvar a los delfines rosas de su exterminio en el país colombiano, te unirías a nosotros?" },
        { id: 3, title: "Metodología para el buen uso de los baños", description: "Lorem ipsum" },
    ];

    return (
        <>
            <div className='drop-shadow-lg'>
                <h1 className='pl-4 text-3xl font-bold' >New Projects on EcoCrowd!</h1>
                <ul className='flex p-8 m-4 rounded-lg bg-gray-200 justify-around text-slate-900'>
                    {projectsList.map((v, key) => {
                        return <li className='flex w-1/2 flex-col text-lg mx-4' key={key}>
                            <div className='my-2 bg-teal-900 h-14 rounded-sm' />
                            <h1 className='my-2 font-bold'>{v.title.length > 17 ? v.title.slice(0, 17) + "..." : v.title}</h1>
                            <p className='max-w-sm'>{v.description.length > 60 ? v.description.slice(0, 60) + "..." : v.description}</p>
                            <Link className='mt-auto text-center duration-300 pt-4 text-gray-600 hover:scale-110 hover:text-teal-900 hover:font-bold' href={`/projects/project?id=${v.id}`}>Check project</Link>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
