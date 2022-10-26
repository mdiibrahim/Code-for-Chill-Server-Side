const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send("Code for Chilling server side is running");
});
app.listen(port, () => {
    console.log(`Codde for Chill is running on ${port}`);
});