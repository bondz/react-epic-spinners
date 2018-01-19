import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Radar = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: radar-spinner-animation ${props => props.animationDuration}ms
      infinite;
  }
  .circle:nth-child(1) {
    padding: ${props => props.borderWidth * 2 * 0}px;
    animation-delay: ${props => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(2) {
    padding: ${props => props.borderWidth * 2 * 1}px;
    animation-delay: ${props => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(3) {
    padding: ${props => props.borderWidth * 2 * 2}px;
    animation-delay: ${props => props.animationDuration * 0.15}ms;
  }
  .circle:nth-child(4) {
    padding: ${props => props.borderWidth * 2 * 3}px;
    animation-delay: 0ms;
  }
  .circle-inner,
  .circle-inner-container {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: ${props => props.borderWidth}px solid transparent;
  }
  .circle-inner {
    border-left-color: ${props => props.color};
    border-right-color: ${props => props.color};
  }
  @keyframes radar-spinner-animation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
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
  size: 110,
  color: '#fff',
  animationDuration: 2000,
  className: '',
};

function generateSpinners(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className="circle">
      <div className="circle-inner-container">
        <div className="circle-inner" />
      </div>
    </div>
  ));
}

const RadarSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const borderWidth = size * 5 / 110;

  return (
    <Radar
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`radar-spinner${className ? ' ' + className : ''}`}
      style={style}
      borderWidth={borderWidth}
      {...props}
    >
      {generateSpinners(4)}
    </Radar>
  );
};

RadarSpinner.propTypes = propTypes;
RadarSpinner.defaultProps = defaultProps;

export default RadarSpinner;
