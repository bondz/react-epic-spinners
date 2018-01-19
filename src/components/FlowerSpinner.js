import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flower = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .dots-container {
    height: ${props => props.dotSize}px;
    width: ${props => props.dotSize}px;
  }
  .smaller-dot {
    background: ${props => props.color};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: flower-spinner-smaller-dot-animation
      ${props => props.animationDuration}ms 0s infinite both;
  }
  .bigger-dot {
    background: ${props => props.color};
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation: flower-spinner-bigger-dot-animation
      ${props => props.animationDuration}ms 0s infinite both;
  }
  @keyframes flower-spinner-bigger-dot-animation {
    0%,
    100% {
      box-shadow:
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color};
    }
    50% {
      transform: rotate(180deg);
    }
    25%,
    75% {
      box-shadow:
        ${props => props.dotSize * 2.6}px 0 0 ${props => props.color},
        -${props => props.dotSize * 2.6}px 0 0 ${props => props.color},
        0 ${props => props.dotSize * 2.6}px 0 ${props => props.color},
        0 -${props => props.dotSize * 2.6}px 0 ${props => props.color},
        ${props => props.dotSize * 1.9}px -${props => props.dotSize * 1.9}px 0 ${props => props.color},
        ${props => props.dotSize * 1.9}px ${props => props.dotSize * 1.9}px 0 ${props => props.color},
        -${props => props.dotSize * 1.9}px -${props => props.dotSize * 1.9}px 0 ${props => props.color},
        -${props => props.dotSize * 1.9}px ${props => props.dotSize * 1.9}px 0 ${props => props.color};
    }
    100% {
      transform: rotate(360deg);
      box-shadow:
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color};
    }
  }
  @keyframes flower-spinner-smaller-dot-animation {
    0%,
    100% {
      box-shadow:
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color};
    }
    25%,
    75% {
      box-shadow:
        ${props => props.dotSize * 1.4}px 0 0 ${props => props.color},
        -${props => props.dotSize * 1.4}px 0 0 ${props => props.color},
        0 ${props => props.dotSize * 1.4}px 0 ${props => props.color},
        0 -${props => props.dotSize * 1.4}px 0 ${props => props.color},
        ${props => props.dotSize}px -${props => props.dotSize}px 0 ${props => props.color},
        ${props => props.dotSize}px ${props => props.dotSize}px 0 ${props => props.color},
        -${props => props.dotSize}px -${props => props.dotSize}px 0 ${props => props.color},
        -${props => props.dotSize}px ${props => props.dotSize}px 0 ${props => props.color};
    }
    100% {
      box-shadow:
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color},
        0px 0px 0px ${props => props.color};
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
  size: 70,
  color: '#fff',
  animationDuration: 2500,
  className: '',
};

const FlowerSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const dotSize = size / 7;

  return (
    <Flower
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`flower-spinner${className ? ' ' + className : ''}`}
      style={style}
      dotSize={dotSize}
      {...props}
    >
      <div className="dots-container">
        <div className="bigger-dot">
          <div className="smaller-dot" />
        </div>
      </div>
    </Flower>
  );
};

FlowerSpinner.propTypes = propTypes;
FlowerSpinner.defaultProps = defaultProps;

export default FlowerSpinner;
