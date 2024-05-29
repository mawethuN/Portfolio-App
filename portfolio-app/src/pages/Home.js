import Header from "../components/Header";
//Image imports for the ares that have images
import img1 from '../images/What is Japandi Style_ How to Incorporate Japandi Design in Each Room_.jpeg';
import img2 from '../images/7030f804-4e9f-4689-b06d-8a5d9c4e6203.jpeg';
import img4 from '../images/HomePageImg1.jpg';
import img5 from '../images/thread.jpg';
import img6 from '../images/White Apple Wallpapers - Top Free White Apple Backgrounds - WallpaperAccess.jpg';
import img7 from '../images/paperbag.jpeg';
import Footer from "../components/Footer";
import Design from "./Design";
import Profile from "./Profile";
import Theme from "./Theme";
import Theory from "./Theory";




export default function Home() {
    return (
        <div className="App">
      
      <header className="header">
        <h1>WELCOME</h1>
        <p>to my personal website</p>
      </header>
      <section className="about">
        <h2>ABOUT</h2>
        <p>
          Welcome to my personal website, a space dedicated to exploring the art of minimalism and beyond. Here, you will find insights and reflections on living with intention and simplicity, not just in fashion, but in various aspects of life. As we delve into the minimalist philosophy, we will also touch on related themes such as sustainable living, mindful consumption, and personal growth. Join me on this journey to discover how embracing a minimalist mindset can lead to a more fulfilling and balanced life.
        </p>
      </section>
      <section className="contents">
        <h2>CONTENTS</h2>
        <div className='contentscon'> 
          <ul>
            <li>01: THEME</li>
            <li>02: DESIGN</li>
            <li>03: THEORY</li>
            <li>04: ART</li>
            <li>05: PROFILE</li>
         </ul>
          <img src={img1} alt='Image of a collage with earth themed colours'/>
        </div>
      </section>
      <section className="explore">
        <h2>EXPLORE</h2>
        <div className="explore-links">
          <div className="explore-item">
            <img src={img4} alt="Theme" className="explore-image" />
            <a href="./theme">THEME</a>
          </div>
          <div className="explore-item">
            <img src={img5} alt="Design" className="explore-image" />
            <a href="./design">DESIGN</a>
          </div>
          <div className="explore-item">
            <img src={img7} alt="Theory" className="explore-image" />
            <a href="./theory">THEORY</a>
          </div>
          <div className="explore-item">
            <img src={img2} alt="Art" className="explore-image" />
            <a href="./art">ART</a>
          </div>
          <div className="explore-item">
            <img src={img6} alt="Profile" className="explore-image" />
            <a href="./profile">PROFILE</a>
          </div>
        </div>
      </section>
      <Profile />
      <Theme />
      <Theory />
      <Design />
      <Footer />
    </div>
    )
}