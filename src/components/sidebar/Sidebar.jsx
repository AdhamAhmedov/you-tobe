import "./Sidebar.scss";
import { Link } from "react-router-dom";

import Home from "../../library/svgs/home";
import Trending from "../../library/svgs/trending";
import Subcription from "../../library/svgs/subscriptions";
import Library from "../../library/svgs/library";
import History from "../../library/svgs/history";
import Watch from "../../library/svgs/watchLater";
import Favorites from "../../library/svgs/favourites";
import Liked from "../../library/svgs/likedVideos";
import Music from "../../library/svgs/music";
import Games from "../../library/svgs/games";
import More from "../../library/svgs/shovMore";
import Settings from "../../library/svgs/settings";


//images
import user_1 from "../../assets/img/user.png";




function Sidebar() {

    const handleAddClass = (evt) => {
        const allActiveClasses = document.querySelectorAll(".active-link")

        allActiveClasses.forEach((link) =>
            link.classList.remove("active-link"))
        evt.currentTarget.classList.add("active-link");
    };


    return (


        <div className="sidebar-wrapper">
            <ul className="sidebar__list-top list">
                <li className="list-top__item item">
                    <Link to="/" className=" sidebar__link active-link" onClick={handleAddClass}>
                        <Home />
                        <span className="span">Home</span>
                    </Link>

                </li>
                <li className="list-top__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Trending />
                        <span className="span">Trending</span>
                    </Link>
                </li>
                <li className="list-top__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Subcription />
                        <span className="span">Trending</span>
                    </Link>
                </li>
            </ul>

            <ul className="sidebar__list-middle list">
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Library />
                        <span className="span">Library</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <History />
                        <span className="span">History</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Watch />
                        <span className="span">Watch Later</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Favorites />
                        <span className="span">Favorites</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Liked />
                        <span className="span">Liked videos</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Music />
                        <span className="span">Music</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <Games />
                        <span className="span">Games</span>
                    </Link>
                </li>
                <li className="list-middle__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <More />
                        <span className="span">More</span>
                    </Link>
                </li>
            </ul>

            <h3>Subcriptions</h3>

            <ul className="sidebar__list-bottom list">
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Gussie Singleton</span>
                    </Link>
                </li>
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Nora Francis</span>
                    </Link>
                </li>
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Belle Briggs</span>
                    </Link>
                </li>
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Eunice Cortez</span>
                    </Link>
                </li>
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Emma Hanson</span>
                    </Link>
                </li>
                <li className="list-bottom__item item">
                    <Link to="/" className="sidebar__link" onClick={handleAddClass}>
                        <img src={user_1} alt="user" />
                        <span className="span">Leah Berry</span>
                    </Link>
                </li>
            </ul>

            <Link to="/" className="sidebar__settings sidebar__link" onClick={handleAddClass}>
                <Settings />
                <span className="span">Settings</span>
            </Link>

        </div>
    )
}

export default Sidebar;
