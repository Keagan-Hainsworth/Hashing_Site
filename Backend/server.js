const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors({
  origin: true, // Allow your frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usernames"
});

app.post('/registerdb', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 salt rounds
    const dataSet = [
      req.body.username,
      req.body.email,
      hashedPassword
    ];
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    db.query(sql, [dataSet], (err, data) => {
      if (err) {
        return res.json("error");
      }
      return res.json(data);
    });
  } catch (err) {
    return res.json("error");
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT password FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) return res.json({ success: false, message: "Database error" });
    if (results.length === 0) return res.json({ success: false, message: "User not found" });

    const hashedPassword = results[0].password;
    const match = await bcrypt.compare(password, hashedPassword);
    if (match) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }
  });
});

app.listen(8081, '0.0.0.0', () => {
  console.log("Listening");
});
