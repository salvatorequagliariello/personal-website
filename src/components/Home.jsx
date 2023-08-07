import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="header-name fill-txt p-font-md">SALVATORE QUAGLIARIELLO</h1>
            <p className="header-tag fill-txt p-font-sm">Front-end Developer</p>

            <ul className="links-list">
                <Link className="links-list__item h-font-md fill-txt hoverable">WORK</Link>
                <Link className="links-list__item h-font-md fill-txt hoverable">ABOUT</Link>
                <Link className="links-list__item h-font-md fill-txt hoverable">CONTACT</Link>
            </ul>
        </>
    );
};

export default Home;