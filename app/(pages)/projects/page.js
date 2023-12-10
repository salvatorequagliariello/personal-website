import CustomNavigator from "../../components/CustomNavigator";
import ProjectPreview from "../../components/ProjectPreview";
import projects from 'app/projectslist.js'

const Projects = () => {
    return (
        <div className="w-full my-10 md:my-0 md:pb-24">
            <CustomNavigator pageName='projects' path='/' pathName='home'/>
            <div className="w-full  animate-fade-up animate-once animate-ease-out animate-normal animate-fill-forwards scroll-smooth">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {projects.map(project => {
                        return (
                        <li className="w-full h-56 sm:h-72 md:h-80">
                            <ProjectPreview name={project.name} image={project.cover} />
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Projects;