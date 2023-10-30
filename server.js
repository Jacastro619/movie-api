const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "",
  },
  console.log(`Connecting to the cms_db database... \n`),
  console.log(`Database Connected 👍 \n`)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/movies", (req, res) => {
  console.log(`${req.method} request received to get reviews`);
});

app.get("/api/movies-reviews", (req, res) => {
  console.log(`${req.method} request received to get reviews`);
});

app.post("/api/add-movie", (req, res) => {
  console.log(`${req.method} request received to get reviews`);
});

app.put("/api/review/:id", (req, res) => {
  console.log(`${req.method} request received to get reviews`);
});

app.delete("/api/movie/:id", (req, res) => {
  console.log(`${req.method} request received to get reviews`);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
