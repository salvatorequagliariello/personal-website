import { useState } from "react";
import PageNavigator from "./PageNavigator";

const About = () => {
    const [hiAnimation,  setHiAnimation] = useState(true);

    return (
        <div className="animate__animated animate__fadeIn">
            <PageNavigator path={"/"} page={"ABOUT"} />
            <div className="content-container">
                <div className="hi-text__container">
                    <h1 onClick={() => setHiAnimation(true)}
                        onAnimationEnd={() => setHiAnimation(false)}
                        className={"hi-text fill-txt h-font-xl hoverable animate__animated " + (hiAnimation ? "animate__bounce" : "")}>
                        Hi,
                    </h1>
                    <h3 className="fill-txt p-font-md">nice to meet you.</h3>
                </div>
                <p className="bio-text fill-txt p-font-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae culpa perferendis inventore ipsa cum. Quasi, saepe! Illo, suscipit quaerat provident repellendus rerum impedit libero minus natus. Nisi dolorum laboriosam ut porro suscipit similique! Voluptatibus ut a, aut vero aspernatur voluptatum! Temporibus, aut harum omnis dolores nemo aperiam impedit eligendi ullam minus adipisci ea aliquid eveniet natus expedita voluptatum ipsam laborum quos doloremque facere! Dolores omnis nisi, sunt est fugit ad fuga laudantium a, minus iusto distinctio magnam officia veritatis iure dolorem molestias? Eius, sunt, molestiae fuga itaque deleniti recusandae eligendi facere natus illum veniam, in autem provident atque dolorem mollitia doloremque magnam. Minima aliquid asperiores enim quaerat tempora architecto magnam optio..</p>
            </div>
        </div>
    );
};

export default About;