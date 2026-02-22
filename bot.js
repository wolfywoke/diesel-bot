const { Client, LocalAuth } = require('whatsapp-web.js');

console.log("Diesel bot starting...");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  }
});

client.on('qr', (qr) => {
  console.log("QR STRING BELOW:");
  console.log(qr);
});

client.on('ready', () => {
  console.log("WhatsApp bot is ready.");
});

client.on('message', message => {
  console.log("Message received:", message.body);
});

client.initialize();
