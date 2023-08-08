import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import PageNavigator from "./PageNavigator"

const ProjectPreview = ({projectTitle, projectDescription, projectLink, projectTech, projectImg}) => {
    return (
        <div className="animate__animated animate__fadeIn">
            <PageNavigator path={"/work"} page={projectTitle} />
            <div className="project-preview__container content-container">
                <div>
                    <div className="project-title__container">
                        <h1 className="project-title p-font-xl fill-txt">{projectTitle}</h1>
                        <a 
                        className="fill-txt hoverable" 
                        href={projectLink}
                        target="_blank">
                            <FontAwesomeIcon className="project-title__icon fill-txt hoverable" icon={faLink} />
                        </a>
                    </div>
                    <img  className="project-image" src={projectImg} />
                </div>
                    <p className="p-font-sm fill-txt">{projectDescription}</p>
                <div>
                    <p className="project-stack p-font-md fill-txt">TECH STACK</p>
                    <p className="p-font-sm fill-txt">{projectTech}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;