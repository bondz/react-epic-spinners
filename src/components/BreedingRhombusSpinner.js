import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreedingSpinner = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  transform: rotate(45deg);

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: calc(${props => props.size}px / 7.5);
    width: calc(${props => props.size}px / 7.5);
    animation-duration: ${props => props.animationDuration}ms;
    top: calc(${props => props.size}px / 2.3077);
    left: calc(${props => props.size}px / 2.3077);
    background-color: ${props => props.color};
    position: absolute;
    animation-iteration-count: infinite;
  }

  .rhombus:nth-child(2n + 0) {
    margin-right: 0;
  }

  .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(${props => props.delayModifier}ms * 1);
  }

  .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(${props => props.delayModifier}ms * 2);
  }

  .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(${props => props.delayModifier}ms * 3);
  }

  .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(${props => props.delayModifier}ms * 4);
  }

  .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(${props => props.delayModifier}ms * 5);
  }

  .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(${props => props.delayModifier}ms * 6);
  }

  .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(${props => props.delayModifier}ms * 7);
  }

  .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(${props => props.delayModifier}ms * 8);
  }

  .rhombus.big {
    height: calc(${props => props.size}px / 3);
    width: calc(${props => props.size}px / 3);
    animation-duration: ${props => props.animationDuration}ms;
    top: calc(${props => props.size}px / 3);
    left: calc(${props => props.size}px / 3);
    background-color: ${props => props.color};
    animation: breeding-rhombus-spinner-animation-child-big
      ${props => props.animationDuration} infinite;
    animation-delay: 0.5s;
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
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
  size: 150,
  color: '#fff',
  animationDuration: 2000,
  className: '',
};

function generateRhombusChildren(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className={`rhombus child-${index + 1}`} />
  ));
}

const BreedingRhombusSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <BreedingSpinner
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`breeding-rhombus-spinner${className ? ' ' + className : ''}`}
    style={style}
    delayModifier={animationDuration * 0.05}
    {...props}
  >
    {generateRhombusChildren(8)}
    <div className="rhombus big" />
  </BreedingSpinner>
);

BreedingRhombusSpinner.propTypes = propTypes;
BreedingRhombusSpinner.defaultProps = defaultProps;

export default BreedingRhombusSpinner;
