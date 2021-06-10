import { DRAW_INTERVAL_MS } from '../../shared/conf.js';
import { fetchDrawing, putDrawing } from '../../shared/api.js';
import { isDrawer } from './game-status.js';
import { createDrawingCanvas, getCurrentDrawing, clearCanvas } from './canvas-actions.js';

const drawCanvas = document.querySelector('.draw_canvas');
const showImg = document.querySelector('.show_canvas');

export function initGameDrawing() {
    createDrawingCanvas(drawCanvas);
    startDrawingLoop();
    updateDrawing();
}

export function showCanvas() {
    drawCanvas.style.display = 'block';
}

export function hideCanvas() {
    drawCanvas.style.display = 'none';
    clearCanvas();
}

export function showDrawingImage() {
    showImg.style.display = 'block';
}

export function hideDrawingImage() {
    showImg.style.display = 'none';
}

async function updateDrawing() {
    if (isDrawer()) {
        const drawingData = getCurrentDrawing();
        putDrawing(drawingData);
    } else {
        const imgData = await fetchDrawing();
        showImg.src = imgData;
    }
}

function startDrawingLoop() {
    setInterval(updateDrawing, DRAW_INTERVAL_MS);
}