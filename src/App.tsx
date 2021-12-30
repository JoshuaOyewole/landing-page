import Header from './components/Header';
import ProductsBtn from './components/ProductsBtn';
import moreThanVisual from './images/more-than-visual.png'
import discovery from './images/discovery-white.svg'
import research from './images/research-and-project-estimation.svg'
import uxWireframe from './images/wireframe.svg'
import UI from './images/ui.svg'
import userExperienceImg from './images/user-experience-design.svg'
import visualDesignImg from './images/visual-design.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="section-2 grid-2 container">
        <div className="img__section">
          <img src={moreThanVisual} alt="More than visual design, more than interaction" className='morethanvisualImg' />
        </div>
          <div className="text">
            <h2 className="primary__header pt-m">
              More than visual design, more than interactions.
            </h2>
            <p className="details">
              We take pride in our craft. Drawing on our deep expertise in design, our Product Design team cares for your user's experience over the entire customer journey, at every touchpaint with your company.
            </p>
            <div className="details">
              We shepherd your product through the entire design process. We aim to achieve your goals.
            </div>
            <p className="details">
              We also collaborate with our software Engineering team to ensure our designs are technically feasible within the constraints of the project. At the same time, we're watching for innovative new technologies that can maek the experience more seamless.
            </p>
          </div>
      </section>
      <section className="our-process container">
            <h2 className="primary__header text-center ">
              Our Design Process
            </h2>
            <p className="details text-center">Every decision we make is informed and goal oriented with the user journey in mind with a</p>

            <div className="design-process center">
              <p className="process-review ">
                We sit down with you to discuss your business goals and your target audience. We determine the problems you are trying to solve, and together, we define the key features of the app/software you're trying to build.
              </p>
              <div className="process1 center flex-col">
                <div className="img-box process1-imgBox center">
                  <img src={discovery} alt="Discovery" />
                </div>
                <p className="process-title">1. Discovery</p>
              </div>
          
              <div className="process2 center flex-col">
                  <div className="img-box process2-imgBox center">
                      <img src={research} alt="research+ Project Estimation" />
                  </div>
                <p className="process-title">2. Research + Project Estimation</p>
              </div>
              <div className="process3 center flex-col">
                <div className="img-box process3-imgBox center">
                  <img src={uxWireframe} alt="Wireframe" />
                </div>
                <p className="process-title">3. UX Wireframe</p>
              </div>
              <div className="process4 center flex-col">
                <div className="img-box process4-imgBox center">
                  <img src={UI} alt="UI Application" />
                </div>
                <p className="process-title">4. UI Application</p>
              </div>
            </div>
      </section>
      <section className="product-services">
          <div className="container">
            <h2 className="primary__header text-center pb-m white">
              Product Design Services
            </h2>
            <div className="grid-4">
              <ProductsBtn text='User Experience Design' />
              <ProductsBtn text='Visual Design' />
              <ProductsBtn text='Prototyping' />
              <ProductsBtn text='Content Design' />
              <ProductsBtn text='Design Systems' />
              <ProductsBtn text='Voice Chatbots & Multimodal UI' />
            </div>
          </div>
      </section>
      <section className="userExperience grid-2 container">
          <div className="text">
            <h2 className="primary__header">
              User Experience Design
            </h2>
            <p className="details">
              Even after the Product Strategy phase, we maintain a relentless focus on yout business goals. Our Product Design team ensures the product we deliver will solve your chanlleges while meeting your user's needs
            </p>
            <h3 className="tertiary__header pt-s uppercase">Tactics</h3>
            <ul className="tactics__list">
              <li>Behavioral data analysis</li>
              <li>Wireframe</li>
              <li>Personalization architecture</li>
              <li>User flow</li>
            </ul>
          </div>
          <div className="img__section">
          <img src={userExperienceImg} alt="More than visual design, more than interaction" className='morethanvisualImg' />
        </div>
      </section>
      <section className="visualDesign grid-2">
      <div className="img__section order2">
          <img src={visualDesignImg} alt="More than visual design, more than interaction" className='morethanvisualImg2' />
        </div>
          <div className="text order1 pt-m">
            <h2 className="primary__header">
              Visual Design
            </h2>
            <p className="details">
              Yes, we make your software produc beautiful. We also make it easy-to-use, compelling, and delightful.
            </p>
            <h3 className="tertiary__header pt-s uppercase">Tactics</h3>
            <ul className="tactics__list">
              <li>Design workshop</li>
              <li>Custom iconography</li>
              <li>Visual design concept</li>
              <li>UI elements</li>
              <li>Typography system</li>
              <li>Style guide</li>
            </ul>
          </div>
      </section>
    </div>
  );
}

export default App;
