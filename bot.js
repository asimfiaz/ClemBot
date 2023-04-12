import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Importing auth constants
import { TOKEN, CLIENT_ID } from './auth.js';

// Importing slash (/) commands
import { commands } from './commands.js';

// Importing games
import { rockPaperScissors } from './games/rockpaperscissor.js';
import { playHangman } from './games/hangman.js';

import { Hangman } from 'discord-gamecord';

client.on('ready', () => {
    console.log("Logged in as " + client.user.tag);
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        //console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        //console.log('Successfully reloaded application (/) commands.');
    } catch (e) {
        console.error(e);
    }
})();

// All slash commands can be configured to trigger here.
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'test') {
        await interaction.reply("I am working now!");
    }

    if (interaction.commandName === 'rockpaperscissors') {
        await interaction.reply(rockPaperScissors(interaction.options.data[0].value));
    }

    if (interaction.commandName === 'hangman') {
        const Game = new Hangman({
            message: interaction,
            embed: {
                title: 'Hangman game',
                overTitle: 'Game Over',
                color: '#5865F2'
            }
        });

        Game.startGame();
        Game.on('gameOver', async result => {
            console.log(result);
        });
    }

});

// All triggers for the bot to respond to a specific text in any channell are configured here.
client.on('messageCreate', (message) => {
    // If the author of the message is bot, don't run the rest of the code.
    // This will avoid any infinite loop of the bot stuck replying to itself.
    if (message.author.bot) return false;

    var msg = message.content;

    if (msg.includes("amourshipping")) {
        message.channel.send("canon!");
        return;
    }

    if (msg.includes("AMOURSHIPPING")) {
        message.channel.send({ content: "CANON!", files: ["./img/satosere.gif"] });
        return;
    }
    
    msg = message.content.toLowerCase();

    if (msg.includes("abu dhabi 2021")) {
        message.reply({ content: "No! Michael No! that was so not right!" });
        return;
    }

});

client.login(TOKEN);