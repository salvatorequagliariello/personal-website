import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col text-center place-content-center">
      <div className="w-max m-auto flex flex-col text-center place-content-center">
        <div className="animate-fade-up animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <h2 className="text-lg">Salvatore Quagliariello</h2>
          <h4 className="text-lg font-light">Front-end Developer</h4>
        </div>
        <hr 
          className="w-full my-4 h-0.5 opacity-100 bg-primary dark:bg-secondary animate-fade-right animate-once animate-ease-out animate-normal animate-fill-forwards" 
        />
        <div className="flex flex-row justify-center flex-wrap gap-10 animate-fade-down animate-once animate-delay-900 animate-normal animate-fill-forwards">
          <Link href='/about'>about</Link>
          <Link href='/projects'>projects</Link>
          <Link href='/contact'>contact</Link>
        </div>
      </div>
    </div>
  )
}
