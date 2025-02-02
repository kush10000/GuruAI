import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

// Configure the Gemini API
const GOOGLE_API_KEY = "AIzaSyAZVWKokQk73zrmGNvpN_7p9ig_QRsMbJk";
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

function readTopicsFromFile(filename) {
  const fileContent = fs.readFileSync(filename, 'utf8');
  return fileContent.split('\n').map(line => line.trim()).filter(Boolean);
}

// Function to create a structured prompt
function createCoursePrompt(goal, knownSkills, courseTopics) {
  return `I want to become ${goal}. I already know skills like ${knownSkills}.
    I am giving you a list of topics in a particular course.
    For each topic, return either 'skip' (if I don't need to learn it) or 'watch' (if I need to learn it).
    The response must be strictly in JSON format with only key-value pairs where the key is the topic name
    and the value is either 'skip' or 'watch'. No extra text, only JSON.

    Course Topics: ${JSON.stringify(courseTopics)}`;
}

// Function to generate response using Gemini
async function generateCoursePlan(goal, knownSkills, courseTopics) {
  const prompt = createCoursePrompt(goal, knownSkills, courseTopics);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  try {
    const response = await model.generateContent(prompt);
    const responseText = response.response.text();

    // Cleaning and extracting JSON response
    const startIndex = responseText.indexOf('{');
    const endIndex = responseText.lastIndexOf('}') + 1;
    const jsonStr = responseText.slice(startIndex, endIndex);
    return JSON.parse(jsonStr);
  } catch (error) {
    return { error: error.toString() };
  }
}

// Example Usage
const filename = "course_topics.txt"; // Change to your actual file path
const goal = "SQL Database Manager";
const knownSkills = "Basic SQL";

// Read topics from the file
const courseTopics = readTopicsFromFile("/content/0.txt");

// Generate course plan and print output
generateCoursePlan(goal, knownSkills, courseTopics)
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.error('Error:', error));