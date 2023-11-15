import Navigator from "@/app/components/Navigator";
import ProjectPreview from "@/app/components/ProjectPreview";

const projects = [
    {
        name: 'Portfolio',
        image: '/images/portfolio-screen.png'
    },
    {
        name: 'Timeless',
        image: '/images/timeless-screen.png'
    },
    {
        name: 'ai.GO',
        image: '/images/aigo-screen.png'
    },
    {
        name: 'eCommerce CRM',
        image: '/images/crm-screen.png'
    },
    {
        name: 'uChat',
        image: '/images/uchat-screen.png'
    },
    {
        name: 'Lotto Game',
        image: '/images/lotto-screen.png'
    },
]

const Projects = () => {
    return (
        <div className="w-full">
            <Navigator pageName='projects' path='/' pathName='home'/>
            <div className="w-full pb-36 animate-fade-up animate-once animate-ease-out animate-normal animate-fill-forwards animate-delay-2000 scroll-smooth">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {projects.map(project => {
                        return (
                        <li className="w-full h-80">
                            <ProjectPreview image={project.image} name={project.name} />
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Projects;