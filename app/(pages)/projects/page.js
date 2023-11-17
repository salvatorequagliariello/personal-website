import CustomNavigator from "../../components/CustomNavigator";
import ProjectPreview from "../../components/ProjectPreview";
import projects from 'app/projectslist.js'

const Projects = () => {
    return (
        <div className="w-full">
            <CustomNavigator pageName='projects' path='/' pathName='home'/>
            <div className="w-full pb-36 animate-fade-up animate-once animate-ease-out animate-normal animate-fill-forwards animate-delay-2000 scroll-smooth">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {projects.map(project => {
                        return (
                        <li className="w-full h-80">
                            <ProjectPreview name={project.name} image={project.image} />
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Projects;