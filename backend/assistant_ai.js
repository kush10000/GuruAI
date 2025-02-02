import { GoogleGenerativeAI } from '@google/generative-ai';
const GOOGLE_API_KEY="AIzaSyAZVWKokQk73zrmGNvpN_7p9ig_QRsMbJk";

// Initialize the model
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

async function chat(userInput) {
  try {
    const response = await model.generateContent(userInput);
    const result = response.response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
}

export { chat };