import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Semipolar = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(${props => props.size}px * 0.05) solid transparent;
    border-top-color: ${props => props.color};
    border-left-color: ${props => props.color};
    animation: semipolar-spinner-animation ${props => props.animationDuration}ms
      infinite;
  }
  .ring:nth-child(1) {
    height: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 0);
    width: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 0);
    top: calc(${props => props.size}px * 0.1 * 0);
    left: calc(${props => props.size}px * 0.1 * 0);
    animation-delay: calc(${props => props.animationDuration}ms * 0.1 * 4);
    z-index: 5;
  }
  .ring:nth-child(2) {
    height: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 1);
    width: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 1);
    top: calc(${props => props.size}px * 0.1 * 1);
    left: calc(${props => props.size}px * 0.1 * 1);
    animation-delay: calc(${props => props.animationDuration}ms * 0.1 * 3);
    z-index: 4;
  }
  .ring:nth-child(3) {
    height: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 2);
    width: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 2);
    top: calc(${props => props.size}px * 0.1 * 2);
    left: calc(${props => props.size}px * 0.1 * 2);
    animation-delay: calc(${props => props.animationDuration}ms * 0.1 * 2);
    z-index: 3;
  }
  .ring:nth-child(4) {
    height: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 3);
    width: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 3);
    top: calc(${props => props.size}px * 0.1 * 3);
    left: calc(${props => props.size}px * 0.1 * 3);
    animation-delay: calc(${props => props.animationDuration}ms * 0.1 * 1);
    z-index: 2;
  }
  .ring:nth-child(5) {
    height: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 4);
    width: calc(${props => props.size}px - ${props => props.size}px * 0.2 * 4);
    top: calc(${props => props.size}px * 0.1 * 4);
    left: calc(${props => props.size}px * 0.1 * 4);
    animation-delay: calc(${props => props.animationDuration}ms * 0.1 * 0);
    z-index: 1;
  }
  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.7);
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
  size: 65,
  color: '#fff',
  animationDuration: 2000,
  className: '',
};

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="ring" />
  ));
}

const SemipolarSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <Semipolar
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`semipolar-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}
  >
    {generateSpinners(5)}
  </Semipolar>
);

SemipolarSpinner.propTypes = propTypes;
SemipolarSpinner.defaultProps = defaultProps;

export default SemipolarSpinner;
