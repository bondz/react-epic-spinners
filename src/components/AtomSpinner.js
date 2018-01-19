import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Atom = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .spinner-circle {
    display: block;
    position: absolute;
    color: ${props => props.color};
    font-size: calc(${props => props.size}px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: ${props => props.animationDuration}ms;
    border-left-width: calc(${props => props.size}px / 25);
    border-top-width: calc(${props => props.size}px / 25);
    border-left-color: ${props => props.color};
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
  }

  .spinner-line:nth-child(1) {
    animation: atom-spinner-animation-1 ${props => props.animationDuration}ms
      linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(2) {
    animation: atom-spinner-animation-2 ${props => props.animationDuration}ms
      linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(3) {
    animation: atom-spinner-animation-3 ${props => props.animationDuration}ms
      linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
`;

const propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  size: 60,
  color: 'red',
  animationDuration: 1000,
  className: '',
};

export const AtomSpinner = ({
  size,
  animationDuration,
  color,
  className,
  style,
  ...props
}) => (
  <Atom
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`atom-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}
  >
    <div className="spinner-inner">
      <div className="spinner-line" />
      <div className="spinner-line" />
      <div className="spinner-line" />
      {/* Chrome renders little circles malformed */}
      <div className="spinner-circle">&#9679;</div>
    </div>
  </Atom>
);

AtomSpinner.propTypes = propTypes;
AtomSpinner.defaultProps = defaultProps;

export default AtomSpinner;
