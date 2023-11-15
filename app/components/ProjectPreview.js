'use client'

import { useRouter } from "next/navigation";

const ProjectPreview = ({ image, name }) => {
    const router = useRouter();
    const navigate = () => {
        router.push(`/projects/${name}`) 
    }

    return (
        <div 
            onClick={navigate}
            className="text-3xl w-full h-full hov-txt relative bg-primary dark:bg-secondary group hover:bg-accentred"
        >
            <p className="font-light text-center absolute w-min px-5 h-min m-auto inset-0 bg-secondary dark:bg-primary z-10 group-hover:line-through">{name}</p>
            <img src={image} className="h-4/5 w-4/5 absolute m-auto inset-0 grayscale group-hover:grayscale-0"/>
        </div>
    )
} 

export default ProjectPreview;