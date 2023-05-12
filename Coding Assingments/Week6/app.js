//Psudo Code
// Create Card Class / Object - 52 Total
    // Card Values: Ace = 1, 2-10, Jack = 11, Queen = 12, King = 13 
// Create Deck Class / Object - 52 Cards per Deck
// Deal 26 cards to 2 players
// Iterate through turns where each player plays a card
// Conditionals to confirm which player played the higher card
// Player with Higher Card wins point
// Ties result in 0 points
// After all cards have been played display score and delcare a winner

// Creating Cards Class / Objects
class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

// Created Deck Class / Deck Object
class Deck {
    constructor() {
        this.cards = []; //Array to hold 52 Card Objects
    }
    
    //Builds deck by running populate deck method
    buildDeck() {
        this.populateDeck();
        return this.cards;
    }

    //Builds Deck out of Card Objects and Adds to Cards Array
    populateDeck() {
        //Creating the required parameters for card objects
        const suits = ['♠', '♣', '♥', '♦'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        // Nested Loops to iterate through suits and ranks to create a deck
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(ranks[j], suits[i], values[j])); 
            } 
        }
    }

    //Shuffles cards in deck by separating objects in array to temp array and returning to original array once complete
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this;
    }

    //Return cards array
    getCards() {
        return this.cards
    }
}

//Creating Player Class / Objects
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        this.playerDeck = [];
    }

    //Adds Score to Player Object
    addScore() {
        this.score += 1;
    }
}

class GameFlow {

    //Starts Game and initializes all required methods
    playGame() {
        deck.populateDeck();
        deck.shuffleDeck();
        game.dealCards();
        game.gameRound();
        game.endGame();
    }

    //Takes cards for Deck class and adds them to player deck to deal cards
    dealCards() {
        //Refactor: splice from deck, assign to a temp value and move value over to player deck.
        player1.playerDeck.push(deck.cards.splice(0, 26))
        player2.playerDeck.push(deck.cards.splice(0, 26))
    }

    //Compares card in players decks and assings a point to a winner
    gameRound() {
        let i = 0;
        do {
            let card1 = player1.playerDeck[0][i]
            let card2 = player2.playerDeck[0][i]
            console.log(`--------- Round ${i + 1} ---------`)
            if (card1.value == card2.value) {
                console.log(`Tie No Points Given!
                Player 1 Played: ${card1.suit} ${card1.value}
                Player 2 Played: ${card2.suit} ${card2.value}`);
                console.log(`
                Player 1 Score: ${player1.score}
                Player 2 Score: ${player2.score}`);
            } else if(card1.value > card2.value) {
                player1.addScore()
                console.log(`Player 1 Wins This Hand!
                Player 1 Played: ${card1.suit} ${card1.value}
                Player 2 Played: ${card2.suit} ${card2.value}`);
                console.log(`
                Player 1 Score: ${player1.score}
                Player 2 Score: ${player2.score}`);
            } else if (card2.value > card1.value) {
                player2.addScore()
                console.log(`Player 2 Wins This Hand!
                Player 1 Played: ${card1.suit} ${card1.value}  
                Player 2 Played: ${card2.suit} ${card2.value}`);
                console.log(`
                Player 1 Score: ${player1.score}
                Player 2 Score: ${player2.score}`);
            }
            i++
        } while (i < 26);
    }

    //Logs the winner of the entire game and their score
    endGame() {
        if (player1.score == player2.score){
            console.log(`War ends in a Tie!
            Player 1 Score: ${player1.score}
            Player 2 Score: ${player2.score}`);
        }else if (player1.score > player2.score) {
            console.log(`Player 1 wins the war with a score of ${player1.score}!`);
        } else if (player2.score > player1.score){
            console.log(`Player 2 wins the war with a score of ${player2.score}!`);
        }
    }
}

let deck = new Deck
let game = new GameFlow
let player1 = new Player('Player1', 0)
let player2 = new Player('Player2', 0)

game.playGame();
