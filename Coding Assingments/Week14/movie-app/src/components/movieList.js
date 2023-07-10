import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: 'INDIANA JONES AND THE DIAL OF DESTINY',
                releaseDate: '2023',
                img: 'https://resizing.flixster.com/z2O4BquUjrs9Yqkg86cPwl4uTCY=/fit-in/180x240/v2/https://resizing.flixster.com/xYGAolR7ksdDWhEXU09Vv9JQB0s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZiNWJhYWY1LWM5ODAtNGI3My04OWQ1LTUxOThjMzcyZTE3Yy5qcGc=',
                synopsis: 'Daredevil archaeologist Indiana Jones races against time to retrieve a legendary dial that can change the course of history. Accompanied by his goddaughter, he soon finds himself squaring off against Jürgen Voller, a former Nazi who works for NASA.'
            },
            {
                title: 'NO HARD FEELINGS',
                releaseDate: '2023',
                img: 'https://resizing.flixster.com/1rOES0JBUQFTbIWFMsUSyC1ztI4=/fit-in/180x240/v2/https://resizing.flixster.com/DDToSwhHClBZGg_iBmbyfuEybas=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc0MTM0MGM4LTg0ODItNGQyOC1hYzBkLTUzZjVhOTBlNDVmMy5qcGc=',
                synopsis: 'On the brink of losing her childhood home, Maddie (Jennifer Lawrence) discovers an intriguing job listing: wealthy helicopter parents looking for someone to "date" their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.'
            },
            {
                title: 'ASTEROID CITY',
                releaseDate: '2023',
                img: 'https://resizing.flixster.com/EzQJmsAVWaaiahVMRaZPWeIbgBQ=/fit-in/180x240/v2/https://resizing.flixster.com/N1dnUvL2FS7F9x090K-NlJXr-p4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMyNzc2ODYwLTJlMjYtNDgzNi05MmIwLWNiOTgzYzA4YjU0MC5qcGc=',
                synopsis: 'The itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.'
            },
            {
                title: 'THE FLASH',
                releaseDate: '2023',
                img: 'https://resizing.flixster.com/961D4qGq-s4AjIKIyawL8TaK0HI=/fit-in/180x240/v2/https://resizing.flixster.com/F8JH95OjUwzlqREEWnwBXd1Mrf8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJkZjg3MjI1LWU1YzgtNDZiMy05ZDY3LWFlNTMyOWVhZmRjMi5qcGc=',
                synopsis: 'Worlds collide in "The Flash" when Barry uses his superpowers to travel back in time in order to change the events of the past. But when his attempt to save his family inadvertently alters the future, Barry becomes trapped in a reality in which General Zod has returned, threatening annihilation, and there are no Super Heroes to turn to. That is, unless Barry can coax a very different Batman out of retirement and rescue an imprisoned Kryptonian... albeit not the one he\'s looking for. Ultimately, to save the world that he is in and return to the future that he knows, Barry\'s only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?'
            },
            {
                title: 'RUBY GILLMAN, TEENAGE KRAKEN',
                releaseDate: '2023',
                img: 'https://resizing.flixster.com/Ng2ftDTBxVfcH0wVP1WMmLSTwos=/fit-in/180x240/v2/https://resizing.flixster.com/Zb2d0atK4I6Ctp4ZCC0SsI7VvSQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IxNzI1YTI2LWViY2UtNGM2ZS1iMjQ1LTI3Njk4MDNiNDdmMC5qcGc=',
                synopsis: 'Sweet, awkward 16-year-old Ruby Gillman (Lana Condor, To All the Boys I\'ve Loved Before franchise) is desperate to fit in at Oceanside High, but she mostly just feels invisible. She\'s math-tutoring her skater-boy crush (Jaboukie Young-White, Ralph Breaks the Internet), who only seems to admire her for her, and she\'s prevented from hanging out with the cool kids at the beach because her over-protective supermom (Oscar® nominee Toni, Knives Out), has forbade Ruby from ever getting in the water. But when she breaks her mom\'s #1 rule, Ruby will discover that she is a direct descendant of the warrior Kraken queens and is destined to inherit the throne from her commanding grandmother (Academy  winner Jane Fonda), the Warrior Queen of the Seven Seas. The Kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids who have been battling with the Kraken for eons. There\'s one major, and immediate, problem with that: The school\'s beautiful, popular new girl, Chelsea (Emmy winner Annie Murphy, Schitt\'s Creek) just happens to be a mermaid. Ruby will ultimately need to embrace who she is and go big to protect those she loves most.'
            },
            {
                title: 'NIMONA',
                releaseDate: '02/22/2028',
                img: 'https://resizing.flixster.com/g6-ePdIQgPhNBou9uw0SKn8FNys=/fit-in/180x240/v2/https://resizing.flixster.com/PjEtd6YyyI56iFO2emBjqf6Y99A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI4OGNiZjBhLTZkN2ItNGNmOS1iMDhlLTdhNTJmODNhMmQxYy5qcGc=',
                synopsis: 'When Ballister Boldheart (Riz Ahmed), a knight in a futuristic medieval world, is framed for a crime he didn\'t commit, the only one who can help him prove his innocence is Nimona (Chloë Grace Moretz), a mischievous teen with a taste for mayhem -- who also happens to be a shapeshifting creature Ballister has been trained to destroy. But with the entire kingdom out to get him, Nimona\'s the best (or technically the only) sidekick Ballister can hope for. And as the lines between heroes, villains, and monsters start to blur, the two of them set out to wreak serious havoc -- for Ballister to clear his name once and for all, and for Nimona to... just wreak serious havoc.'
            },
        ];

        return(
            <div className='container-fluid bg-danger d-flex justify-content-evenly flex-wrap'>
                <Movie {...movies[0]}/>
                <Movie {...movies[1]}/>
                <Movie {...movies[2]}/>
                <Movie {...movies[3]}/>
                <Movie {...movies[4]}/>
                <Movie {...movies[5]}/>
            </div>
        );
    }
}