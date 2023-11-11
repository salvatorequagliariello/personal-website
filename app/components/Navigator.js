import Link from "next/link";

const Navigator = ({ pageName }) => {
    return (
        <div className="flex gap-2">
            <Link href="/" className="hov-txt h-min font-light underline">
                home
            </Link>
            <div>
                <p className="">// { pageName }</p>
            </div>
        </div>
    )
}

export default Navigator;