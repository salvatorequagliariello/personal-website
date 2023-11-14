import Navigator from "@/app/components/Navigator";

const About = () => {
    return (
        <div className="py-5 sm:py-0 sm:pt-7 flex flex-col gap-7 sm:flex-row sm:gap-5 place-content-center align-center">
            <div className="sm:h-4/5 px-5 text-justify sm:px-0 sm:w-72 sm:border-l-2 sm:border-primary dark:sm:border-secondary sm:pl-3 sm:text-left overflow-y-auto animate-fade-down sm:animate-fade-right animate-once animate-ease-out animate-normal animate-fill-forwards animate-delay-2000 scroll-smooth">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, dui in dignissim feugiat, libero magna tincidunt sapien, a rhoncus neque risus sed neque. Vivamus tincidunt, ipsum in tincidunt egestas, diam est pretium eros, et blandit leo orci id odio. Ut at ante et diam finibus tincidunt. Nunc ac vulputate justo. Quisque sollicitudin sem vitae sapien mattis pulvinar.
                </p>
                <p className="mt-4">
                    Etiam vulputate vehicula enim, vitae commodo nibh sodales finibus. Mauris pellentesque porttitor ornare. Aenean tincidunt pulvinar orci, eu volutpat elit posuere ut. Donec sit amet libero a metus lobortis venenatis. Proin eu felis ac magna malesuada condimentum eu ut mi.
                </p>
                <p className="mt-4">
                    Ut eu est non diam sollicitudin scelerisque ac a justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec viverra enim, a rutrum urna. Vestibulum scelerisque nibh purus, sed ullamcorper orci condimentum at. Curabitur dictum ante quis scelerisque dignissim. Duis in aliquet diam.
                </p>
            </div>
        </div>
    )
}

export default About;