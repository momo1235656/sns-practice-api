const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const corsOptions = {
  origin: "*", // 一時的にすべてのオリジンを許可
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
