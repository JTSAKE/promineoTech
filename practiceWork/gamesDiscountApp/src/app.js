let CHEAPSHARK_API_URL = "https://www.cheapshark.com/api/1.0/deals";
let gameShelf = document.querySelector('.gameShelf');
let form = $('form');

$.get(CHEAPSHARK_API_URL, (data) => {
    let gameList = data;
    console.log(gameList);

    function createGameElements() {
        for (let i = 0; i < gameList.length; i++) {

            //Creates New Dive & Adds Bootstrap Classes
            let newDiv = document.createElement('div');
            newDiv.classList.add('container-fluid', 'col-3', 'border');
        
            //Creates H5 & Adds Bootsteap Classes
            let newH5 = document.createElement('h5');
            // newH5.classList.add('display-5');
            newH5.append(`${gameList[i].title}`)
            //Appends H5 to NewDiv
            newDiv.append(newH5);
            
            //Create New Image & Adds Bootstrap Classes
            let newImg = document.createElement('img');
            newImg.classList.add('img-fluid', 'mx-auto');
            newImg.setAttribute('src',`${gameList[i].thumb}`)
            //Append new Image
            newDiv.append(newImg);
            
            //Create new Paragraphs
            let newPara1 = document.createElement('p');
            newPara1.innerText = `Original Price: ${gameList[i].normalPrice}`
            let newPara2 = document.createElement('p');
            newPara2.innerText = `Sale Price: ${gameList[i].salePrice}`
            let newPara3 = document.createElement('p');
            newPara3.innerText = `Store: ${gameList[i].storeID}`
            //Append new Paragraphs 
            newDiv.append(newPara1);
            newDiv.append(newPara2);
            newDiv.append(newPara3);
            
            //Appending newDiv to gameShelf
            gameShelf.append(newDiv);
        }
    }
    
    createGameElements();

    // gameShelf.append(`
    // <div class= "container-fluid col-3">
    //     <h5 class="display-5">${gameList[0].title}</h5>
    //     <img src="${gameList[0].thumb}" class="img-fluid mx-auto">
    //     <p>Original Price: ${gameList[0].normalPrice}</p>
    //     <p>Current Price: ${gameList[0].salePrice}</p>
    //     <p>Store: ${gameList[0].storeID}</p>
    // </div>
    // `);
})