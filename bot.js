const { Client, LocalAuth } = require('whatsapp-web.js');
const QRCode = require('qrcode');

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

client.on('message_create', async (message) => {
  const chat = await message.getChat();
  console.log("Chat:", chat.name || "Private");
  console.log("Body:", message.body);
});

client.on('ready', () => {
  console.log("WhatsApp bot is ready.");
});

client.on('message', message => {
  console.log("Message received:", message.body);
});

client.initialize();
