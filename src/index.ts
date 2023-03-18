import { Client } from 'discord.js';
import config from './config';
const { intents, token, game_name } = config;

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

// APIサーバー(Botのログイン維持に使う)
const express = require("express");
const app = express();

// ルーティングの設定
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({});
});

app.listen(3000, () => {
  console.log(`Opened API Server`);
});

client.login(token);
