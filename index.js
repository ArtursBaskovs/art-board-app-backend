const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const openai = require("./openai");  

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// call for openai api handler
app.post("/api/generate", openai.handleGenerate);

app.listen(port, () => console.log(`Server running on port ${port}`));
