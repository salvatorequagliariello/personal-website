import { Link } from "react-router-dom";

const PageNavigator = ({path, page}) => {
    return (
        <div className="page-navigator__container">
            <Link to={path} className="p-font-xl fill-txt hoverable">{"<"}</Link>
            <p className="p-font-md fill-txt">{page}</p>
        </div>
    )
}

export default PageNavigator;