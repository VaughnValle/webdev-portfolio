// UI stylesheet
import './global.css'
import './gallery.css'
import {useState} from 'react'
import Gallery from './Gallery';
import Todo from './Todo';
const images = "./images/"

const Hero = () => {
    const charles = require(images + 'charles.jpg');
    const [shownGal, setGalShow] = useState(false);
    const [shownTo, setToShow] = useState(false);
    const showGallery = () => {
        if (shownGal === true){
            setGalShow(false);
        }
        else {
            setGalShow(true);
        }
    }
    const showTodo = () => {
        if (shownTo === true){
            setToShow(false);
        }
        else {
            setToShow(true);
        }
    }
    return(
        <>
        <nav>
          <div class="logo">Vaughn Valle</div>
          <div class="nav">
            <a href="/">Home</a> <a href="https://www.vaughnvalle.me/" target="_blank" rel="noreferrer">About</a> <a href="https://drive.google.com/file/d/17KcHZu-u0fQfqyv6D6Gdocxfv1-uOTjK/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </nav>
        {shownGal && <Gallery />}
        <section class="main">
          <div class="main-container">
            <div class="left">
              <h1>Invest in Graduation Memories</h1>
              <p>
          Don't let your graduation photos be an afterthought! Capture this momentous occasion with a professional photoshoot that will leave you with stunning memories. Booking is easy, so lock in your date and get ready to celebrate your accomplishment in style.
              </p>
              <button id="gal" onClick={showGallery}> Gallery </button>
                <br/>
              <button id="book" onClick={showTodo}> Book Now </button>
            </div>
            <div class="right">
              <img
                src={charles}
                class="image"
                alt="Charles"
              />
            </div>
            {shownTo && <Todo />}
          </div>
        </section>
        </>
    );

};
export default Hero;
