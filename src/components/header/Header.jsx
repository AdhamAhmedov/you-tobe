import "../header/Header.scss";

import { Link } from "react-router-dom";
import Hamburger from "../../library/svgs/gamburger";
import Youtube from "../../library/svgs/logo";
import Camera from "../../library/svgs/camera";
import Dots from "../../library/svgs/dots";
import Ring from "../../library/svgs/bel";
import Userpic from "../../assets/img/Userpic.jpg";

function Header() {
    return (

        <div className="header container">
            <Hamburger />
            <Link to="/" className="site-logo">
                <Youtube />
            </Link>

            <input className="header__input" type="text" placeholder="Search" />

            <ul className="header__list">
                <li className="header__item">
                    <Link to="/">
                        < Camera />
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/">
                        <Dots />
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/">
                        <Ring />
                    </Link>
                </li>
            </ul>

            <Link to="/" className="header__userpic">
                <img src={Userpic} alt="userpic" />
            </Link>

        </div>
    )
}

export default Header;