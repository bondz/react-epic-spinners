import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spring = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  * {
    box-sizing: border-box;
  }

  .spring-spinner-part {
    overflow: hidden;
    height: calc(${props => props.size}px / 2);
    width: ${props => props.size}px;
  }
  .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }
  .spring-spinner-rotator {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: calc(${props => props.size}px / 7) solid transparent;
    border-right-color: ${props => props.color};
    border-top-color: ${props => props.color};
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation ${props => props.animationDuration}ms
      ease-in-out infinite;
    transform: rotate(-200deg);
  }
  @keyframes spring-spinner-animation {
    0% {
      border-width: calc(${props => props.size}px / 7);
    }
    25% {
      border-width: calc(${props => props.size}px / 23.33);
    }
    50% {
      transform: rotate(115deg);
      border-width: calc(${props => props.size}px / 7);
    }
    75% {
      border-width: calc(${props => props.size}px / 23.33);
    }
    100% {
      border-width: calc(${props => props.size}px / 7);
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
  animationDuration: 3000,
  className: '',
};

const SpringSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <Spring
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`spring-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}
  >
    <div className="spring-spinner-part top">
      <div className="spring-spinner-rotator" />
    </div>
    <div className="spring-spinner-part bottom">
      <div className="spring-spinner-rotator" />
    </div>
  </Spring>
);

SpringSpinner.propTypes = propTypes;
SpringSpinner.defaultProps = defaultProps;

export default SpringSpinner;
