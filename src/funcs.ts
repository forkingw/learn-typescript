import { Mark, Color, JokerType } from "./enums"
import { Card, Deck, Joker } from "./types"

export function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    marks.forEach(m => {
        colors.forEach(c => {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark
                }
            } as Card)
        })
    })
    const jokers = Object.values(JokerType)
    jokers.forEach(j => {
        const card:Joker = {
            type: j,
            getString() {
                return j
            }
        }
        deck.push(card)
    })
    return deck
}

export function printDeck (deck:Deck) {
    deck.forEach(card => {
        console.log(card.getString())
    })
}