document.addEventListener('DOMContentLoaded', function() {
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        let choice = choices[Math.floor(Math.random() * 3)];
        return choice;
    }

    function playARound(playerSelection, computerSelection) {
        let pSelection = playerSelection.toLowerCase();
        let cSelection = computerSelection.toLowerCase();

        if (pSelection.localeCompare(cSelection) === 0) {
            return "Draw! Both selected " + computerSelection;
        } else if (pSelection === 'rock') {
            if (cSelection === 'paper') {
                return 'You Lose! Paper beats Rock';
            } else {
                return 'You Win! Rock beats Scissors';
            }
        } else if (pSelection === 'paper') {
            if (cSelection === 'scissors') {
                return 'You Lose! Scissors beat Paper';
            } else {
                return 'You Win! Paper beats Rock';
            }
        } else if (pSelection === 'scissors') {
            if (cSelection === 'rock') {
                return 'You Lose! Rock beats Scissors';
            } else {
                return 'You Win! Scissors beat Rock';
            }
        } else {
            return 'Sorry, invalid selection';
        }
    }

    const rock = document.querySelector('.Rock');
    const paper = document.querySelector('.Paper');
    const scissors = document.querySelector('.Scissors');

    const rpsContainer = document.querySelector('#container');

    const result = document.createElement('h1');
    result.classList.add('result');
    rpsContainer.appendChild(result);

    

    rock.addEventListener('click', function() {
        result.textContent = playARound('rock', getComputerChoice());
        console.log(playARound('rock', getComputerChoice()));
    });

    paper.addEventListener('click', function() {
        result.textContent = playARound('paper', getComputerChoice());
        console.log(playARound('paper', getComputerChoice()));
    });

    scissors.addEventListener('click', function() {
        result.textContent = playARound('scissors', getComputerChoice());
        console.log(playARound('scissors', getComputerChoice()));
    });
});