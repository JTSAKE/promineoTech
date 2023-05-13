const expect = chai.expect
const assert = chai.assert


describe('War Game Unit Tests', () => {
    describe('Card Class', () => {
        it ('Should Create Object with "Rank", "Suit", and "Value"', () => {

            //Class for Card
            class Card {
                constructor(rank, suit, value) {
                    this.rank = rank;
                    this.suit = suit;
                    this.value = value;
                }
            }

            //TestCard to Hold Parameters
            let testCard = new Card('A', '♠', '1')

            //To check that test card is assigning values correctly
            expect(testCard.rank).to.not.equal(undefined)
            expect(testCard.suit).to.not.equal(undefined)
            expect(testCard.value).to.not.equal(undefined)
        })
    })

    describe('Object Array', () => {
        it ('Should create an Array with 52 Objects in It', () => {

            //Class for Card
            class Card {
                constructor(rank, suit, value) {
                    this.rank = rank;
                    this.suit = suit;
                    this.value = value;
                }
            }

            //Test Array to hold card objects
            let testArray = [];

            //Arrays to assign to class objects within testArray which will create the 'deck'
            const suits = ['♠', '♣', '♥', '♦'];
            const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            //Loop creating card objects and populating testArray with the objects
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    testArray.push(new Card(ranks[j], suits[i], values[j])); 
                } 
            }

            //Test to confirm that the testArray, our 'deck' is holding the correct amount of objects
            expect(testArray.length).to.equal(52)
        })
    })

    describe('Duplicate Cards', () => {
        it ('Deck Array should not contain duplicate Cards', () => {

            //Card Class
            class Card {
                constructor(rank, suit, value) {
                    this.rank = rank;
                    this.suit = suit;
                    this.value = value;
                }
            }

            let testArray = [];

            const suits = ['♠', '♣', '♥', '♦'];
            const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    testArray.push(new Card(ranks[j], suits[i], values[j])); 
                } 
            }

            //Check for Duplicate Cards loop
            let hasDuplicates = false;

            //Loop that iterates through the testArray 'Deck' comparing if the 2 objects are holding duplicate values
            for (let i = 0; i < testArray.length; i++) {
                for (let j = i + 1; j < testArray.length; j++) {
                    if (
                        testArray[i].rank === testArray[j].rank &&
                        testArray[i].suit === testArray[j].suit &&
                        testArray[i].value === testArray[j].value
                    ) {
                        hasDuplicates = true; //If a duplicate card is detected sets variable to true;
                    }
                }
            }

            // if hasDuplicate variable is equal to 'true' test will return as failed
            expect(hasDuplicates).to.equal(false)
        })
    })
})