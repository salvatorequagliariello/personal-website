import Link from "next/link";

const Navigator = ({ pageName }) => {
    return (
        <div className="flex gap-2 text-end">
            <Link href="/" className="text-lg hov-txt h-min font-light underline">
                &lt;&lt;home
            </Link>
            <div>
                <p className="text-xl">// { pageName }</p>
            </div>
        </div>
    )
}

export default Navigator;