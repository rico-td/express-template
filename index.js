const express = require("express");
const cors = require("cors");
// import todo from "./homework";

// Access to enviroment variables
const { PORT } = process.env;

// Initialize expres
const app = express();
// Use for development
app.use(cors());

// Database
//  --------------------------------------------
const profiles = [
  {
    id: 1,
    firstName: "John Smith",
    married: false,
  },
  {
    id: 2,
    title: "Mary McConner",
    married: true,
    birthDate: new Date("1995-28-2"),
  },
  {
    id: 3,
    title: "Boris Becker",
    married: false,
    birthDate: new Date("1990-15-3"),
  },
];
//  --------------------------------------------

//  ***GET REQUESTS***
//  Route to get "Hello World" on /test
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

// Route to get all todos

app.get("/profiles", (req, res) => {
  res.json({ profiles });
});

// Route to get todo by ID
app.get("/user", (req, res) => {
  const userId = parseInt(req.query.userId);
  const userProfile = profiles.find((item) => item.id === userId);

  if (userProfile) {
    res.json({ profile: userProfile }); // send the found profile
  } else {
    res.status(404).json({ message: "Profile not found" }); // error message, if profile not found
  }
});

//  ***POST REQUESTS***
app.post("/profile", (req, res) => {
  const newUser = req.body.user;

  profiles.push(newUser);

  res.json({ newProfile: newUser });
});

//  ***PUT REQUESTS***
app.put("/profile/addusername", (req, res) => {
  const { username, userId } = req.body;

  const currentUser = profiles.find((item) => item.id === userId);
  currentUser.username = username;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  deletedProfiles.push(currentUser);

  profiles = deletedProfiles;

  res.json({ updatedProfile: currentUser });
});

//  ***DELETE REQUESTS***
app.delete("/profile", (req, res) => {
  const { userId } = req.body;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  profiles = deletedProfiles;

  res.json({ deletedUserId: userId });
});

// app is listening to the port set in the above variable (beginning of the file)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// .
// .
// .
// .
// .
// .

// app.get("/profile", (req, res) => {
//   res.json({ profile: { name: "Max" } });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     profile: {
//       firstName: "Max",
//       lastName: "Mustermann",
//       adress: "test avenue",
//       hobbies: "swimming",
//     },
//   });
// });
