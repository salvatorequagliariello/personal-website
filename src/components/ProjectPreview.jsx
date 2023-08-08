import PageNavigator from "./PageNavigator"

const ProjectPreview = ({projectTitle, projectDescription, projectLink, projectTech, projectImg}) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <PageNavigator path={"/work"} page={projectTitle} />
            <div className="project-preview__container content-container">
                <div>
                    <h1 className="project-title p-font-xl fill-txt">{projectTitle}</h1>
                    <p className="p-font-sm fill-txt">{projectDescription}</p>
                </div>
                <div>
                    <p className="project-stack p-font-md fill-txt">TECH STACK</p>
                    <p className="p-font-sm fill-txt">{projectTech}</p>
                </div>
                <img src={projectImg}></img>
            </div>
        </div>
    );
};

export default ProjectPreview;