import { Color, JokerType, Mark } from "./enums"

// export type Deck = (NormalCard | Joker)[]

export type Deck = Card[]

export interface Card {
    getString(): string
}

export interface NormalCard extends Card {
    color: Color,
    mark: Mark
}

export interface Joker extends Card {
    type: JokerType
}