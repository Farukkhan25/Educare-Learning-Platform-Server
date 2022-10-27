const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const all_topics = require("./data/topics.json");
const courses = require("./data/courses.json");

app.get('/', (req, res)=> {
    res.send('Course API Running');
})

app.get("/all-topics", (req, res) => {
  res.send(all_topics);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(courses);
  } else {
    const course_details = courses.filter((n) => n.category_id === id);
    res.send(course_details);
  }
});

app.get("/courseDetails/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n._id == id);
  res.send(selectedCourse);
});


app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
    console.log('Educare server running on port', port);
})

