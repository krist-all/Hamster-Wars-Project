const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const hamsters = require('./routes/hamsters.js');
const matches = require('./routes/matches.js');
const matchWinners = require('./routes/matchWinners.js')
const winners = require('./routes/winners.js');
const losers = require('./routes/losers.js');

const PORT = process.env.PORT || 1337;
const staticFolder = path.join(__dirname, '../build');
const images = path.join(__dirname, './img')

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.params);
    next();
})

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(express.static(staticFolder));
app.use( '/img', express.static(images));

app.use('/hamsters', hamsters);

app.use('/matches', matches);

app.use('/matchWinners', matchWinners);

app.use('/winners', winners);

app.use('/losers', losers);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});