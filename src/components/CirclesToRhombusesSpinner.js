import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CircleRhombus = styled.div`
  height: ${props => props.size}px;
  width: ${props => (props.size + props.circleMarginLeft) * props.circleNum}px;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .circle {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    margin-left: ${props => props.circleMarginLeft}px;
    transform: rotate(45deg);
    border-radius: 10%;
    border: 3px solid ${props => props.color};
    overflow: hidden;
    background: transparent;
    animation: circles-to-rhombuses-animation
      ${props => props.animationDuration}ms linear infinite;
  }
  .circle:nth-child(1) {
    animation-delay: calc(${props => props.delay}ms * 1);
    margin-left: 0;
  }
  .circle:nth-child(2) {
    animation-delay: calc(${props => props.delay}ms * 2);
  }
  .circle:nth-child(3) {
    animation-delay: calc(${props => props.delay}ms * 3);
  }
  @keyframes circles-to-rhombuses-animation {
    0% {
      border-radius: 10%;
    }
    17.5% {
      border-radius: 10%;
    }
    50% {
      border-radius: 100%;
    }
    93.5% {
      border-radius: 10%;
    }
    100% {
      border-radius: 10%;
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
  animationDuration: 1200,
  className: '',
};

function generateRhombusChildren(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="circle" />
  ));
}

const CirclesToRhombusesSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const circleMarginLeft = size * 1.125;
  const circleNum = 3;
  const delay = 150;

  return (
    <CircleRhombus
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`circles-to-rhombuses-spinner${
        className ? ' ' + className : ''
      }`}
      style={style}
      circleMarginLeft={circleMarginLeft}
      delay={delay}
      circleNum={circleNum}
      {...props}
    >
      {generateRhombusChildren(circleNum)}
    </CircleRhombus>
  );
};
CirclesToRhombusesSpinner.propTypes = propTypes;
CirclesToRhombusesSpinner.defaultProps = defaultProps;

export default CirclesToRhombusesSpinner;
