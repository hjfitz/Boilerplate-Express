const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'webpages')));

app.use('/', (req, res, next) => {
	console.log(new Date(), req.method, req.url); 
	next();
});

app.listen(port);
