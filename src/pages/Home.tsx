import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Wrapper } from "../Style/styles"
import { Content } from "../Style/styles"
import { TittleHeader } from "../Style/styles"
import { TittleFooter } from "../Style/styles"
import { ImgHeader } from "../Style/styles"
import { ImgFooter } from "../Style/styles"
import { FooterStyled } from "../Style/styles";
import banner from "../Assets/mar.png"
import growdev from "../Assets/growdevimg.png"
import img1 from "../Assets/image1.png"
import img2 from "../Assets/image2.png"
import img3 from "../Assets/image3.png"

export function Home() {
    return (
        <>
        <Wrapper>
            <ImgHeader src={banner} alt="" />
            <TittleHeader>Minha primeira página com React.</TittleHeader>
            <ImgHeader src={growdev} alt="" />

            <Content>
                <div>
                    <h1>Lorem Ipsum</h1> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi voluptatibus? Aspernatur dicta ab distinctio saepe earum. Maxime, blanditiis laborum sunt atque suscipit mollitia laboriosam natus! Voluptas vero officia velit aliquid sequi fugiat cum animi beatae dolorem doloremque at amet, temporibus sit sint ab eligendi commodi eos. Ut beatae reprehenderit aut expedita, corrupti perspiciatis dolorum pariatur enim aspernatur porro iusto doloribus tempora harum! Facilis necessitatibus ex itaque corrupti delectus ratione sapiente magni, incidunt atque, corporis maxime provident iste explicabo commodi reprehenderit! Ut necessitatibus fugit architecto et eligendi, repudiandae suscipit nulla sapiente distinctio voluptatum pariatur eum, impedit eius ratione. Deserunt, nulla.</p>
                </div>
                <img src={img1} />
            </Content>
            <Content>
                <img src={img2} />
                <div>
                    <h1>Lorem Ipsum</h1> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi voluptatibus? Aspernatur dicta ab distinctio saepe earum. Maxime, blanditiis laborum sunt atque suscipit mollitia laboriosam natus! Voluptas vero officia velit aliquid sequi fugiat cum animi beatae dolorem doloremque at amet, temporibus sit sint ab eligendi commodi eos. Ut beatae reprehenderit aut expedita, corrupti perspiciatis dolorum pariatur enim aspernatur porro iusto doloribus tempora harum! Facilis necessitatibus ex itaque corrupti delectus ratione sapiente magni, incidunt atque, corporis maxime provident iste explicabo commodi reprehenderit! Ut necessitatibus fugit architecto et eligendi, repudiandae suscipit nulla sapiente distinctio voluptatum pariatur eum, impedit eius ratione. Deserunt, nulla.</p>
                </div>
            </Content>
            <Content>
                <div>
                    <h1>Lorem Ipsum</h1> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi voluptatibus? Aspernatur dicta ab distinctio saepe earum. Maxime, blanditiis laborum sunt atque suscipit mollitia laboriosam natus! Voluptas vero officia velit aliquid sequi fugiat cum animi beatae dolorem doloremque at amet, temporibus sit sint ab eligendi commodi eos. Ut beatae reprehenderit aut expedita, corrupti perspiciatis dolorum pariatur enim aspernatur porro iusto doloribus tempora harum! Facilis necessitatibus ex itaque corrupti delectus ratione sapiente magni, incidunt atque, corporis maxime provident iste explicabo commodi reprehenderit! Ut necessitatibus fugit architecto et eligendi, repudiandae suscipit nulla sapiente distinctio voluptatum pariatur eum, impedit eius ratione. Deserunt, nulla.</p>
                </div>
                <img src={img3} />
            </Content>
            
            <ImgFooter src={banner} alt="" />
            <TittleFooter>Contato</TittleFooter>
            <FooterStyled>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to={"#"}>About</Link>
                    </li>
                    <li>
                    <Link to={"#"}>Contact</Link>
                    </li>
                    <li>
                    <Link to={"#"}>Terms Of Use</Link>
                    </li>
                    <li>
                    <Link to={"#"}>Privacy Policy</Link>
                    </li>
                </ul>
                </nav>
                <small>&copy; Your WebSite 2022. All Rights Reserved.</small>
            </div>

            <div>
                <span>
                <BsFacebook />
                </span>
                <span>
                <BsTwitter />
                </span>
                <span>
                <BsLinkedin />
                </span>
            </div>
        </FooterStyled>
        </Wrapper> 
        </>
    )
}