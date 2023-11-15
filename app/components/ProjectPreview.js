import Link from "next/link";

const ProjectPreview = ({ image, name }) => {
    return (
        <Link href='/' className="w-full h-full">
            <div className="text-3xl w-full h-full hov-txt relative bg-primary dark:bg-secondary group hover:bg-accentred">
                <p className="font-light text-center absolute w-min px-5 h-min m-auto inset-0 bg-secondary dark:bg-primary z-10 group-hover:line-through">{name}</p>
                <img src={image} className="h-4/5 w-4/5 absolute m-auto inset-0 grayscale group-hover:grayscale-0"/>
            </div>
        </Link>
    )
} 

export default ProjectPreview;