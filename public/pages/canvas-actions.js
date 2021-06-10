import CanvasFreeDrawing from '../../lib/canvas-free-drawing.js';

let canvas;
let el;

export function createDrawingCanvas(element) {
    el = element;
    canvas = new CanvasFreeDrawing({
        elementId: element.id,
        width: element.clientWidth,
        height: element.clientHeight,
    });
    return canvas;
}

export function getCurrentDrawing() {
    return el.toDataURL();
}

export function clearCanvas() {
    canvas.clear();
}