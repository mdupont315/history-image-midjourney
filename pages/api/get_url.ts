import { Client, Snowflake } from 'discord.js'
export default async function handler() {
    const client = new Client({intents: [Snowflake.Guilds]});

    client.on('ready', () => {
        console.log(`Logged in as ${client.user?.tag}`);
    });
    client.login('');
}
