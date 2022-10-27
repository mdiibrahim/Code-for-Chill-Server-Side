const express = require('express');
const cors = require('cors');
const courseName = require('./Courses/courses.json');
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send("Code for Chilling server side is running");
});
app.get('/courses', (req, res) => {
    res.send(courseName);
});
app.listen(port, () => {
    console.log(`Codde for Chill is running on ${port}`);
});