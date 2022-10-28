const express = require('express');
const cors = require('cors');

const courses = require('./Courses/coursesInfo.json')
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send("Code for Chilling server side is running");
});
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const c = (courses.filter(course => course.id === id));
    res.send(c);
});
app.listen(port, () => {
    console.log(`Codde for Chill is running on ${port}`);
});