import { GoogleGenerativeAI } from '@google/generative-ai';

const GOOGLE_API_KEY = "AIzaSyAZVWKokQk73zrmGNvpN_7p9ig_QRsMbJk"

const roadmap = `[ 
    { 
      "title": "Learn Python, R, SQL", 
      "courses": [ 
        { 
          "title": "SQL Essentials - Thinking in SQL from Beginners to Pro", 
          "description": "Learn SQL for beginners with hands-on and practice exercise" 
        }, 
        { 
          "title": "Python PCEP: Become Certified Entry-Level Python Programmer", 
          "description": "Learn Python from scratch and pass the PCEP exam (Certified Entry-Level Python Programmer)" 
        } 
      ], 
      "resources": [ 
        { "title": "", "link": "#" }, 
        { "title": "", "link": "#" } 
      ], 
      "projects": [ 
        { "title": "", "description": "" } 
      ] 
    }, 
    { 
      "title": "Learn Linear Algebra, Statistics, Probability", 
      "courses": [ 
        { 
          "title": "Statistics For Data Science and Machine Learning with Python", 
          "description": "Practical Statistics with Python for Data Science & Machine Learning Statistical Modeling Using Sci-kit Learn and Scipy" 
        }, 
        { 
          "title": "Probability and Statistics for Business and Data Science", 
          "description": "Learn how to apply probability and statistics to real data science and business applications!" 
        } 
      ], 
      "resources": [ 
        { "title": "", "link": "#" }, 
        { "title": "", "link": "#" } 
      ], 
      "projects": [ 
        { "title": "", "description": "" } 
      ] 
    }, 
    { 
      "title": "Learn NumPy, Pandas, Data Cleaning, ETL", 
      "courses": [ 
        { 
          "title": "Master Pandas and Python for Data Handling [2025]", 
          "description": "Master modern React development" 
        }, 
        { 
          "title": "Python- Numpy & Pandas Python Programming Language Libraries", 
          "description": "Python | Numpy & Pandas for Python Data Analysis, Data Science, Machine Learning from A-Z with python projects & quizzes" 
        } 
      ], 
      "resources": [ 
        { "title": "", "link": "#" }, 
        { "title": "", "link": "#" } 
      ], 
      "projects": [ 
        { "title": "", "description": "" } 
      ] 
    } 
  ]`;
  
  console.log(roadmap);
  
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

function createPrompt(wantTo, knows, roadmap) {
    // return `I want to become ${wantTo}. I already know skills like ${knows}.
    // I am giving you a roadmap in JSON format. Please remove the skills that I don't need to learn,
    // and return only the modified roadmap in JSON format with no additional text.
    // The roadmap JSON format is: ${roadmap}`;
    return `I want to become ${wantTo}. I already know skills like ${knows}.
    I am giving you a roadmap in particular format. Please remove the skills that I don’t need to learn from title,
    and return only the modified roadmap in same format with no additional text and in single line.
    The roadmap format is: ${roadmap}. the keys in the roadmap are title, courses, resources, projects. I do not want them to be in ""`;
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

function formatObject(jsonObj) {
    // Convert object to a formatted string
    let formattedStr = JSON.stringify(jsonObj, null, 2);
    
    // Remove double quotes around keys using regex
    formattedStr = formattedStr.replace(/"(\w+)"\s*:/g, '$1:');
  
    return formattedStr;
  }

// Example usage
export async function main(wantsTo,knows) {
    const prompt = createPrompt(wantsTo, knows, roadmap);
    const response = await generate(prompt);
    const roadmapJson = cleanAndParseResponse(response);
    

    if (typeof roadmapJson === 'object' && roadmapJson !== null) {
        // console.log('Successfully parsed JSON:', JSON.stringify(roadmapJson, null, 2));
        const formattedStr = formatObject(roadmapJson);
        console.log('Formatted JSON:', formattedStr);
        return formattedStr;
    } else {
        console.log(roadmapJson); // Print the error message
    }
}

// main("Data Scientist", "Python, SQL, Statistics, Machine Learning");