import { STATUS_INTERVAL_MS } from '../../shared/conf.js';
import { fetchStatus } from '../../shared/api.js';
import { showCanvas, hideCanvas, showDrawingImage, hideDrawingImage } from './game-drawing.js';

const scoreLabelElement = document.querySelector('.score_label');
const currentDrawerLabelElement = document.querySelector('.current_drawer_label');
const myWordLabel = document.querySelector('.my_word_label');
const guessingBox = document.querySelector('.guessed-word');

let _isDrawer = false;

export async function updateStatus() {
    const statusData = await fetchStatus();
    scoreLabelElement.innerHTML = statusData.me.points;
    _isDrawer = statusData.me.id === statusData.round.drawerId;
    if (_isDrawer) {
        showMeAsDrawer(statusData.round.word);
    } else {
        showTheDrawer(statusData.round.drawer.name);
    }
}

export function isDrawer() {
    return _isDrawer;
}

export function initGameStatus() {
    startStatusLoop();
    updateStatus();
}

function startStatusLoop() {
    setInterval(updateStatus, STATUS_INTERVAL_MS);
}

function showMeAsDrawer(currentWord) {
    currentDrawerLabelElement.innerHTML = 'Me!';
    guessingBox.style.display = 'none';
    myWordLabel.parentElement.style.display = 'block';
    myWordLabel.innerHTML = currentWord;
    showCanvas();
    hideDrawingImage();
}

function showTheDrawer(drawerName) {
    currentDrawerLabelElement.innerHTML = drawerName;
    guessingBox.style.display = 'block';
    myWordLabel.parentElement.style.display = 'none';
    hideCanvas();
    showDrawingImage();
}