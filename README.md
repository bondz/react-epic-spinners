# React Epic Spinners

<p align="center">
  <a href="https://www.npmjs.com/package/react-epic-spinners">
    <img src="https://img.shields.io/npm/v/react-epic-spinners.svg" alt="npm version" />
  </a>
  <a href="https://github.com/bondz/react-epic-spinners/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/react-epic-spinners.svg" alt="license" />
  </a>
  <a href="https://snyk.io/test/github/bondz/react-epic-spinners">
    <img src="https://snyk.io/test/github/bondz/react-epic-spinners/badge.svg" alt="Vulnerability status" />
  </a>
</p>

This library is the React implementation of Vue [epic-spinners](http://epic-spinners.epicmax.co/) by [EpicMax](https://github.com/epicmaxco/epic-spinners)

[Epic Spinners with Bit](https://bitsrc.io/bondz/react-epic-spinners) - Disocver, play and install spinners.
![scope preview](https://storage.googleapis.com/bit-assets/epic_spinners.png)
## Installation

Using NPM

```bash
npm install react-epic-spinners
```

Or Yarn

```bash
yarn add react-epic-spinners
```

## Demo

An online demo is available [here](https://bondz.github.io/react-epic-spinners/)

## Usage

All components accept the following props

* `size` `[number]`: (optional) specifies how large the spinner should be rendered
* `color` `[string]`: (optional) defaults to `#fff`. Specifies the color of the spinner.
* `animationDelay` `[number]`: (optional) specifies the timing of the spinner animation. Lower numbers mean the animations restart faster.
* `className` `[string]`: (optional) add any additional class you want to the component
* `style` `[object]`: (optional) a react component style object to additionally style the component

### Examples

```jsx
import { AtomSpinner } from 'react-epic-spinners'

// In your render function or SFC return
<AtomSpinner color="red">
```

## Components

> All components are named exports of the package.

```jsx
import { ... } from 'react-epic-spinners'
```

* [AtomSpinner](/src/components/AtomSpinner.js)
* [BreedingRhombusSpinner](/src/components/BreedingRhombusSpinner.js)
* [CirclesToRhombusesSpinner](/src/components/CirclesToRhombusesSpinner.js)
* [FingerprintSpinner](/src/components/FingerprintSpinner.js)
* [FlowerSpinner](/src/components/FlowerSpinner.js)
* [FulfillingBouncingCircleSpinner](/src/components/FulfillingBouncingCircleSpinner.js)
* [FulfillingSquareSpinner](/src/components/FulfillingSquareSpinner.js)
* [HalfCircleSpinner](/src/components/HalfCircleSpinner.js)
* [HollowDotsSpinner](/src/components/HollowDotsSpinner.js)
* [IntersectingCirclesSpinner](/src/components/IntersectingCirclesSpinner.js)
* [LoopingRhombusesSpinner](/src/components/LoopingRhombusesSpinner.js)
* [OrbitSpinner](/src/components/OrbitSpinner.js)
* [PixelSpinner](/src/components/PixelSpinner.js)
* [RadarSpinner](/src/components/RadarSpinner.js)
* [ScalingSquaresSpinner](/src/components/ScalingSquaresSpinner.js)
* [SelfBuildingSquareSpinner](/src/components/SelfBuildingSquareSpinner.js)
* [SemipolarSpinner](/src/components/SemipolarSpinner.js)
* [SpringSpinner](/src/components/SpringSpinner.js)
* [SwappingSquaresSpinner](/src/components/SwappingSquaresSpinner.js)
* [TrinityRingsSpinner](/src/components/TrinityRingsSpinner.js)

### Known Issues

Because of some bugs with `flexbox` on Firefox, the following components may not render properly

* ScalingSquaresSpinner
* SwappingSquaresSpinner
* TrinityRingsSpinner

If you know a fix for it, please send a PR :)

## License

[MIT](LICENSE).
