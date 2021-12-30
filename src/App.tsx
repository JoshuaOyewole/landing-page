import Header from './components/Header';
import moreThanVisual from './images/more-than-visual.png'
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
            <h2 className="primary__header">
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
    </div>
  );
}

export default App;
