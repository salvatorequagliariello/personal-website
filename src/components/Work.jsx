import { Link } from "react-router-dom";
import PageNavigator from "./PageNavigator";

const Work = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <PageNavigator path={"/"} page={"WORK"} />
            <div className="nav">
                <nav className="work-nav">
                    <Link to={"/work/instagram"} className="work-nav__item h-font-sm fill-txt hoverable">Instagram</Link>
                    <Link className="work-nav__item h-font-sm fill-txt hoverable">Facebook</Link>
                    <Link className="work-nav__item h-font-sm fill-txt hoverable">Linkedin</Link>
                    <Link className="work-nav__item h-font-sm fill-txt hoverable">Youtube</Link>
                    <Link className="work-nav__item h-font-sm fill-txt hoverable">Snapchat</Link>
                    <Link className="work-nav__item h-font-sm fill-txt hoverable">Ebay</Link>
                </nav>
            </div>
        </div>
    );
};

export default Work;