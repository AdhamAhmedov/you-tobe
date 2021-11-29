import "../home_top/home_top.scss";



function HomeTop() {

    return (
        <div className='home-top '>

            <li className="home-top__item">
                <img src="https://picsum.photos/250/150" alt="img" className="item__img" width="250" height="150" />
                <h4 className="item__userName">A Brief History Of Creation</h4>
                <div className="box">
                    <p className="item__views">80k views  ·  3 days ago</p>
                    <p className="item__name">Dollie Blair</p>
                </div>
            </li>

        </div>
    )
}

export default HomeTop;