import Link from "next/link";

const Navigator = ({ pageName, path, pathName }) => {
    return (
        <div className="mb-5 flex gap-2 justify-between align-text-bottom animate-fade-down animate-once animate-delay-900 animate-normal animate-fill-forwards">
            <Link href={path} className="text-xl hov-txt h-min font-light leading-2">
                &lt;&lt; {pathName}
            </Link>
            <div>
                <p className="text-2xl leading-none">// { pageName }</p>
            </div>
        </div>
    )
}

export default Navigator;