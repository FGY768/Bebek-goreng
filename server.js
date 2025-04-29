const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/kirim-lokasi', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Lokasi diterima: ${latitude}, ${longitude}`);

  // Contoh: Kirim ke Telegram bot, Email, dsb (bisa ditambahkan nanti)
  
  res.json({ status: 'Lokasi diterima' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
