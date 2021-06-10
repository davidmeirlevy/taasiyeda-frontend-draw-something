import { sendWord } from '../../shared/api.js';
import { initGameDrawing } from './game-drawing.js';
import { updateStatus, initGameStatus } from './game-status.js';
import { clearCanvas } from './canvas-actions.js';

const wordInput = document.querySelector('.word_input');
const sendBtn = document.querySelector('.send_btn');
const clearBtn = document.querySelector('.clear-btn');

async function onSendWord() {
    const word = wordInput.value;
    const isCorrect = await sendWord(word);
    if (isCorrect) {
        alert('Correct!!! Yea!!! Prepare to be the drawer now!!!');
        clearCanvas();
    } else {
        alert('No... Try again');
    }
    updateStatus();
}

function init() {
    sendBtn.addEventListener('click', onSendWord);
    clearBtn.addEventListener('click', clearCanvas);

    initGameStatus();
    initGameDrawing();
}

init();