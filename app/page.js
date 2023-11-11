import Link from "next/link";

export default function Home() {
  return (
      <div className="w-max h-screen m-auto flex flex-col text-center place-content-center">
        <div className="animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <h2 className="text-xl">Salvatore Quagliariello</h2>
          <h4 className="text-lg font-light">Front-end Developer</h4>
        </div>
        <hr 
          className="w-full my-4 h-0.5 opacity-100 bg-primary dark:bg-secondary animate-fade-right animate-once animate-ease-out animate-normal animate-fill-forwards" 
        />
        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3 sm:gap-10 animate-fade-down animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <Link href='/about' className="hov-txt text-lg">about</Link>
          <Link href='/projects' className="hov-txt text-lg">projects</Link>
          <Link href='/contact' className="hov-txt text-lg">contact</Link>
        </div>
      </div>
  )
}
