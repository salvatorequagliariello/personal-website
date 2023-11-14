import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div class="big-circle bg-primary dark:bg-secondary animate-fade animate-once animate-normal animate-fill-forwards hover:bg-accentred">
        <div class="small-circle bg-secondary dark:bg-primary"></div>
      </div>
      <div className="pt-24 px-96 h-screen flex text-center justify-between font-light">
        <div className="text-left animate-fade-right animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <h2 className="text-3xl">Salvatore Quagliariello</h2>
          <h4 className="text-xl font-thin">Front-end Developer</h4>
        </div>
        <div className="h-min flex flex-col sm:flex-row justify-center flex-wrap gap-3 sm:gap-10 animate-fade-left animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <Link href='/about' className="hov-txt text-xl italic">about</Link>
          <Link href='/projects' className="hov-txt text-xl italic">projects</Link>
          <Link href='/contact' className="hov-txt text-xl italic">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
