import React, {useEffect, useRef} from 'react';
import { fabric } from 'fabric';
import {StaticCanvas} from "fabric/fabric-impl";

export const CanvasWrapper: React.FC = () => {
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  let canvas: fabric.Canvas;
  let test: any;

  const fabricInit = () => {
    canvas = new fabric.Canvas('test');
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
      angle: 45,
    });
    const circle = new fabric.Circle({
      radius: 20, fill: 'green', left: 100, top: 100
    });
    const triangle = new fabric.Triangle({
      width: 20, height: 30, fill: 'blue', left: 50, top: 50
    });

    canvas.add(rect, circle, triangle);
    console.log({ canvas });
    rect.set('fill', 'red');
    rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
    rect.set('angle', 15).set('flipY', true);
    // 更新
    // rect.set({ left: 20, top: 50 });
    // canvas.renderAll();
    console.log({ canvas });
  }

  const fabricInit2 = () => {
    canvas = new fabric.Canvas('test');
    const rect = new fabric.Rect();
    canvas.add(rect);
    console.log({
      a: rect.get('width'),
      b: rect.get('height'),
      c: rect.get('left'),
      d: rect.get('top'),
      e: rect.get('fill'),
      f: rect.get('stroke'),
      g: rect.get('opacity'),
    });
    rect.set('width', 10).set('height', 10);
  };

  // 共通拡張
  const fabricInit3 = () => {
    type Hoge = fabric.Object & { getAngleInRadians: any };
    (fabric.Object.prototype as Hoge).getAngleInRadians = function() {
      return (this as any).get('angle') / 180 * Math.PI;
    };
    canvas = new fabric.Canvas('test');
    const rect = new fabric.Rect({ width: 20, height: 20, angle: 45 });
    console.log((rect as any).getAngleInRadians());
    canvas.add(rect);
  };

  const fabricInit4 = () => {
    canvas = new fabric.Canvas('test'); // 第荷引数でcanvasの設定できるよ
    const rect = new fabric.Rect();
    const rect2 = new fabric.Rect();
    canvas.add(rect, rect2);
    console.log(canvas.item(0)); // 最初に追加されたobj
    console.log(canvas.getObjects()); // すべてのobj
    canvas.remove(rect); // 消す;
    console.log(canvas.getObjects());
  };

  useEffect(() => {
    if (canvasWrapperRef.current) {
      const canvasElement = document.createElement('canvas');
      canvasElement.id = 'test';
      canvasWrapperRef.current.appendChild(canvasElement);
      fabricInit4();
    }
  }, [canvasWrapperRef, fabricInit]);

  return <div id="hoge" ref={canvasWrapperRef} />;
};
