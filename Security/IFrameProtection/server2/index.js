import express from 'express';
const app = express();

import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")

//     res.cookie('sessionID', '12345', {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'strict',
//       });
//     next();
// })

// Serve static files (optional)
app.use(express.static('public'));

// Define your routes
app.get('/iframe-website1', (req, res) => {
  res.sendFile(__dirname + '/public/iframe-website1.html');
});

app.get('/iframe-website2', (req, res) => {
res.sendFile(__dirname + '/public/iframe-website2.html');
});


const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});