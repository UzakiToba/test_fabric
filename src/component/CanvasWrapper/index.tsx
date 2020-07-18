import React, {useEffect, useRef} from 'react';
import { fabric } from 'fabric';

export const CanvasWrapper: React.FC = () => {
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (canvasWrapperRef.current) {
      const canvasElement = document.createElement('canvas');
      canvasElement.id = 'test';
      canvasWrapperRef.current.appendChild(canvasElement);
      fabricInit();
    }
  }, [canvasWrapperRef]);

  const fabricInit = () => {
    const canvas = new fabric.Canvas('test');
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    canvas.add(rect);
  }

  return <div ref={canvasWrapperRef}>test</div>;
};
