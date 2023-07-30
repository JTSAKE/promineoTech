let gameShelf = document.querySelector('.gameShelf');
let form = $('form');
let searchButton = document.querySelector('.btn');
let titleList = document.querySelectorAll('.gameElement');
let storeInput = document.querySelector('#storeID');
let pageNumberInput = document.getElementById('pageNumber').value;
let pageNumber = 3;

function popGameList() {
$.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}`, (data) => {
        let gameList = data;
        console.log(gameList);

        function createGameElements() {
            for (let i = 0; i < gameList.length; i++) {

                //Creates New Dive & Adds Bootstrap Classes
                let newDiv = document.createElement('div');
                newDiv.classList.add('container-fluid', 'col-3', 'border', 'border-2', 'rounded', 'd-flex', 'flex-column', 'align-items-around', 'gameElement');
            
                //Creates H5 & Adds Bootsteap Classes
                let newH5 = document.createElement('h5');
                newH5.classList.add('text-center', 'my-3');
                newH5.append(`${gameList[i].title}`)
                //Appends H5 to NewDiv
                newDiv.append(newH5);
                
                //Create New Image & Adds Bootstrap Classes
                let newImg = document.createElement('img');
                newImg.classList.add('img-fluid', 'mx-auto', 'my-3', 'imgBaseSize');
                newImg.setAttribute('src',`${gameList[i].thumb}`)
                //Append new Image
                newDiv.append(newImg);

                //Converts Store ID to Store Name
                let storeName = '';
                switch(gameList[i].storeID) {
                    case '1':
                        storeName = 'Steam';
                        break;
                    case '2':
                        storeName = 'Gamers Gate';
                        break;
                    case '3':
                        storeName = 'Green Man Gaming';
                        break;
                    case '4':
                        storeName = 'Amazon';
                        break;
                    case '5':
                        storeName = 'Gamestop';
                        break;
                    case '6':
                        storeName = 'Direct 2 Drive';
                        break;
                    case '7':
                        storeName = 'GOG';
                        break;
                    case '8':
                        storeName = 'Origin';
                        break;
                    case '9':
                        storeName = 'Get Games';
                        break;
                    case '10':
                        storeName = 'Shiny Loot';
                        break;
                    case '11':
                        storeName = 'Humble Store';
                        break;
                    case '12':
                        storeName = 'Desura';
                        break;
                    case '13':
                        storeName = 'Uplay';
                        break;
                    case '14':
                        storeName = 'Indie Game Stand';
                        break;
                    case '15':
                        storeName = 'Fanatical';
                        break;
                    case '16':
                        storeName = 'Games Rocket';
                        break;
                    case '17':
                        storeName = 'Games Republic';
                        break;
                    case '18':
                        storeName = 'Sila Games';
                        break;
                    case '19':
                        storeName = 'Playfield';
                        break;
                    case '20':
                        storeName = 'Imperial Games';
                        break;
                    case '21':
                        storeName = 'Win Game Store';
                        break;
                    case '22':
                        storeName = 'Fun Stock Digital';
                        break;
                    case '23':
                        storeName = 'Game Billet';
                        break;
                    case '24':
                        storeName = 'Voidu';
                        break;
                    case '25':
                        storeName = 'Epic Games Store';
                        break;
                    case '26':
                        storeName = 'Razer Game Store';
                        break;
                    case '27':
                        storeName = 'Games Planet';
                        break;
                    case '28':
                        storeName = 'Games Load';
                        break;
                    case '29':
                        storeName = '2Game';
                        break;
                    case '30':
                        storeName = 'IndieGala';
                        break;
                    case '31':
                        storeName = 'Blizzard Shop';
                        break;
                    case '32':
                        storeName = 'All Your Play';
                        break;
                    case '33':
                        storeName = 'DL Gamer';
                        break;
                    case '34':
                        storeName = 'Noctre';
                        break;
                    case '35':
                        storeName = 'Dream Game';
                        break;
                    default:
                        storeName = 'Error, Store not in list';
                        break;
                }
                
                //Create new Paragraphs
                let newPara1 = document.createElement('p');
                newPara1.innerHTML = `<strong>Original Price:</strong> $${gameList[i].normalPrice}`;

                let newPara2 = document.createElement('p');
                newPara2.innerHTML = `<strong>Sale Price:</strong> $${gameList[i].salePrice}`;

                let newPara3 = document.createElement('p');
                newPara3.innerHTML = `<strong>Store:</strong> ${storeName}`;

                //Adds bootstrap classes
                newPara3.classList.add('my-1', 'mx-auto');
                newPara1.classList.add('my-1', 'mx-auto');
                newPara2.classList.add('my-1', 'mx-auto');

                //Append new Paragraphs 
                newDiv.append(newPara1);
                newDiv.append(newPara2);
                newDiv.append(newPara3);
                
                //Appending newDiv to gameShelf
                gameShelf.append(newDiv);
            }
        }
        createGameElements();
    })
}

popGameList()
