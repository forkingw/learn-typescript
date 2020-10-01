"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
function createDeck() {
    const deck = [];
    const marks = Object.values(enums_1.Mark);
    const colors = Object.values(enums_1.Color);
    marks.forEach(m => {
        colors.forEach(c => {
            deck.push({
                color: c,
                mark: m
            });
        });
    });
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    deck.forEach(card => {
        let str = card.color + card.mark;
        console.log(str);
    });
}
exports.printDeck = printDeck;
