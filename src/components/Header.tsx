
import HeaderImg from '../images/header-img.png'
function Header() {

    return (
        <div className='header container'>
            <div className="slideshow grid-2">
                <div className="header__text order2">
                        <h1 className="header__text-title">Product Design</h1>
                        <p className="header__description">Our multifaceted apps are custom built and developed to support multiple platforms, including both Android and iOS, making apps accessible for all</p>
                </div>
                <div className="header__img order1">
                    <img src={HeaderImg} alt="product_design" className='headerImg'/> 
                </div>
            </div>
        </div>
    )
}

export default Header
