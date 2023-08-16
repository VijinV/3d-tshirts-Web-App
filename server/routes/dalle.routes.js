import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openai = new OpenAIApi(config);

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.post("/", async (req, res) => {
    try {
      const { prompt } = req.body;
  
      console.log("Received prompt:", prompt);

      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format:'b64_json'
      });
      image = response.data.data[0].b64_json;

      console.log("OpenAI response:", response);
  
      const image = response.data.data[0].b64_json;
  
      console.log("Extracted image data:", image);
  
      res.status(200).json({ photo: image });
    } catch (error) {
      console.error("An error occurred:", error.response ? error.response.data : error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  });


export default router;
