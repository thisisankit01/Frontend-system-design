import express from 'express';

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self';" + "script-src 'self' 'nonce-randomKey' 'unsafe-inline' https://unsecure.com;");
    next();
})

app.use(express.static('public'));

app.get('/' , (req , res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})