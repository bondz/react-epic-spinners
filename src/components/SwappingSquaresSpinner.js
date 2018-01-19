import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwappingSquare = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(${props => props.size}px * 0.25 / 1.3);
    width: calc(${props => props.size}px * 0.25 / 1.3);
    animation-duration: ${props => props.animationDuration}ms;
    border: calc(${props => props.size}px * 0.04 / 1.3) solid
      ${props => props.color};
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: swapping-squares-animation-child-1;
    animation-delay: ${props => props.animationDuration * 0.5}ms;
  }
  .square:nth-child(2) {
    animation-name: swapping-squares-animation-child-2;
    animation-delay: 0ms;
  }
  .square:nth-child(3) {
    animation-name: swapping-squares-animation-child-3;
    animation-delay: ${props => props.animationDuration * 0.5}ms;
  }
  .square:nth-child(4) {
    animation-name: swapping-squares-animation-child-4;
    animation-delay: 0ms;
  }
  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
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
  animationDuration: 1000,
  className: '',
};

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="square" />
  ));
}

const SwappingSquaresSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <SwappingSquare
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`swapping-squares-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}
  >
    {generateSpinners(4)}
  </SwappingSquare>
);

SwappingSquaresSpinner.propTypes = propTypes;
SwappingSquaresSpinner.defaultProps = defaultProps;

export default SwappingSquaresSpinner;
