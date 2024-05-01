import React, {useState} from 'react';

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

const Gallery = () => {
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
    let pics = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
    ]
    return(
        <>
        <h1 style={{textAlign: 'center'}}> Gallery </h1>
        <br />
        <div className="gallery">
            {pics.map((item, index)=>{
                return(
                    <>
                    <div className="picture" key={index}>
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

                    </div>
                    </>
                );
            })}
        </div>
        </>
    );

}; export default Gallery;
