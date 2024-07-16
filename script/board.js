

// imports
import { CodeBrakerBoard, CodeBrakerRow, makeMove, codeMakerChooseRowIx, getNewCodeMakerRow } from "./mastermind.js";

// globals


// functions
export function createBoard() {
    let grid = document.querySelector(".grid-container");
    for (let i = 0; i < CodeBrakerBoard.numGuesses; i++) {
        createBoardRow(i, grid);
    }
}

function createBoardRow(index, grid) {
    let redBtn = document.createElement("button");
    redBtn.className = `grid-item row${index}`;
    let greenBtn = document.createElement("button");
    greenBtn.className = `grid-item row${index}`;
    let blueBtn = document.createElement("button");
    blueBtn.className = `grid-item row${index}`;
    let yellowBtn = document.createElement("button");
    yellowBtn.className = `grid-item row${index}`;
    grid.appendChild(redBtn);
    grid.appendChild(greenBtn);
    grid.appendChild(blueBtn);
    grid.appendChild(yellowBtn);
    let count = 0;
    redBtn.addEventListener("click", () => { makeMove(index, redBtn, CodeBrakerRow.redIx, ++count) });
    greenBtn.addEventListener("click", () => { makeMove(index, greenBtn, CodeBrakerRow.greenIx, ++count) });
    blueBtn.addEventListener("click", () => { makeMove(index, blueBtn, CodeBrakerRow.blueIx, ++count) });
    yellowBtn.addEventListener("click", () => { makeMove(index, yellowBtn, CodeBrakerRow.yellowIx, ++count) });
}
export function disableBoard() {
    document.querySelectorAll(".grid-item").forEach(btn => btn.disabled = true);
}
export function activateRestartButton() {
    let restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(btn => {
            btn.disabled = false;
            btn.textContent = "";
            btn.style.border = "none";
        });
        getNewCodeMakerRow();

    })
}