import { Link } from "react-router-dom";
import "../home_bottom/HomeBottom.scss";



function HomeBottom({ title }) {
    return (
        <div className='home-bottom'>

            <Link className="link" to="/video"> <li className="home-bottom__item">
                <img src="https://picsum.photos/250/150" alt="img" className="item__img" width="250" height="150" />
                <h4 className="bottom__item__userName">{title}</h4>
                <div className="box">
                    <p className="bottom__item__views">240k views  ·  4 months ago</p>
                    <p className="bottom__item__name">Food & Drink</p>
                </div>
            </li>
            </Link>
        </div>
    )
}

export default HomeBottom;


