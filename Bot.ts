import { Client } from "discord.js";
import express from "express";
import path from "path";
const app = express();

const client = new Client({
    intents: []
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user}`);
});

app.post(`/api/image`, async (req, res) => {
    console.log("request", req)
});

app.listen(3001, () => {
    console.clear();
    console.log(`Server is running @ http://localhost:3001}`);
    client.login(progress.env.key);
});

