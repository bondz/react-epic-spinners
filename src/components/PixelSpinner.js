import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pixels = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .pixel-spinner-inner {
    width: ${props => props.pixelSize}px;
    height: ${props => props.pixelSize}px;
    background-color: ${props => props.color};
    color: ${props => props.color};

    box-shadow:
      ${props => props.pixelSize * 1.5}px ${props => props.pixelSize * 1.5}px 0 0,
      ${props => props.pixelSize * -1.5}px ${props => props.pixelSize * -1.5}px 0 0,
      ${props => props.pixelSize * 1.5}px ${props => props.pixelSize * -1.5}px 0 0,
      ${props => props.pixelSize * -1.5}px ${props => props.pixelSize * 1.5}px 0 0,
      0 ${props => props.pixelSize * 1.5}px 0 0,
      ${props => props.pixelSize * 1.5}px 0 0 0,
      ${props => props.pixelSize * -1.5}px 0 0 0,
      0 ${props => props.pixelSize * -1.5}px 0 0;
    animation: pixel-spinner-animation ${props => props.animationDuration}ms
      linear infinite;
  }

  @keyframes pixel-spinner-animation {
    50% {
      box-shadow:
        ${props => props.pixelSize * 2}px ${props => props.pixelSize * 2}px 0 0,
        ${props => props.pixelSize * -2}px ${props => props.pixelSize * -2}px 0 0,
        ${props => props.pixelSize * 2}px ${props => props.pixelSize * -2}px 0 0,
        ${props => props.pixelSize * -2}px ${props => props.pixelSize * 2}px 0 0,
        0 ${props => props.pixelSize}px 0 0, ${props => props.pixelSize}px 0 0 0,
        ${props => props.pixelSize * -1}px 0 0 0,
        0 ${props => props.pixelSize * -1}px 0 0;
    }
    75% {
      box-shadow:
        ${props => props.pixelSize * 2}px ${props => props.pixelSize * 2}px 0 0,
        ${props => props.pixelSize * -2}px ${props => props.pixelSize * -2}px 0 0,
        ${props => props.pixelSize * 2}px ${props => props.pixelSize * -2}px 0 0,
        ${props => props.pixelSize * -2}px ${props => props.pixelSize * 2}px 0 0,
        0 ${props => props.pixelSize}px 0 0, ${props => props.pixelSize}px 0 0 0,
        ${props => props.pixelSize * -1}px 0 0 0,
        0 ${props => props.pixelSize * -1}px 0 0;
    }
    100% {
      transform: rotate(360deg);
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
  animationDuration: 1500,
  className: '',
};

const PixelSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => {
  const pixelSize = size / 7;

  return (
    <Pixels
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`pixel-spinner${className ? ' ' + className : ''}`}
      style={style}
      pixelSize={pixelSize}
      {...props}
    >
      <div className="pixel-spinner-inner" />
    </Pixels>
  );
};

PixelSpinner.propTypes = PropTypes;
PixelSpinner.defaultProps = defaultProps;

export default PixelSpinner;
