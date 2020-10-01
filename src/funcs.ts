import { Mark, Color } from "./enums"
import { Deck } from "./types"

export function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    marks.forEach(m => {
        colors.forEach(c => {
            deck.push({
                color: c,
                mark: m
            })
        })
    })
    return deck
}

export function printDeck (deck:Deck) {
    deck.forEach(card => {
        let str = card.color + card.mark
        console.log(str)
    })
}