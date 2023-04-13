export const commands = [
    // Play Rock, Paper, Scissor
    {
        name: 'rockpaperscissors',
        description: 'Play Rock/Paper/Scissors with the bot',
        type: 1,
        options: [
            {
                name: 'choice',
                type: 3,
                required: true,
                description: 'Your choice from Rock/Papers/Scissors',
                choices: [
                    {
                        name: 'Rock',
                        value: 'rock'
                    },
                    {
                        name: 'Paper',
                        value: 'paper'
                    },
                    {
                        name: 'Scissor',
                        value: 'scissor'
                    }
                ]
            }
        ]
    },
    {
        name: 'hangman',
        description: 'Play hangman',
        type: 1,
    },
    {
        name: 'whosthatpokemon',
        description: 'Play Who\'s that Pokemon',
        type: 1,
    },
    {
        name: 'tictactoe',
        description: 'Play Tic Tac Toe',
        type: 1,
        options: [
            {
                name: 'opponent',
                type: 1,
                required: false,
                description: 'Your opponent',
            }
        ]
    },
];