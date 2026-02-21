const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Void Bot está online 😈');
});

app.listen(PORT, () => {
  console.log('Mini site ativo!');
});

const host = 'voidrealmss.falixsrv.me';
const port = 25565;
const username = 'BotAFK';

function startBot() {
  console.log('Iniciando bot...');

  const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
  });

  bot.on('login', () => {
    console.log('Bot entrou!');

    setTimeout(() => {
      bot.quit();
      setTimeout(startBot, 1000);
    }, 120000);
  });

  bot.on('error', err => console.log(err));
  bot.on('end', () => console.log('Reconectando...'));
}

startBot();
