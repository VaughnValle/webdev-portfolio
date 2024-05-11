import React, {useState, useContext} from 'react';
import { ShopContext } from "./shop-context.js"
// format gallery layout
import './gallery.css'

import Img1 from './images/gallery/DSCF5976.jpg';
import Img4 from './images/gallery/DSCF6109.jpg';
import Img7 from './images/gallery/DSCF6147.jpg';
import Img2 from './images/gallery/DSCF6447.jpg';
import Img5 from './images/gallery/DSCF6415.jpg';
import Img6 from './images/gallery/DSCF6316.jpg';
import Img3 from './images/gallery/DSCF6349.jpg';
import Img8 from './images/gallery/DSCF6396.jpg';
import Img9 from './images/gallery/DSCF6178.jpg';
export const pics = [
        {
            id: 1,
            imgSrc: Img1,
            price: 20,
            description: "A picture!",
        },
        {
            id: 2,
            imgSrc: Img2,
            price: 20,
            description: "A picture!",
        },
        {
            id: 3,
            imgSrc: Img3,
            price: 20,
            description: "A picture!",
        },
        {
            id: 4,
            imgSrc: Img4,
            price: 20,
            description: "A picture!",
        },
        {
            id: 5,
            price: 20,
            description: "A picture!",
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
            price: 20,
            description: "A picture!",
        },
        {
            id: 7,
            imgSrc: Img7,
            price: 20,
            description: "A picture!",
        },
        {
            id: 8,
            imgSrc: Img8,
            price: 20,
            description: "A picture!",
        },
        {
            id: 9,
            imgSrc: Img9,
            price: 20,
            description: "A picture!",
        },
    ]
const Gallery = () => {
    const { addToCart } = useContext(ShopContext);
    const [likeCount, setLike] = useState(1337);
    const [activeBtn, setActiveBtn] = useState("none");
    const handleClick = (reaction) => {
        if (activeBtn === "none") {
            if (reaction === "like") {
                setLike(likeCount + 1);
                setActiveBtn("like");
            }
            else if (reaction === "share"){
                window.open("https://www.instagram.com", "_blank");
                setActiveBtn("share");
            }
        }
        else if (activeBtn !== reaction){
            if (reaction === "like"){
                setLike(likeCount + 1);
                setActiveBtn("like");
            }
            else if (reaction === "share"){
                window.open("https://www.instagram.com", "_blank");
                setLike(likeCount - 1);
                setActiveBtn("share");
            }
        }
    };
    return(
        <>
        <h1 style={{textAlign: 'center'}}> Gallery </h1>
        <br />
        <div className="gallery">
            {pics.map((item)=>{
                return(
                    <>
                    <div className="picture" key={item.id}>
                        <img src={item.imgSrc} style={{width: '100%'}} alt="An NYU Graduate"></img>
                    </div>
                    <div className="like-cont">
                        <button className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
                            onClick={() => handleClick("like")}
                        >
                            Like {likeCount}
                        </button>
                        <button className={`btn ${activeBtn === "share" ? "share-active" : ""}`}
                            onClick={() => handleClick("share")}

                        >
                            Share
                        </button>
                        <button className={`btn ${activeBtn === "cart" ? "cart-active" : ""}`}
                            onClick={() => addToCart(item.id)}
                        >
                            Buy for {item.price}
                        </button>

                    </div>
                    </>
                );
            })}
        </div>
        </>
    );

}; export default Gallery;
