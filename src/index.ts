type Deck = NormalCard[]
enum Color {
    heart = "红桃",
    spade = "黑桃",
    club = "梅花",
    diamond = "方块"
}
enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    senve = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
type NormalCard = {
    color: Color,
    mark: Mark
}

function createDeck(): Deck {
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

function printDeck (deck:Deck) {
    deck.forEach(card => {
        let str = card.color + card.mark
        console.log(str)
    })
}

const deck = createDeck()
printDeck(deck)