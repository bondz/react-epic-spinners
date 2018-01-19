import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingRhombus = styled.div`
  width: ${props => props.size * 4}px;
  height: ${props => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    background-color: ${props => props.color};
    left: ${props => props.size * 4}px;
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation
      ${props => props.animationDuration}ms linear infinite;
  }
  .rhombus:nth-child(1) {
    animation-delay: calc(${props => props.animationDuration}ms * 1 / -1.5);
  }
  .rhombus:nth-child(2) {
    animation-delay: calc(${props => props.animationDuration}ms * 2 / -1.5);
  }
  .rhombus:nth-child(3) {
    animation-delay: calc(${props => props.animationDuration}ms * 3 / -1.5);
  }
  @keyframes looping-rhombuses-spinner-animation {
    0% {
      transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
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
  size: 15,
  color: '#fff',
  animationDuration: 2500,
  className: '',
};

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="rhombus" />
  ));
}

const LoopingRhombusesSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const num = 3;

  return (
    <LoadingRhombus
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`looping-rhombuses-spinner${className ? ' ' + className : ''}`}
      style={style}
      {...props}
    >
      {generateSpinners(num)}
    </LoadingRhombus>
  );
};

LoopingRhombusesSpinner.propTypes = propTypes;
LoopingRhombusesSpinner.defaultProps = defaultProps;

export default LoopingRhombusesSpinner;
