import { GoogleGenerativeAI } from '@google/generative-ai';

const GOOGLE_API_KEY = "AIzaSyAZVWKokQk73zrmGNvpN_7p9ig_QRsMbJk"

const roadmap = `{"roadmap":[{"step":1,"title":"Learn Programming","skills":["Python","R","SQL"]},{"step":2,"title":"Mathematics & Statistics","skills":["Linear Algebra","Probability","Statistics","Calculus"]},{"step":3,"title":"Data Handling & Processing","skills":["Pandas","NumPy","Data Cleaning","ETL"]},{"step":4,"title":"Data Visualization","skills":["Matplotlib","Seaborn","Tableau","Power BI"]},{"step":5,"title":"Machine Learning","skills":["Supervised Learning","Unsupervised Learning","Scikit-Learn","Regression","Classification","Clustering"]},{"step":6,"title":"Deep Learning & AI","skills":["Neural Networks","TensorFlow","PyTorch","NLP","Computer Vision"]},{"step":7,"title":"Model Deployment & Big Data","skills":["Flask","FastAPI","Docker","Hadoop","Spark","MLOps"]}]}`;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

function createPrompt(wantTo, knows, roadmap) {
    return `I want to become ${wantTo}. I already know skills like ${knows}.
    I am giving you a roadmap in JSON format. Please remove the skills that I don't need to learn,
    and return only the modified roadmap in JSON format with no additional text.
    The roadmap JSON format is: ${roadmap}`;
}

async function generate(prompt) {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const response = await model.generateContent(prompt);
    const text = response.response.text();
    return text;
}

function cleanAndParseResponse(response) {
    try {
        // Find the first '{' and the last '}' to extract the JSON part
        const startIndex = response.indexOf('{');
        const endIndex = response.lastIndexOf('}') + 1;

        // Extract the JSON string
        const jsonStr = response.substring(startIndex, endIndex);

        // Try to parse the extracted JSON string
        const roadmapJson = JSON.parse(jsonStr);
        return roadmapJson;
    } catch (e) {
        return `Error: ${e}`;
    }
}

// Example usage
async function main() {
    const prompt = createPrompt("Data Scientist", "SQL", roadmap);
    const response = await generate(prompt);
    const roadmapJson = cleanAndParseResponse(response);

    if (typeof roadmapJson === 'object' && roadmapJson !== null) {
        console.log('Successfully parsed JSON:', JSON.stringify(roadmapJson, null, 2));
    } else {
        console.log(roadmapJson); // Print the error message
    }
}

main().catch(console.error);

