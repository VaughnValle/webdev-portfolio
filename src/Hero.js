// UI stylesheet
import './global.css'

import Gallery from './Gallery';
const images = "./images/"


const Hero = () => {
    const charles = require(images + 'charles.jpg');
    return(
        <>
        <nav>
          <div class="logo">Vaughn Valle</div>
          <div class="nav">
            <a href="/">Home</a> <a href="https://www.vaughnvalle.me/" target="_blank" rel="noreferrer">About</a> <a href="https://drive.google.com/file/d/17KcHZu-u0fQfqyv6D6Gdocxfv1-uOTjK/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </nav>
        <section class="main">
          <div class="main-container">
            <div class="left">
              <h1>Invest in Graduation Memories</h1>
              <p>
          Don't let your graduation photos be an afterthought! Capture this momentous occasion with a professional photoshoot that will leave you with stunning memories. Booking is easy, so lock in your date and get ready to celebrate your accomplishment in style.
              </p>
              <button id="gal" onclick={Gallery}> Gallery </button>
            </div>
            <div class="right">
              <img
                src={charles}
                class="image"
                alt="Charles"
              />
            </div>
          </div>
        </section>
        </>
    );

};
export default Hero;


