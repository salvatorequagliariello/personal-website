import CustomNavigator from "../../components/CustomNavigator";

const About = () => {
    return (
        <div className="my-10 md:my-0 md:pb-24">
            <CustomNavigator pageName='about' path='/' pathName='home'/>
            <div className="text-justify text animate-fade-up animate-once animate-ease-out animate-normal animate-fill-forwards scroll-smooth">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl bg-primary dark:bg-secondary text-secondary dark:text-primary p-4 font-light">
                        Hi, my name is <span className="font-medium">Salvatore</span>, a Junior Front-end Developer based in Varese, Italy, and I'm <span className="font-medium">fully committed</span> to the philosophy of <span className="font-medium">life-long learning</span> and the concept that <span className="font-medium">passion</span> and <span className="font-medium">hard-work</span> can lead literally <span className="font-medium">anywhere</span>. 
                    </h2>
                    <p>
                        Since I was a child, I have always been fascinated by everything that was composed of a plastic body and a soul in binary code. I was interested in understanding how those "magical devices" worked, what would have been possible to create with them, and what their limits could have been.
                    </p>
                    <p>
                        Over the years, I have always spent a lot of my free time trying to learn how to use any software that was able to "create" something from scratch, such as Photoshop, Final Cut or, combining my immense passion for music with computer science, Logic Pro.
                    </p>
                    <p>
                        When I discovered application development and its infinite possibilities, I fell completely in love with it. I finally had the opportunity to create my own app or website and decide even the smallest details. I no longer had to follow the rules of the software I was using; it was up to me to decide what it could do and how it could do it. So I started getting interested in Javascript and React, starting with creating small websites or applications like calculators or to-do apps. By the end of 2022, I will leave my job to dedicate myself full-time to learning the most commonly used front-end development technologies. My current goal is not only to start working in the field and learn more, but also to develop a small, story-driven platformer video game.
                    </p>
                    <p>
                        I consider myself an extremely ambitious and determined person who never settles for doing the bare minimum and when I'm not writing code or learning a new technology, I usually listen to videogame's and movie's OSTs or I'm busy catching any Pokemon in the Kanto region on an old azure Gameboy.
                    </p>
                    <div className="flex flex-col min-[348px]:flex-row gap-2">
                        <a href="https://drive.google.com/file/d/1ucY3nbpH_PwTw0qq2NAI6HHSqvWIiJqy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-max text-xl font-thin hov-txt bg-primary dark:bg-secondary text-secondary dark:text-primary p-2">&#62;&#62; curriculum vitae</a>
                        <a href="https://github.com/salvatorequagliariello" target="_blank" rel="noopener noreferrer" className="w-max text-xl font-thin hov-txt bg-primary dark:bg-secondary text-secondary dark:text-primary p-2">&#62;&#62; github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;