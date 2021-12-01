import "../video/video.scss";

//images
import Like from "../../library/svgs/like";
import DisLike from "../../library/svgs/dislike";
import Share from "../../library/svgs/share";
import Oval from "../../assets/img/Oval.png";
import Dot from "../../library/svgs/dotBlue";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import RightItem from "../../components/video__right-box/right_item";

function Video() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="video-page__wrapper">
            <div className="left-box">
                <div className="left-box__video">
                    <iframe
                        className="video"
                        width="900"
                        height="506"
                        src="https://www.youtube.com/embed/7mAEQFbXhf0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullscreen
                    ></iframe>
                </div>
                <p className="video-title">Dude You Re Getting A Telescope</p>
                <div className="wrapper-box">
                    <span className="view">123k views</span>
                    <div>
                        <button className="btn-like">
                            <Like />
                            <span>000</span>
                        </button>
                        <button className="btn-like">
                            <DisLike />
                            <span>000</span>
                        </button>
                        <button className="btn-like">
                            <Share />
                            <span>Share</span>
                        </button>
                        <button className="btn">...</button>
                    </div>
                </div>

                <hr />

                <div className="video-box-bottom">
                    <div>
                        <img src={Oval} alt="imgs" width="80" height="80" />
                    </div>
                    <div className="box-center">
                        <h5>Food & Drink</h5>
                        <span>Published on 14 Jun 2019</span>
                        <p>
                            A successful marketing plan relies heavily on the pulling-power of
                            advertising copy. Writing result-oriented ad copy is difficult, as
                            it must appeal to, entice, and convince consumers to take action.
                            There is no magic formula to write perfect ad copy; it is based on
                            a number of factors, including ad placement, demographic, even the
                            consumer’s mood when they see your ad.
                        </p>
                        <span>Show more</span>
                    </div>
                    <div>
                        <button className="btn-red">Subscribe 2.3m</button>
                    </div>
                </div>
            </div>

            <div className="right-box">
                <div className="right-box__box">
                    <button className="next-btn ">Next</button>
                    <button className="autoplay-btn ">Autoplay</button>
                    <Dot />
                </div>
                <Switch>
                    <Route to="./video">
                        <ul className="right-video__list">
                            {items.map((Videos) => (
                                <div>
                                    <RightItem key={Videos.id} title={Videos.title} />
                                </div>
                            ))}
                        </ul>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Video;
