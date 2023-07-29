import { Client } from "discord.js";
import express from "express";
import path from "path";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
const app = express();

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

 client.on('ready', () => {
    console.log(`Logged in as ${client.user}`);
    // console.log(client);
});

/* set views */
// app.set('views', __dirname + '/views');
// app.set('views', path.join(process.cwd(), 'views'));
// app.set('view engine', 'tsx');
/* routes */

/* middleware */
// app.use(cookieParser());
// app.use(fileUpload());

// app.post('/api/upload', async (req, res) => {
//     if (!req.files) return res.status(400).send('No files were provided.');
//     if (req.files.file.size > 26214400) return res.status(413).send('File too large. Discord is so generous, so generous in fact that they give everyone a whole 25MB limit! If you have a file bigger than that, then try something else as this will not work.');
//     const buffer = Buffer.from(req.files.file.data);
//     const attachment = new MessageAttachment(buffer, req.files.file.name);
//     client.channels.cache.get(Global.fileChannel).send(attachment);
//     client.on('message', message => {
//         if (message.author.id !== client.user.id) return;
//         if (message.channel.id !== Global.fileChannel) return;
//         if (!message.attachments.first()) return;
//         if (req.headers['upload-source'] === 'API') return res.send(message.attachments.first()?.url);
//         setCookies(req, res, message).then(() => {
//             res.redirect('/results');
//         }).catch(err => console.log(err));
//     });
// });

app.post(`/api/image`, async (req, res) => {
    console.log("request", req)
});

app.listen(3001, () => {
    console.clear();
    console.log(`Server is running @ http://localhost:3001}`);
    client.login(progress.env.key);
});

