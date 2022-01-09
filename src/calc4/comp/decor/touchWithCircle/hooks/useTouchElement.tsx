import { useState, useRef } from "react";

type Coord = [number, number];

interface IuseTouchElement {
  isTouch: boolean;
  xy: Coord;
  radius: number;
  ref: React.RefObject<HTMLDivElement>;
  mouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  mouseUp: () => void;
  touchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
}

const useTouchElement = (): IuseTouchElement => {
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const [xy, setXY] = useState<Coord>([0, 0]);
  const [radius, setRadius] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current !== null && e.button === 0) {
      const { x, y, width, height } = ref.current.getBoundingClientRect();
      const r = Math.sqrt(width * width + height * height);
      setXY([e.clientX - x - r, e.clientY - y - r]);
      setRadius(r);
      setIsTouch(true);
    }
  };

  const mouseUp = () => {
    if (isTouch) setIsTouch(false);
  };

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (ref.current !== null) {
      const { x, y, width, height } = ref.current.getBoundingClientRect();
      const r = Math.sqrt(width * width + height * height);
      setXY([e.touches[0].clientX - x - r, e.touches[0].clientY - y - r]);
      setRadius(r);
      setIsTouch(true);
    }
  };

  return {
    isTouch,
    xy,
    radius,
    ref,
    mouseDown,
    mouseUp,
    touchStart
  };
};

export default useTouchElement;
