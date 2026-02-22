const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

console.log("Diesel bot starting...");

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  console.log("Scan this QR code:");
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log("WhatsApp bot is ready.");
});

client.on('message', message => {
  console.log("Message received:", message.body);
});

client.initialize();
