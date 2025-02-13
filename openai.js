
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

// get api access
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


// Handle idea generation from openai api
const handleGenerate = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        const result = completion.choices[0].message.content;
        res.json({ result });
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        res.status(500).json({ error: "Failed to generate ideas" });
    }
};

module.exports = {
    handleGenerate,
};
