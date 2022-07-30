import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Igradient {
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number, y: number };
  angle?: number;
  children: JSX.Element | JSX.Element[];
  style: object;
}
export const Gradient = ({
  children,
  colors,
  start,
  end,
  locations,
  useAngle,
  angleCenter,
  angle,
  style
}: Igradient) => {
  return <LinearGradient style={style}
    useAngle={useAngle} start={start} end={end}
    angleCenter={angleCenter} angle={angle}
    locations={locations} colors={colors}>
    {children}
  </LinearGradient>;
};
