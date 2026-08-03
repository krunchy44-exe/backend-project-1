const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
    {
        userID: 1,
        name: "surya"
    },
    {
        userID: 2,
        name: "pankaj"
    }
];

app.get("/", (req, res) => {
    res.send("Welcome to my First Express server!");
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.get("/users/:userID", (req, res) => {

    const id = Number(req.params.userID);

    const user = users.find((u) => {
        return u.userID === id;
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);

});

app.post("/users", (req, res) => {

    const newUser = req.body;

    if (!newUser.userID || !newUser.name) {
        return res.status(400).json({
            message: "userID and name are required"
        });
    }

    const existingUser = users.find((u) => {
        return u.userID === newUser.userID;
    });

    if (existingUser) {
        return res.status(400).json({
            message: "User ID already exists"
        });
    }

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        users: users
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});