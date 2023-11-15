import Navigator from "@/app/components/Navigator";


const ProjectPage = ({ params }) => {
    const project = params.project

    return (
        <div>
            <Navigator pageName={project} path='/projects'/>
            <p>
                {project}
            </p>
        </div>
    )
}

export default ProjectPage;