/**
 * Hint #1: you should implement all those empty functions.
 */

import { DRAW_INTERVAL_MS } from '../../shared/conf.js';
import { fetchDrawing } from '../../shared/api.js';
import { isDrawer } from './game-status.js';

/**
 * Hint #2: there are some useful functions inside the canvas-actions.js file.
 * you should prbably use them. :)
 */
import { } from './canvas-actions.js';

// this is the actual element of the canvas. use it if you are the drawer:
const drawCanvas = document.querySelector('.draw_canvas');

// this is an image element to draw a drawing of another player:
const drawImage = document.querySelector('.show_canvas');

export function initGameDrawing() {
    updateDrawing();
}

export function showCanvas() {
}

export function hideCanvas() {
}

export function showDrawingImage() {
}

export function hideDrawingImage() {
}

function updateDrawing() {

}

function startDrawingLoop() {
    setInterval(updateDrawing, DRAW_INTERVAL_MS);
}