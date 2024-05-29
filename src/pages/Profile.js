
import '../App.css';
import img7 from '../images/PROFILEPICTURE.jpg';
import img1 from '../PortfolioImages/art1.jpg';
import img2 from '../PortfolioImages/art2.jpg';
import img3 from '../PortfolioImages/art3.jpg';
import img4 from '../PortfolioImages/art4.jpg';
import img5 from '../PortfolioImages/art5.jpg';
import img6 from '../PortfolioImages/art6.jpg';
import img8 from '../PortfolioImages/Wits.png';
import img9 from '../PortfolioImages/Inanda.png';
import img10 from '../PortfolioImages/Montclair.jpg';


export default function Profile() {
    return (
        <div className="profile">
            <div className="header">
                <h1>PROFILE</h1>
                <p>The one behind it all</p>
        
            </div>

            <section className="pcontents">
                <h2>MAWETHU NALA</h2>
            
                <div className="pcontentscon">
                    <p>
                        Hi, My name is Mawethu Nala and I am a digital Arts Student at the University of the Wtswatersrand.
                        I am currently majoring in Interactive Media and Animation. I especially enjoy web/app development and see myself persuing that path in future.
                    </p>
                    <img src={img7} alt="Mawethu Nala" className="profile-pic" />
                </div>
            </section>

        <h3>EDUCATION</h3>
        <div className="categories">
          <div className="category">
            <h4>WITS UNIVERSITY</h4>
              <img src={img8} alt="WITS University" />
                <p>
                  BA in Digital Arts, in progress.
                </p>
          </div>
          <div className="category">
            <h4>INANDA SEMINARY</h4>
            <img src={img9} alt="Inanda Seminary" />
            <p>
              High School, 2014 - 2018
             </p>
          </div>
          <div className="category">
            <h4>MONTCLAIR PRIMARY SCHOOL</h4>
            <img src={img10} alt="Montclair Primary School" />
            <p>
              Primary School, 2006 - 2013
             </p>
          </div>
        </div>

      

        <div className="pArtwork-projects">
        <div className="pArtwork">
          <h3>ARTWORK</h3>
          <p>
            This widget can display artwork thumbnails that link to the Instagram page.
            <a href="https://www.instagram.com/mauwii_illustrations/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <div className="pArtwork-thumbnails">
            <img className="thumbnail" src={img4} alt="" />
            <img className="thumbnail" src={img5} alt="" />
            <img className="thumbnail" src={img6} alt="" />
            <img className="thumbnail" src={img1} alt="" />
            <img className="thumbnail" src={img2} alt="" />
            <img className="thumbnail" src={img3} alt="" />
          </div>
        </div>
        </div>
    </div>
    )
}