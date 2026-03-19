import type { EpicSpinnerProps } from "../types";
import styled from "styled-components";

const Orbit = styled.div<EpicSpinnerProps>`
  height: ${(props) => props.size!}px;
  width: ${(props) => props.size!}px;
  border-radius: 50%;
  perspective: 800px;

  * {
    box-sizing: border-box;
  }

  .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .orbit:nth-child(1) {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation ${(props) => props.animationDuration!}ms linear
      infinite;
    border-bottom: 3px solid ${(props) => props.color!};
  }
  .orbit:nth-child(2) {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation ${(props) => props.animationDuration!}ms linear
      infinite;
    border-right: 3px solid ${(props) => props.color!};
  }
  .orbit:nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation ${(props) => props.animationDuration!}ms linear
      infinite;
    border-top: 3px solid ${(props) => props.color!};
  }
  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`;

function OrbitSpinner({
  size = 50,
  color = "#fff",
  animationDuration = 1000,
  className = "",
  style,
  ...props
}: EpicSpinnerProps) {
  return (
    <Orbit
      size={size}
      color={color}
      animationDuration={animationDuration}
      className={`orbit-spinner${className ? " " + className : ""}`}
      style={style}
      {...props}
    >
      <div className="orbit one" />
      <div className="orbit two" />
      <div className="orbit three" />
    </Orbit>
  );
}

export default OrbitSpinner;
