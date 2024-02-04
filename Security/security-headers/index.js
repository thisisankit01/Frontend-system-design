import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

const redirectToHttps = (req, res, next) => {
    if(req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(`https://${req.get('Host')}${req.url}`);
    }
}

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy' , 'no-referrer')
    res.removeHeader('X-Powered-By');
    res.setHeader('X-content-Type- Options' , 'nosniff')
    res.setHeader('Strict-Transport-Security' , 'max-age=31536000; includeSubDomains')
    next();
})


app.get("/list" , (req,res) => {
    res.send([{
        id : 1,
        name : "John Doe",
    }])
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


const hasEnoughSpaceForData = () => {
   if('storage' in navigator && 'estimate' in navigator.storage){
      navigator.storage.estimate().then(estimate => {
        console.log("Usage: " , (estimate.usage/1024/1024).toFixed(2) + " MB")
        console.log("Quota: " , (estimate.quota/1024/1024).toFixed(2) + " MB")
      })
   } else {
       console.log("StorageManager API not supported")
   }
}
