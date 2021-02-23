import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  AtomSpinner,
  BreedingRhombusSpinner,
  CirclesToRhombusesSpinner,
  FingerprintSpinner,
  FlowerSpinner,
  FulfillingBouncingCircleSpinner,
  FulfillingSquareSpinner,
  HalfCircleSpinner,
  HollowDotsSpinner,
  IntersectingCirclesSpinner,
  LoopingRhombusesSpinner,
  OrbitSpinner,
  PixelSpinner,
  RadarSpinner,
  ScalingSquaresSpinner,
  SelfBuildingSquareSpinner,
  SemipolarSpinner,
  SpringSpinner,
  SwappingSquaresSpinner,
  TrinityRingsSpinner,
} from './index';

function App() {
  const [color, setColor] = useState('#ff1d5e');
  const [bgColor, setBGColor] = useState('#030810');

  function changeSpinnerColor(e) {
    setColor(e.target.value);
  }

  function changePageBGColor(e) {
    const selectedColor = e.target.value;

    setBGColor(selectedColor);
    document.documentElement.style.setProperty('--bg-color', selectedColor);
  }

  return (
    <>
      <main className="main-container">
        <div className="title-holder">
          <h1 className="header">React Epic Spinners</h1>
          <h5 className="sub-header">
            React Implementation of &nbsp;
            <a
              className="link"
              href="http://epic-spinners.epicmax.co/"
              target="_blank"
            >
              Epic Spinners
            </a>
          </h5>

          <div className="get-started">
            <div className="get-started__docs">
              <h4>Get started</h4>
              <a
                href="https://github.com/bondz/react-epic-spinners"
                className="docs"
              >
                Docs
              </a>
            </div>
            <div className="get-started-code">
              <p>npm install react-epic-spinners</p>
              <p>yarn add react-epic-spinners</p>
              <div>
                <label>
                  BG:
                  <input
                    type="color"
                    value={bgColor}
                    onChange={changePageBGColor}
                  />
                </label>
                <label>
                  Color:
                  <input
                    type="color"
                    value={color}
                    onChange={changeSpinnerColor}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <Spinners color={color} />
      </main>
      <footer>
        <h4>
          By &nbsp;
          <a className="link" href="https://github.com/bondz">
            @bondz
          </a>
        </h4>
        <p>
          This project is an implementation of the &nbsp;
          <a
            className="link"
            href="https://github.com/epicmaxco/epic-spinners"
            target="_blank"
            rel="noopener noreferrer"
          >
            Epic Spinners
          </a>
          &nbsp; project created by &nbsp;
          <a
            className="link"
            href="https://github.com/epicmaxco"
            target="_blank"
            rel="noopener noreferrer"
          >
            EpicMax
          </a>
        </p>
      </footer>
    </>
  );
}

function Spinners({ color }) {
  return (
    <>
      <div className="spinner-holder">
        <div className="spinner-element">
          <AtomSpinner color={color} size={70} animationDuration={2000} />
        </div>
        <div className="name">Atom</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <BreedingRhombusSpinner
            color={color}
            size={65}
            animationDuration={2000}
          />
        </div>
        <div className="name">Breeding Rhombus</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <CirclesToRhombusesSpinner
            color={color}
            circleSize={15}
            circlesNum={3}
            animationDuration={1200}
          />
        </div>
        <div className="name">Circles to rhumbuses</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <FingerprintSpinner
            color={color}
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Fingerprint</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FlowerSpinner color={color} size={70} animationDuration={1200} />
        </div>
        <div className="name">Flower</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FulfillingBouncingCircleSpinner
            color={color}
            size={70}
            animationDuration={2000}
          />
        </div>
        <div className="name">Fulfilling Bouncing Circle</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FulfillingSquareSpinner
            color={color}
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Fulfilling Square</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <HalfCircleSpinner color={color} size={70} animationDuration={1400} />
        </div>
        <div className="name">Half Circle</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <HollowDotsSpinner
            color={color}
            dotSize={15}
            dotsNum={3}
            animationDuration={1400}
          />
        </div>
        <div className="name">Hollow Dots</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <IntersectingCirclesSpinner
            color={color}
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Intersecting Circles</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <LoopingRhombusesSpinner
            color={color}
            rhombusSize={15}
            animationDuration={1200}
          />
        </div>
        <div className="name">Looping Rhombuses</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <OrbitSpinner color={color} size={55} animationDuration={1400} />
        </div>
        <div className="name">Orbit</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <PixelSpinner color={color} size={70} animationDuration={1400} />
        </div>
        <div className="name">Pixel</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <RadarSpinner size={70} color={color} animationDuration={1200} />
        </div>
        <div className="name">Radar</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <ScalingSquaresSpinner
            color={color}
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Scaling Squares</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SelfBuildingSquareSpinner
            color={color}
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Self Building Square</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SemipolarSpinner color={color} size={70} animationDuration={1400} />
        </div>
        <div className="name">SemiPolar</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SpringSpinner color={color} size={70} animationDuration={1400} />
        </div>
        <div className="name">Spring</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SwappingSquaresSpinner
            color={color}
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Swapping Squares</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <TrinityRingsSpinner
            color={color}
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Trinity Rings</div>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
