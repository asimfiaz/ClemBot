
/**
 * Play rock paper scissors
 *
 * @param {string} message The choice of the player. 
 * @param {bool} cheat Whether or not to let the bot cheat. If false, a random choice will be used.
 * @returns {string} The result of the rps match.
 */
export function rockPaperScissors(message, cheat = false) {
    let options = ['Rock', 'Paper', 'Scissor'];

    let index = Math.floor(Math.random() * options.length);
    
    if (cheat) {
        if (message.includes('rock')) {
            index = 1;
        }

        if (message.includes('paper')) {
            index = 2;
        }

        if (message.includes('scissor')) {
            index = 0;
        }
    } 

    let result = calculateRPSresult(message, options[index]);
    
    return `You chose ${message}, I choose ${options[index]}. ${result}`;
}

/**
 * Calculate the result of the game 
 * 
 * @param {string} userChoice 
 * @param {string} botChoice 
 * @returns {string} The result of the game
 */
export function calculateRPSresult(userChoice, botChoice) {
    let result = null;

    switch (botChoice) {
        case 'Rock':
            if (userChoice == 'rock') {
                result = 'Draw';
            } else if (userChoice == 'paper') {
                result = 'You win';
            } else if (userChoice == 'scissor') {
                result = 'I win';
            }

            break;
        case 'Paper':
            if (userChoice == 'rock') {
                result = 'I win';
            } else if (userChoice == 'paper') {
                result = 'Draw';
            } else if (userChoice == 'scissor') {
                result = 'You win';
            }

            break;
        case 'Scissor':
            if (userChoice == 'rock') {
                result = 'You win';
            } else if (userChoice == 'paper') {
                result = 'I win';
            } else if (userChoice == 'scissor') {
                result = 'Draw';
            }

            break;
    }

    return result;
}