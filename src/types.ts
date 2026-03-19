import type { CSSProperties, HTMLAttributes } from "react";

export interface EpicSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  animationDuration?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}
