const { Client, LocalAuth } = require('whatsapp-web.js');

console.log("Diesel bot starting...");

const QRCode = require('qrcode');

client.on('qr', async (qr) => {
  console.log("Generating QR image...");

  const url = await QRCode.toDataURL(qr);

  console.log("OPEN THIS IN YOUR BROWSER:");
  console.log(url);
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
