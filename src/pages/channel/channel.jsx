import "../channel/channel.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//component
import Sidebar from "../../components/sidebar/Sidebar";
import ChannelBottomItem from "../../components/channel__bottom/channelBottom";

//images
import UserDollie from "../../assets/img/user.png";
import Zing from "../../library/svgs/zing";
import Lupa from "../../assets/img/search-black.png";
import userRecomended from "../../assets/img/recomended.png";
import LeftIcon from "../../library/svgs/left_Icon";
import RightIcon from "../../library/svgs/right_icon";

function Channel() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=50")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div>
            <div className="channel__wrapper">
                <Sidebar />
                <div className="channel-wrapper-2">
                    <div className="channel-top"></div>
                    <div className="user-wrapper">
                        <img src={UserDollie} alt="pic" width="80" height="80" />
                        <div className="user-box">
                            <h4 className="box__user">Margaret Phelps</h4>
                            <span>245K subscribed</span>
                        </div>
                        <button className="btn-zing">
                            <Zing />
                        </button>
                        <button className="channel__btn-red">Subscribe 2.3m</button>
                    </div>

                    <div className="user__section">
                        <ul className="section__list ">
                            <li className="active">
                                <Link className="link-channel" to="/" className="btn-active">Home</Link>
                            </li>
                            <li>
                                <Link className="link-channel" to="/video">Videos</Link>
                            </li>
                            <li>
                                <Link className="link-channel" to="/video">Playlists</Link>
                            </li>
                            <li>
                                <Link className="link-channel" to="/channel">Channel</Link>
                            </li>
                            <li>
                                <Link className="link-channel" to="/">Discussion</Link>
                            </li>
                            <li>
                                <Link className="link-channel" to="/">About</Link>
                            </li>
                            <li>
                                <button className="btn-search ">
                                    <img src={Lupa} alt="seach icon" />
                                </button>
                            </li>
                        </ul>

                        <div className="content-box">

                            <Link to="/video">
                                <img
                                    src="https://picsum.photos/540/250"
                                    alt="img"
                                    className="section__img"
                                    width="490"
                                    height="200"
                                />
                            </Link>

                            <div className="info-wrapper">
                                <h5 className="section__heading">
                                    Choosing The Best Audio Player Software For Your Computer
                                </h5>
                                <p className="section__discription">
                                    Your cheap internet-based banner advertising will become one
                                    of the sought for ads there are. Today, the world of Internet
                                    advertising is rapidly evolving beyond banner ads and
                                    intrusive pop-ups. Bayles A common medium for advertising on
                                    the Internet is the use of banner ads.
                                </p>
                                <span className="section__views">11k views · 6 months ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="box-recomended-channel">
                        <span>Recommended channel</span>
                        <ul className="recomended__list">
                            <li>
                                <img
                                    src={userRecomended}
                                    alt="img user"
                                    width="50"
                                    height="50"
                                />
                                <p> Flora Benson</p>
                            </li>
                            <li>
                                <img
                                    src={userRecomended}
                                    alt="img user"
                                    width="50"
                                    height="50"
                                />
                                <p> Flora Benson</p>
                            </li>
                            <li>
                                <img
                                    src={userRecomended}
                                    alt="img user"
                                    width="50"
                                    height="50"
                                />
                                <p> Flora Benson</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="skroll-wrapper-bottom">
                            <h5 className="channel-bottom__header">Margaret Phelps videos</h5>

                            <button className="btn">
                                <LeftIcon />
                            </button>
                            <button className="btn">
                                <RightIcon />
                            </button>
                        </div>

                        {items.length > 0 && (
                            <ul className="channel-bottom__list">
                                {items.map((video) => (
                                    <ChannelBottomItem key={video.id} title={video.title} />
                                ))}
                            </ul>
                        )}

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Channel;
