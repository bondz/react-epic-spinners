import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BuildingSquare = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  top: ${props => -1 * props.initialTopPosition}px;

  * {
    box-sizing: border-box;
  }

  .square {
    height: ${props => props.size / 4}px;
    width: ${props => props.size / 4}px;
    top: ${props => -1 * props.initialTopPosition}px;
    margin-right: calc(${props => props.size / 4}px / 3);
    margin-top: calc(${props => props.size / 4}px / 3);
    background: ${props => props.color};
    float: left;
    position: relative;
    opacity: 0;
    animation: self-building-square-spinner
      ${props => props.animationDuration}ms infinite;
  }
  .square:nth-child(1) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 6);
  }
  .square:nth-child(2) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 7);
  }
  .square:nth-child(3) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 8);
  }
  .square:nth-child(4) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 3);
  }
  .square:nth-child(5) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 4);
  }
  .square:nth-child(6) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 5);
  }
  .square:nth-child(7) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 0);
  }
  .square:nth-child(8) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 1);
  }
  .square:nth-child(9) {
    animation-delay: calc(${props => props.animationDuration * 0.05}ms * 2);
  }
  .clear {
    clear: both;
  }
  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
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
  size: 40,
  color: '#fff',
  animationDuration: 6000,
  className: '',
};

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className={`square${index % 3 === 0 ? ' clear' : ''}`} />
  ));
}

const SelfBuildingSquareSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const initialTopPosition = size / 6;

  return (
    <BuildingSquare
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`self-building-square-spinner${
        className ? ' ' + className : ''
      }`}
      style={style}
      initialTopPosition={initialTopPosition}
      {...props}
    >
      {generateSpinners(9)}
    </BuildingSquare>
  );
};

SelfBuildingSquareSpinner.propTypes = propTypes;
SelfBuildingSquareSpinner.defaultProps = defaultProps;

export default SelfBuildingSquareSpinner;
