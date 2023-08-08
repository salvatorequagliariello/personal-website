import ProjectPreview from "../ProjectPreview";

const instagram =  {
    title: "Instagram",
    link: "https://www.instagram.com/",
    tech: "React, Vanilla CSS, PHP",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in enim pretium, tempus orci eu, vehicula eros. Proin blandit condimentum urna id ultricies. Nunc sit amet ipsum quam. Fusce gravida magna quis nisl gravida, id sollicitudin arcu consequat. Cras posuere erat non metus sagittis, vitae aliquam enim vulputate. Mauris molestie risus in diam convallis, non sodales nisi tincidunt. Suspendisse tempus odio sed augue viverra auctor. In quis ornare tellus. Nulla at pellentesque nulla, sit amet lobortis nisl. Integer malesuada pellentesque ullamcorper. Cras suscipit elementum tortor et ullamcorper. Ut sed libero blandit."
}

const ProjectTest = () => {
    return (
        <ProjectPreview
        projectTitle={instagram.title} 
        projectDescription={instagram.description}
        projectLink={instagram.link}
        projectTech={instagram.tech}
        projectImg={instagram.img} />
    );
};

export default ProjectTest;