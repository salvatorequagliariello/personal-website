import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="big-circle bg-primary dark:bg-secondary animate-fade-up animate-once animate-normal animate-fill-forwards hover:bg-accentred overflow-hidden sm:overflow-visible">
        <div className="small-circle bg-secondary dark:bg-primary hover:none"></div>
      </div>
      <div className="flex h-screen flex-col py-4 text-center justify-between font-light md:flex-row md:h-auto">
        <div className="text-left animate-fade-right animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <h2 className="text-3xl">Salvatore Quagliariello</h2>
          <h4 className="text-xl font-thin">Front-end Developer</h4>
        </div>
        <div className="h-min flex flex-col justify-center text-2xl gap-2 sm:gap-10 sm:flex-row animate-fade-left animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <Link href='/about' className="hov-txt md:leading-10">about</Link>
          <Link href='/projects' className="hov-txt md:leading-10">projects</Link>
          <Link href='/contact' className="hov-txt md:leading-10">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
