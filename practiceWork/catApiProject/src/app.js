
let SWAPI_API_URL = 'https://swapi.dev/api/people/';
let characterNumber = Math.floor(Math.random() * 9 + 1);
let characterNameSection = $('.characterName')
let characterSection = $('.characterContainer');
let filmList = $('.filmList');

$.get(SWAPI_API_URL, (data) => {
    console.log(data);
    //Selects Random person from data
    let selectedCharacter = data.results[characterNumber]

    //Display Character Name
    characterNameSection.prepend(`<h3 class='display-4 text-center my-4'> ${selectedCharacter.name} </h3>`);

    //Display Character Gender
    characterSection.append(`<p class='text-center my-4 col-6'> Gender: ${selectedCharacter.gender} </p>`);

    //Display Character Birthyear
    characterSection.append(`<p class='text-center my-4 col-6'> Birth Year: ${selectedCharacter.birth_year} </p>`);

    //Dispaly Films they are in
    let filmNumber = 1;
    for (let i = 0; i < selectedCharacter.films.length; i++) {
        $.get(`https://swapi.dev/api/films/${filmNumber}`, (data2) => {
            console.log(data2);

            filmList.append(`
            <li>Film Name: ${data2.title}</li>
            <li>
                <ul>
                    <li>Director: ${data2.director}</li>
                </ul>
            </li>
            `);
            
        })
        filmNumber++;
    }
})

