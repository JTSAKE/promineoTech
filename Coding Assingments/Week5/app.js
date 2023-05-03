class VideoGame {
    constructor(title, genre, gameType) {
        this.title = title;
        this.genre = genre;
        this.gameType = gameType;
    }

    describe() {
        return `${this.title} is a ${this.gameType} ${this.genre}.`;
    }
}

class MainMenu {
    constructor() {
        this.gameList = [];
        this.selectedGame = null;
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Add Game
            2) View Game List
            3) Delete Game
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
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See ya!');
    }

    addGame() {
        let gameTitle = prompt('Enter a Title of a Video Game');
        let gameGenre = prompt('What Genre is this Game?');
        let gameType = prompt('Is it Single Player or Multiplayer?');
        this.gameList.push(new VideoGame(gameTitle, gameGenre, gameType));
    }

    viewGames() {
        let gameString = '';
        for (let i = 0; i < this.gameList.length; i++){
            gameString += this.gameList[i]
        }
        alert(gameString);
    }

    deleteGame() {
        let index = prompt('Enter the Index of the Game you want to Remove:');
        if (index > -1 && index < this.gameList.length) {
            this.gameList.splice(index, 1);
        }
    }
}

let menu = new MainMenu();
menu.start();