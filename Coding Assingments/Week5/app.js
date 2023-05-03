class VideoGame {
    constructor(title, genre, gameType) {
        this.title = title;
        this.genre = genre;
        this.gameType = gameType;
    }

    describe() {
        return `${this.title} is a ${this.gameType} ${this.genre} game.`;
    }
}

class MainMenu {
    constructor() {
        this.gameList = [];
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Add Game
            2) View Game List
            3) Delete Game
            4) Pick Game from List
        `);
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1': 
                    this.addGame();
                    break;
                case '2':
                    this.viewGames();
                    break;
                case '3':
                    this.deleteGame();
                    break;
                case '4':
                    this.pickGame();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See ya!');
    }

    addGame() {
        let gameTitle = prompt('Enter a Title of a Video Game');
        let gameGenre = prompt('What Genre is this Game?')
        let gameType = prompt('Is this game Single Player or Multiplayer?')
        this.gameList.push(new VideoGame(gameTitle, gameGenre, gameType));
    }

    viewGames() {
        let gameString = '';
        for (let i = 0; i < this.gameList.length; i++){
            gameString += i + ' ) ' + this.gameList[i].title + '\n'
        }
        alert(gameString);
    }

    deleteGame() {
        let index = prompt('Enter the Index of the Game you want to Remove:');
        if (index > -1 && index < this.gameList.length) {
            this.gameList.splice(index, 1);
        }
    }

    pickGame() {
        let number = Math.floor(Math.random() * this.gameList.length);
        let gameChoice = this.gameList[number].title;
        let gameDesciption = this.gameList[number].describe();
        alert(gameChoice + '\n' + gameDesciption);
    }
}

let menu = new MainMenu();
menu.start();