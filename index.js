const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Mini site pra Render não dormir
app.get('/', (req, res) => {
  res.send('Void Bot está online 😈');
});

app.listen(PORT, () => {
  console.log('🌐 Mini site ativo!');
});

// CONFIGURAÇÃO DO SERVIDOR
const host = 'voidrealms.falixsrv.me'; // Ex: voidrealms.falixsrv.me
const port = 29435; // Muda se for diferente
const username = 'VoidBot';
const version = '1.20.4'; // COLOCA A VERSÃO EXATA DO SEU SERVIDOR

function startBot() {
  console.log('🔄 Tentando conectar em:', host, port);

  const bot = mineflayer.createBot({
    host: host,
    port: port,
    username: username,
    version: version
  });

  bot.on('login', () => {
    console.log('✅ Bot entrou no servidor!');

    setTimeout(() => {
      console.log('🚪 Saindo por 1 segundo...');
      bot.quit();

      setTimeout(() => {
        startBot();
      }, 1000);

    }, 120000); // 2 minutos
  });

  bot.on('spawn', () => {
    console.log('🎉 Bot spawnou no mundo!');
  });

  bot.on('error', (err) => {
    console.log('❌ ERRO DETECTADO:');
    console.log(err);
  });

  bot.on('end', () => {
    console.log('🔁 Conexão encerrada.');
  });
}

startBot();
