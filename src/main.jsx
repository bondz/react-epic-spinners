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
            </div>
          </div>
        </div>

        <Spinners />
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

function Spinners() {
  return (
    <>
      <div className="spinner-holder">
        <div className="spinner-element">
          <AtomSpinner color="#ff1d5e" size={70} animationDuration={2000} />
        </div>
        <div className="name">Atom</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <BreedingRhombusSpinner
            color="#ff1d5e"
            size={65}
            animationDuration={2000}
          />
        </div>
        <div className="name">Breeding Rhombus</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <CirclesToRhombusesSpinner
            color="#ff1d5e"
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
            color="#ff1d5e"
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Fingerprint</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FlowerSpinner color="#ff1d5e" size={70} animationDuration={1200} />
        </div>
        <div className="name">Flower</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FulfillingBouncingCircleSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={2000}
          />
        </div>
        <div className="name">Fulfilling Bouncing Circle</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <FulfillingSquareSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Fulfilling Square</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <HalfCircleSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Half Circle</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <HollowDotsSpinner
            color="#ff1d5e"
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
            color="#ff1d5e"
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Intersecting Circles</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <LoopingRhombusesSpinner
            color="#ff1d5e"
            rhombusSize={15}
            animationDuration={1200}
          />
        </div>
        <div className="name">Looping Rhombuses</div>
      </div>
      <div className="spinner-holder">
        <div className="spinner-element">
          <OrbitSpinner color="#ff1d5e" size={55} animationDuration={1400} />
        </div>
        <div className="name">Orbit</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <PixelSpinner color="#ff1d5e" size={70} animationDuration={1400} />
        </div>
        <div className="name">Pixel</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <RadarSpinner size={70} color="#ff1d5e" animationDuration={1200} />
        </div>
        <div className="name">Radar</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <ScalingSquaresSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1200}
          />
        </div>
        <div className="name">Scaling Squares</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SelfBuildingSquareSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Self Building Square</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SemipolarSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">SemiPolar</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SpringSpinner color="#ff1d5e" size={70} animationDuration={1400} />
        </div>
        <div className="name">Spring</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <SwappingSquaresSpinner
            color="#ff1d5e"
            size={70}
            animationDuration={1400}
          />
        </div>
        <div className="name">Swapping Squares</div>
      </div>

      <div className="spinner-holder">
        <div className="spinner-element">
          <TrinityRingsSpinner
            color="#ff1d5e"
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
