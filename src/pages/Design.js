import Header from "../components/Header";
import '../App.css';
import img1 from '../DesignImages/apple logo.jpg';
import img2 from '../DesignImages/Woolworths South Africa Mothers Day _3.jpg';
import img3 from '../DesignImages/The Duke & Duchess of Sussex · Symbol and logo design.jpg';
import img4 from '../wireframes/Screenshot 2024-05-29 131857.png';
import img5 from '../wireframes/Japandi Bedrooms_ Everything You Need to Know » Solarith Home.jpeg';

export default function Design() {
    return (
        <div className="design-section">
        <div className="header">
          <h1>DESIGN</h1>
          <p>Guide to aesthetics and patterns</p>
        </div>
        <div className="inspired-by">
          <h3>This was all inspired by...</h3>
          <div className="inspiration-logos">
            <div className="logo">
              <img src={img1} alt="Apple Logo" />
            </div>
            <div className="logo">
              <img src={img2} alt="Woolworths Logo" />
            </div>
            <div className="logo">
              <img src={img3} alt="SussexRoyal Logo" />
            </div>
          </div>
          <p>
            Design of this new website has been inspired by the sleek and modern designs of Apple and the creative portfolios found on Dribbble. 
            These platforms offer a wealth of design inspiration, showcasing clean lines, elegant typography, and intuitive layouts.
          </p>
        </div>
        <div className="color-palette">
          <h3>Colour Palette</h3>
          <div className="palette">
            <img src={img5} alt="Color Palette" />
          </div>
          <p>
            The color palette chosen for this design includes a range of neutral tones to create a calming and sophisticated aesthetic. 
            This palette helps to focus attention on the content without being distracting.
          </p>
        </div>
        <div className="style-layout">
          <h3>Style & Layout</h3>
          <div className="style-layout-content">
            <img src="style_layout_image_url" alt="Style and Layout" />
            <p>
              The style involves clean, modern lines with a minimalistic approach to content presentation. Layouts are designed to be intuitive, 
              allowing users to find information quickly and efficiently. The use of ample white space ensures that the design is not cluttered, 
              maintaining a professional and organized look.
            </p>
          </div>
        </div>
        <div className="wireframes">
          <h3>Wireframes</h3>
          <img src={img4} alt="Color Palette" />
        </div>
        <div className="reflection">
          <h3>Reflection</h3>
          <p>
            Reflecting on the design process, we aimed to create a user-friendly interface that balances aesthetics with functionality. 
            By taking inspiration from leading design platforms, we have developed a site that is both visually appealing and easy to navigate.
          </p>
        </div>
      </div>
    )
}