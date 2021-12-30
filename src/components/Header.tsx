import Navbar from './Navbar';
import HeaderImg from '../images/header-img.png'
function Header() {

    return (
        <div className='header container'>
            <Navbar />
            <div className="slideshow grid-2">
                <div className="header__text">
                        <h1 className="header__text-title">Product Design</h1>
                        <p className="header__description">Our multifaceted apps are custom built and developed to support multiple platforms, including both Android and iOS, making apps accessible for all</p>
                </div>
                <div className="header__img">
                    {/* <img src={HeaderImg} alt="product_design" />  */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil ex ducimus ea dolorem. Ipsum saepe fugiat labore corporis nesciunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam eius eum eos ullam facere dolore, molestiae aspernatur nesciunt labore neque, repudiandae rerum doloremque magnam voluptate perspiciatis soluta molestias harum rem unde iure deserunt quas. Unde qui vel veniam reiciendis ullam rerum voluptatem atque sequi officiis. Deleniti, commodi consequatur est sint enim cum voluptate iusto voluptatibus eum nesciunt inventore impedit ut aperiam libero culpa facilis, expedita repellat similique suscipit voluptatum nostrum animi? In eaque vitae rerum repellat sit ea quam repellendus laborum? Corrupti nihil perspiciatis expedita, ipsum nobis quasi quisquam obcaecati dignissimos praesentium debitis sunt laboriosam voluptatibus perferendis adipisci optio?
                </div>
            </div>
        </div>
    )
}

export default Header
