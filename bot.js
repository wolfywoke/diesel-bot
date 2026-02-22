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
  console.log("Generating QR image...");
  const url = await QRCode.toDataURL(qr);
  console.log("OPEN THIS IN YOUR BROWSER:");
  console.log(url);
});

client.on('ready', () => {
  console.log("WhatsApp bot is ready.");
});

client.on('message', message => {
  console.log("Message received:", message.body);
});

client.initialize();
