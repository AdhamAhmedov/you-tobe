import "./Home.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeTop from "../../components/home_top/home_top";
import HomeMiddle from "../../components/home-middle/home_middle";
import HomeBottom from "../../components/home_bottom/HomeBottom";


//img
import LeftIcon from "../../library/svgs/left_Icon";
import RightIcon from "../../library/svgs/right_icon";
import UserDollie from "../../assets/img/user.png";


function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=50')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);


    return (

        <div>
            < Header />
            <div className="home__sidebar-wrapper">
                < Sidebar />

                {/* ================home-top=================== */}
                <div className="home__content-wrapper">
                    <div className="skroll-wrapper">
                        <Link to="/" className="link-user">
                            <img src={UserDollie} alt="user" width="50" height="50" />
                            <span>Dollie Blair</span>
                        </Link>

                        <button className='btn'>
                            <LeftIcon />
                        </button>
                        <button className='btn'>
                            <RightIcon />
                        </button>
                    </div>
                    {items.length > 0 && (
                        <ul className="home__list">
                            {items.map((video) => (
                                <HomeTop key={video.id} title={video.title} />
                            ))}
                        </ul>
                    )}

                    {/* ================home-middle=================== */}
                    <div className="top-wrapper">
                        <h3 className="recomended">Recommended</h3>

                        <button className='btn'>
                            <LeftIcon />
                        </button>
                        <button className='btn'>
                            <RightIcon />
                        </button>
                    </div>

                    {items.length > 0 && (
                        <ul className="home__list">
                            {items.map((video) => (
                                <HomeMiddle key={video.id} title={video.title} />
                            ))}
                        </ul>
                    )}

                    {/* ================home-bottom=================== */}
                    <div className="skroll-wrapper-bottom">
                        <Link to="/" className="bottom__link-user">
                            <img src={UserDollie} alt="channel" width="50" height="50" />
                            <span>Food & Drink</span>
                        </Link>
                        <span className="channel">Recommended channel for you</span>

                        <button className="btn-red">Subscribe 2.3m</button>

                        <button className='btn'>
                            <LeftIcon />
                        </button>
                        <button className='btn'>
                            <RightIcon />
                        </button>
                    </div>

                    {items.length > 0 && (
                        <ul className="home__list">
                            {items.map((video) => (
                                <HomeBottom key={video.id} title={video.title} />
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Home;