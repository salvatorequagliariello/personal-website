import CustomNavigator from "../../../components/CustomNavigator";
import projects from 'app/projectslist.js'

const ProjectPage = ({ params }) => {
    const project = projects.filter(project => project.name == params.project.replace(/%20/g, ' '))[0];

    return (
        <div className="my-10 md:my-0 md:pb-24">
            <CustomNavigator pageName={project.pathName} path='/projects' pathName='projects' />
            <div className="flex flex-col gap-5 animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">
                <h1 className="text-4xl md:text-6xl font-light text-center">{project.name}</h1>
                <div className="w-full py-4 bg-primary dark:bg-secondary">
                    <img src={project.cover} className="w-full h-56 object-contain sm:h-72 md:h-80" />
                </div>
                <div className="w-full h-min flex flex-col gap-3">
                    <div className="w-min mx-auto flex gap-3 justify-center">
                        <a href={project.githubLink} target="_blank" className="flex h-min gap-2 hover:bg-accentred bg-primary dark:bg-secondary p-2 group">
                                <p className="text-secondary dark:text-primary">
                                    GitHub
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-secondary dark:stroke-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                        </a>
                        <a href={project.githubLink} target="_blank" className="flex h-min gap-2 hover:bg-accentred bg-primary dark:bg-secondary p-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-secondary dark:stroke-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <p className="text-secondary dark:text-primary">
                                Website
                            </p>
                        </a>
                    </div>
                    <div className="text-xl">
                        <h3 className="inline">Tech stack: </h3>
                        <p className="font-light inline">{project.tech}</p>
                    </div>
                </div>
                {project.descriptionOne && <p className="text-justify">
                    {project.descriptionOne}
                </p>}
                {project.descriptionTwo && <p className="text-justify">
                    {project.descriptionTwo}
                </p>}
                {project.imageOne &&
                    <div className="w-full py-4 bg-primary dark:bg-secondary">
                        <img src={project.imageOne} className="w-full h-56 object-contain sm:h-72 md:h-80" />
                    </div>
                }
                {project.descriptionThree && <p className="text-justify">
                    {project.descriptionThree}
                </p>}
                {project.descriptionFour && <p className="text-justify">
                    {project.descriptionFour}
                </p>}
                {project.imageTwo &&
                    <div className="w-full py-4 bg-primary dark:bg-secondary">
                        <img src={project.imageTwo} className="w-full h-56 object-contain sm:h-72 md:h-80" />
                    </div>
                }   
            </div>
        </div>
    )
}

export default ProjectPage;