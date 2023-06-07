//test
import express from "express";

const PORT = 4000;
const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};

const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(`Time: ${date.toLocaleDateString("ko-KR")}`);
  next();
};

const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("Secure");
  } else {
    console.log("InSecure");
  }
  next();
};

const protectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("Not allowed!!!");
  }
  console.log("Allowed. you may contine");
  next();
};

const handleHome = (req, res) => {
  return res.send("This is homepage");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Sever listening on port ${PORT}👍`);

app.listen(PORT, handleListening);
