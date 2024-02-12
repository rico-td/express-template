const express = require("express");
const cors = require("cors");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
// Use for development
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.json({ profile: { name: "Max" } });
});

app.get("/user", (req, res) => {
  res.json({
    profile: {
      firstName: "Max",
      lastName: "Mustermann",
      adress: "test avenue",
      hobbies: "swimming",
    },
  });
});

app.get("/todos", (req, res) => {
  const todos = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Finish homework",
      completed: true,
    },
  ];

  res.json({ todos });
});

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// asdasdads
