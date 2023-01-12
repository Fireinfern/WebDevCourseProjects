const express = require("express");
const cors = require("cors");

// Create App
const app = express();
// This should be change for env variables
const PORT = 3000;

const HelloWorldRoute = require("./routes/HelloWorld/helloWorld");

app.use(express.text());
app.use(cors());

app.use("/helloWorld", HelloWorldRoute);

app.listen(PORT);