
//Install express server
const express = require('express');

const app = express();

app.use(express.static('./dist/frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);