import "./right_item.scss";
import { Link } from "react-router-dom";

function RightItem({ title }) {
    return (
        <div>
            <li className="list__item">
                <Link className="list-item" to="./video">
                    <img
                        src="https://picsum.photos/350/190"
                        alt="img"
                        className="item__img"
                        width="350"
                        height="190"
                    />
                    <h4 className="title">{title}</h4>
                </Link>
                <div className="box">
                    <p className="">80k views · 3 days ago</p>
                    <p className="">Dollie Blair</p>
                </div>
            </li>
        </div>
    );
}

export default RightItem;
