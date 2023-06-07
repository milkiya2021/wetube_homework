import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("This is home!");
};

const handleAbout = (req, res) => {
  return res.send("This is about page");
};

const handleContact = (req, res) => {
  return res.send("This is contact page");
};

const handleLogin = (req, res) => {
  return res.send("This is login page");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Sever listening on port ${PORT}`);

app.listen(PORT, handleListening);
