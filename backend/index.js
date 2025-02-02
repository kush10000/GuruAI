import express from 'express';
import cors from 'cors';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Import required functions
import { main } from './roadmap_ai.js';
import { generateCoursePlan } from './personalization_ai.js';
import { chat } from './assistant_ai.js';

// Roadmap AI endpoint
app.get('/api/roadmap', async (req, res) => {
  try {
    const wantsTo = req.headers['wants-to'];
    const knows = req.headers['knows'];

    if (!wantsTo || !knows) {
      return res.status(400).json({ 
        error: "Missing required headers 'wants-to' and 'knows'" 
      });
    }

    const roadmap = await main(wantsTo, knows);
    res.json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Personalization AI endpoint
app.get('/api/personalize', async (req, res) => {
  try {
    const goal = req.headers['goal'];
    const knownSkills = req.headers['known-skills'];

    if (!goal || !knownSkills) {
      return res.status(400).json({
        error: "Missing required headers 'goal' and 'known-skills'"
      });
    }

    // const courseTopics = readTopicsFromFile("./scraper/0.txt");
    const coursePlan = await generateCoursePlan(goal, knownSkills);
    res.json(coursePlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Assistant AI endpoint
app.get('/api/assistant', async (req, res) => {
  try {
    const message = req.headers['message'];

    if (!message) {
      return res.status(400).json({
        error: "Missing required header 'message'"
      });
    }

    const response = await chat(message);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

