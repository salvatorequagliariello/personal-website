import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="header-name fill-txt p-font-md">SALVATORE QUAGLIARIELLO</h1>
            <p className="header-tag fill-txt p-font-sm">Front-end Developer</p>

            <nav className="home-nav">
                <Link className="home-nav__item h-font-md fill-txt hoverable">WORK</Link>
                <Link className="home-nav__item h-font-md fill-txt hoverable">ABOUT</Link>
                <Link className="home-nav__item h-font-md fill-txt hoverable">CONTACT</Link>
            </nav>
        </>
    );
};

export default Home;