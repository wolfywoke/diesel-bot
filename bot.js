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

client.on('qr', async (qr) => {
  const url = await QRCode.toDataURL(qr);
  console.log("OPEN THIS IN YOUR BROWSER:");
  console.log(url);
});

client.on('ready', () => {
  console.log("WhatsApp bot is ready.");
});

client.on('authenticated', () => {
  console.log("Authenticated successfully.");
});

client.on('auth_failure', msg => {
  console.log("Authentication failed:", msg);
});

client.on('message_create', async message => {
  console.log("----- MESSAGE DETECTED -----");
  console.log("From:", message.from);
  console.log("Body:", message.body);
});

client.initialize();
