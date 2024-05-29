
import '../App.css';
import img1 from '../images/pexels-hngstrm-1939485.jpg';
import img2 from '../images/coathangers.jpeg';
import img3 from '../images/pexels-cottonbro-5082573.jpg'
import img4 from '../images/Hypernature_Concept View, Ex Figura, Barbara Stallone, Francisco Silva, 2022.jpg'


export default function Theme() {
    return (
        <div className="theme-page">
      <div className="header">
        <h1>MINIMALISM</h1>
        <p>The Elegance in Simplicity</p>
      </div>

      <section className="pcontents">
      <h2>What is it?</h2>
        <div className="pcontentscon">
          
          <p>
            Minimalism is a design philosophy that emphasizes simplicity and the removal of unnecessary elements. 
            It focuses on the use of clean lines, uncluttered spaces, and a neutral color palette to create a serene and harmonious environment.
          </p>
          <img src={img1} alt="Fashion" />
        </div>
      
      
      <div className="minimalism-in">
        <h2>Minimalism in</h2>
        <div className="categories">
          <div className="category">
            <h3>Fashion</h3>
            <img src={img2} alt="Fashion" />
            <p>
              Minimalist fashion is characterized by simple silhouettes, monochromatic colors, and high-quality fabrics. 
              It embraces the 'less is more' philosophy, creating timeless and versatile wardrobe pieces.
            </p>
          </div>
          <div className="category">
            <h3>Environment</h3>
            <img src={img4} alt="Environment" />
            <p>
              In architecture and interior design, minimalism promotes open spaces, natural light, and a connection with nature. 
              It aims to create peaceful and functional living areas by eliminating clutter.
            </p>
          </div>
          <div className="category">
            <h3>Tech</h3>
            <img src={img3} alt="Tech" />
            <p>
              Minimalist technology design focuses on intuitive interfaces, sleek aesthetics, and user-centric functionalities. 
              It strives to enhance the user experience by simplifying interactions and reducing visual noise.
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
    )
}