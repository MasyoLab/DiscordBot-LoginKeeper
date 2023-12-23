import { Client } from 'discord.js';
import config from './config';
import express, { Response } from 'express';  // Import express and Response type

const { intents, token, game_name } = config;
const app = express();  // Use import to create the express app

const client = new Client({
  intents,
  presence: {
    status: 'online',
    activities: [{
      name: `${game_name}`,
      type: 'PLAYING'
    }],
  }
});

client.on('ready', () => {
  console.log(`Logged in as: ${client.user?.tag}`);
});

// ルーティングの設定
app.get("/", (_: any, res: Response) => {  // Use Response type
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({});
});

app.listen(3000, () => {
  console.log(`Opened API Server`);
});

client.login(token);
