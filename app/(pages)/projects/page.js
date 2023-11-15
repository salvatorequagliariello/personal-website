import Navigator from "@/app/components/Navigator";

const Projects = () => {
    return (
        <div className="w-full">
            <Navigator pageName='projects' />
            <div className="w-full text-5xl pb-36">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    <li className="w-full h-full hov-txt relative bg-primary dark:bg-secondary group hover:bg-accentred">
                        <p className="font-light absolute w-min h-min m-auto inset-0 bg-secondary dark:bg-primary z-10 group-hover:line-through">Portfolio</p>
                        <img src="/images/portfolio-screen.png" className="h-4/5 w-4/5 absolute m-auto inset-0"/>
                    </li>
                    <li className="hov-txt group-hover:border-accentred group">
                        <p>Timeless</p>
                        <img src="/images/timeless-screen.png" className="h-full w-full"/>
                    </li>
                    <li className="hov-txt group-hover:border-accentred group">
                        <p>e-Commerce CRM</p>
                        <img src="/images/crm-screen.png" className="h-full w-full border-2 border-primary  dark:border-secondary rounded-lg group-hover:border-accentred"/>
                    </li>
                    <li className="hov-txt group-hover:border-accentred group">
                        <p>uChat</p>
                        <img src="/images/uchat-screen.png" className="h-full w-full border-2 border-primary  dark:border-secondary rounded-lg group-hover:border-accentred"/>
                    </li>
                    <li className="hov-txt group-hover:border-accentred group">
                        <p>ai.Go</p>
                        <img src="/images/aigo-screen.png" className="h-full w-full border-2 border-primary  dark:border-secondary rounded-lg group-hover:border-accentred"/>
                    </li>
                    <li className="hov-txt group-hover:border-accentred group">
                        <p>Lotto Game</p>
                        <img src="/images/lotto-screen.png" className="h-full w-full border-2 border-primary  dark:border-secondary rounded-lg group-hover:border-accentred"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;