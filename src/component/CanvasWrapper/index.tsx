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
      height: 20
    });
    canvas.add(rect);
    console.log({ canvas });
  }

  useEffect(() => {
    if (canvasWrapperRef.current) {
      const canvasElement = document.createElement('canvas');
      canvasElement.id = 'test';
      canvasWrapperRef.current.appendChild(canvasElement);
      fabricInit();
    }
  }, [canvasWrapperRef, fabricInit]);

  const check = () => {
    test = canvas.toJSON();
    console.log(canvas.toJSON());
  };

  const add = () => {
    canvas.loadFromJSON(test, () => { console.log('load') });
  }

  const add2 = () => {
    const rect = new fabric.Rect({
      left: 50,
      top: 100,
      fill: 'green',
      width: 80,
      height: 20
    });
    canvas.add(rect)
  }

  const update = () => {
    // 選択する
    const a = canvas.item(0);
    if (a instanceof fabric.Object)
      canvas.setActiveObject(a);
    // 選択中のobject
    const hoge = canvas.getActiveObject();
    hoge.set('fill', 'blue');
    canvas.renderAll();
  }

  return <div id="hoge" ref={canvasWrapperRef}>
    <button onClick={check}>check</button>
    <button onClick={add}>add</button>
    <button onClick={add2}>add2</button>
    <button onClick={update}>update</button>
  </div>;
};
