import CustomNavigator from "../../../components/CustomNavigator";

const projects = [
    {
        name: 'Portfolio',
        image: '/images/portfolio-screen.png',
        liveLink: 'www.salvatorequagliariello.com',
        githubLink: 'www.github.com'
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

const ProjectPage = ({ params }) => {
    const project = projects.filter(project => project.name == params.project.replace(/%20/g, ' '))[0];

    return (
        <div>
            <CustomNavigator pageName={project.name} path='/projects' pathName='projects' />
            <div className="flex flex-col gap-5 animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">
                <h1 className="text-6xl font-light text-center">{project.name}</h1>
                <img src={project.image} className="w-full h-80 object-none" />
                <div className="w-full text-center flex gap-3 place-content-center">
                    <a href={project.githubLink} className="hov-txt">GitHub</a>
                    <p>//</p>
                    <a href={project.liveLink} className="hov-txt">Live Website</a>
                </div>
                <div className="text-xl">
                    <h3 className="inline">Tech stack: </h3>
                    <p className="font-light inline">React, NextJS, Tailwind</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;