import asset7 from './assets/assets7.jpg'
import asset1 from './assets/assets1.jpg'
import asset2 from './assets/assets2.jpg'
import asset4 from './assets/assets4.jpg'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import partner1 from './assets/partner1.png'
import partner2 from './assets/partner2.png'
import partner3 from './assets/partner3.png'
import partner4 from './assets/partner4.png'
import partner5 from './assets/partner5.png'
import partner6 from './assets/partner6.png'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="smart"> 
        <h2>SmartSpace</h2>
        <div  className="menu">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Portfolio</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="intro">
        <div className="intro-word">
          <h2>residential & office spaces</h2>
          <p className="smart-living">Smart Living Style for Smart People</p>
          <p className="statement">Much did had call new drew that kept. 
            Limits expects wonder law she. Now has you views woman noisy match money rooms

          </p>
        </div>

        <div className="intro-image">
          <img src={asset7} alt="intro-img" />
        </div>
      </div>
      <div className="input">
        <input type="text" placeholder="Enter Zipcode to search properties"/>
        <button>Search Now!</button>
      </div>
      <div className="partners">
        <p>Our Amazing Partners</p>
        <div className="partners-logo">
          <img src={partner1} alt="partner" />
          <img src={partner2} alt="partner" />
          <img src={partner3} alt="partner" />
          <img src={partner4} alt="partner" />
          <img src={partner5} alt="partner" />
          <img src={partner6} alt="partner" />
        </div>
      </div>
      <div className="know-how">
        <h2>How it works?</h2>
        <div  className="know-how-img">
          <img src={icon1} alt="search" />
          <img src={icon2} alt="valuation" />
          <img src={icon3} alt="Track" />
        </div>
        <div className="know-how-word">
          <p>Research Suburbs</p>
          <p>Instant Valuation</p>
          <p>Track Property</p>
        </div>
        <div className="know-how-desc">
          <p>Wonder twenty hunted and put income set desire expect..</p>
          <p>Conveying or northward offending admitting perfectly my. Colonel.</p>
          <p>Moderate children at of outweigh it. Unsatiable it considered invitation.</p>
        </div>
      </div>
      <div className="estate-deals">
        <div className="deal">
          <h2>Best Real Estate Deals</h2>
          <button>view all property</button>
        </div>
        <p className="estate-desc">Colonel gravity get thought fat smiling add but. 
          Wonder twenty hunted and put income set desire expect. 
        </p>

        <div className="property-type">
          <div className="list">
            <p>residential property</p>
            <p>commercial property</p>
            <p>agricultural property</p>
            <p>industrial property</p>
          </div>
          <div className="prop-image">
            <img src={asset1} alt="House" />
            <img src={asset4} alt="Duplex" />
            <img src={asset2} alt="Mansion" className="mansion"/>
          </div>
        </div>

      </div>

    
    </div>
  );
}

export default App;
