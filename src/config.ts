import { Intents } from 'discord.js';

export default {
  token: process.env.DISCORD_TOKEN,
  game_name: process.env.GAME_NAME,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
}
