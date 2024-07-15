

// --------------------------------------
// in master mind game there is a
// codemaker who picks the row and a
// codebraker who tries to guess the row
// --------------------------------------

// imports
import { createBoard, disableBoard } from "./board.js";

// globals
let codeMakerOptions = [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 4, 1, 2],
    [3, 4, 2, 1],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [4, 2, 1, 3],
    [4, 2, 3, 1],
    [4, 3, 1, 2],
    [4, 3, 2, 1]
];

//classes


export class CodeBrakerRow {
    guessed = [];
    rowIx;
    round;
    static redIx = 0;
    static greenIx = 1;
    static blueIx = 2;
    static yellowIx = 3;

    constructor() {
        this.guessed[CodeBrakerRow.redIx] = false;
        this.guessed[CodeBrakerRow.greenIx] = false;
        this.guessed[CodeBrakerRow.blueIx] = false;
        this.guessed[CodeBrakerRow.yellowIx] = false;
        this.rowIx = 0;
        this.round = 0;
    }

    checkWin() {
        if (this.guessed[CodeBrakerRow.redIx] == false) {
            return false;
        }
        if (this.guessed[CodeBrakerRow.greenIx] == false) {
            return false;
        }
        if (this.guessed[CodeBrakerRow.blueIx] == false) {
            return false;
        }
        if (this.guessed[CodeBrakerRow.yellowIx] == false) {
            return false;
        }
        return true;
    }
}

export class CodeBrakerBoard {
    rows = [];
    static numGuesses = 8;

    constructor() {
        for (let i = 0; i < CodeBrakerBoard.numGuesses; i++) {
            this.rows.push(new CodeBrakerRow());
        }
    }
}

// main

let codeBrakerBoard = new CodeBrakerBoard();
let codeMakerRowIx = codeMakerChooseRowIx();
let codeMakerRow = codeMakerOptions[codeMakerRowIx];
console.log(codeMakerRow);
createBoard();

// functions
function codeMakerChooseRowIx() {
    return Math.floor(Math.random() * codeMakerOptions.length);
}

export function makeMove(index, btn, colorIx, count) {

    btn.textContent = count;
    btn.disabled = true;
    if (codeMakerRow[colorIx] == count) {
        btn.style.border = "5px solid black";
        codeBrakerBoard.rows[index].guessed[colorIx] = true;
        if (codeBrakerBoard.rows[index].checkWin()) {
            disableBoard();
        }
    }


}