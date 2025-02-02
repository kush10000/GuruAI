"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { RoadmapItem } from "@/components/roadmap-item"
import { AiChat } from "@/components/ai-chat"
import { StatsSidebar } from "@/components/stats-sidebar"
import { PersonalizationSidebar } from "@/components/personalization-sidebar"
// import { useEffect } from 'react';
// import axios from 'axios';

// const PORT = 3001;

// Sample data - will be replaced with API call
const sampleData = [
  {
    title: "Learn Python, R, SQL",
    courses: [
      {
        title: "SQL Essentials - Thinking in SQL from Beginners to Pro",
        description: "Learn SQL for beginners with hands-on and practice exercises."
      },
      {
        title: "Python PCEP: Become Certified Entry-Level Python Programmer",
        description: "Learn Python from scratch and pass the PCEP exam (Certified Entry-Level Python Programmer)."
      }
    ],
    resources: [
      { title: "Official Python Documentation", link: "https://docs.python.org/3/" },
      { title: "SQL Practice Platform", link: "https://www.sql-ex.ru/" }
    ],
    projects: [
      { title: "SQL Database Management", description: "Build and manage a relational database with SQL." },
      { title: "Python Portfolio", description: "Create a Python project portfolio to showcase your skills." }
    ]
  },
  {
    title: "Learn Linear Algebra, Statistics, Probability",
    courses: [
      {
        title: "Statistics For Data Science and Machine Learning with Python",
        description: "Practical Statistics with Python for Data Science & Machine Learning Statistical Modeling Using Sci-kit Learn and Scipy."
      },
      {
        title: "Probability and Statistics for Business and Data Science",
        description: "Learn how to apply probability and statistics to real data science and business applications!"
      }
    ],
    resources: [
      { title: "Khan Academy: Probability and Statistics", link: "https://www.khanacademy.org/math/statistics-probability" },
      { title: "MIT OpenCourseWare: Linear Algebra", link: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" }
    ],
    projects: [
      { title: "Data Analysis with Python", description: "Use statistical analysis to draw insights from a real-world dataset." },
      { title: "Business Forecasting Model", description: "Build a forecasting model using probability for business decisions." }
    ]
  },
  {
    title: "Learn NumPy, Pandas, Data Cleaning, ETL",
    courses: [
      {
        title: "Master Pandas and Python for Data Handling [2025]",
        description: "Master modern data manipulation using Pandas for data handling and cleaning."
      },
      {
        title: "Python- Numpy & Pandas Python Programming Language Libraries",
        description: "Learn how to use Python libraries for data analysis, cleaning, and visualization."
      }
    ],
    resources: [
      { title: "Pandas Documentation", link: "https://pandas.pydata.org/pandas-docs/stable/" },
      { title: "NumPy Documentation", link: "https://numpy.org/doc/stable/" }
    ],
    projects: [
      { title: "Data Cleaning with Pandas", description: "Clean a messy dataset using Pandas functions and methods." },
      { title: "ETL Pipeline", description: "Design and implement an ETL pipeline using Python and Pandas for data processing." }
    ]
  },
  {
    title: "Learn Matplotlib, Seaborn, Exploratory Data Analysis",
    courses: [
      {
        title: "Data Visualization in Python (Mplib, Seaborn, Plotly, Dash)",
        description: "Master data visualization in Python with the matplotlib, seaborn, plotly and dash libraries."
      },
      {
        title: "Complete Course on Data Visualization, Matplotlib and Python",
        description: "Master Matplotlib Anatomy and Learn Seaborn to Visualize Data with Custom, Beautiful Charts, Suitable for All Purposes."
      }
    ],
    resources: [
      { title: "Matplotlib Documentation", link: "https://matplotlib.org/stable/contents.html" },
      { title: "Seaborn Documentation", link: "https://seaborn.pydata.org/" }
    ],
    projects: [
      { title: "Visualize Stock Market Data", description: "Use Matplotlib and Seaborn to visualize stock market data trends." },
      { title: "Create Interactive Dashboards with Dash", description: "Build an interactive data dashboard using Dash to visualize business insights." }
    ]
  },
  {
    title: "Learn Machine Learning, Scikit-Learn, Regression, Classification",
    courses: [
      {
        title: "Complete Machine Learning & Data Science with Python | A-Z",
        description: "Use Scikit, learn NumPy, Pandas, Matplotlib, Seaborn and dive into machine learning A-Z with Python and Data Science."
      },
      {
        title: "The Complete Machine Learning Course with Python",
        description: "Build a Portfolio of 12 Machine Learning Projects with Python, SVM, Regression, Unsupervised Machine Learning & More!"
      }
    ],
    resources: [
      { title: "Scikit-learn Documentation", link: "https://scikit-learn.org/stable/" },
      { title: "Kaggle Machine Learning Datasets", link: "https://www.kaggle.com/datasets" }
    ],
    projects: [
      { title: "Build a Predictive Model", description: "Create a machine learning model for predicting housing prices using regression techniques." },
      { title: "Build a Spam Classifier", description: "Develop a classifier that can predict if an email is spam or not using supervised learning algorithms." }
    ]
  }
];

// const sampleData = [
//   {
//     title: "Fundamentals of Programming",
//     courses: [
//       {
//         title: "Python for Beginners", 
//         description: "Learn Python basics with hands-on exercises",
//       },
//       {
//         title: "Programming Logic",
//         description: "Master programming concepts and problem-solving",
//       },
//     ],
//     resources: [
//       { title: "Python Documentation", link: "#" },
//       { title: "Coding Practice Platform", link: "#" },
//     ],
//     projects: [
//       {
//         title: "Calculator App",
//         description: "Build a simple calculator to practice basic programming concepts",
//       },
//     ],
//   },
//   {
//     title: "Web Development Basics", 
//     courses: [
//       {
//         title: "HTML & CSS Fundamentals",
//         description: "Learn the building blocks of web development",
//       },
//       {
//         title: "JavaScript Essentials",
//         description: "Master JavaScript programming",
//       },
//     ],
//     resources: [
//       { title: "MDN Web Docs", link: "#" },
//       { title: "Frontend Practice", link: "#" },
//     ],
//     projects: [
//       {
//         title: "Personal Portfolio",
//         description: "Create your own portfolio website",
//       },
//     ],
//   },
//   {
//     title: "Advanced Frontend Development",
//     courses: [
//       {
//         title: "React Complete Guide",
//         description: "Master modern React development",
//       },
//       {
//         title: "State Management",
//         description: "Learn Redux and other state management solutions",
//       },
//     ],
//     resources: [
//       { title: "React Documentation", link: "#" },
//       { title: "Component Libraries", link: "#" },
//     ],
//     projects: [
//       {
//         title: "Task Management App",
//         description: "Build a full-featured task management application",
//       },
//     ],
//   },
// ]

export default function BuildPage(wantsTo:string,knows:string) {
  // const [roadmap, setRoadmap] = useState(sampleData)
  const roadmap = sampleData;
  console.log(wantsTo,knows);

  // useEffect(() => {
  //   const fetchRoadmap = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:${PORT}/api/roadmap`, {
  //         headers: {
  //           'wants-to': wantsTo,
  //           'knows': knows
  //         }
  //       });
  //       setRoadmap(JSON.parse(response.data));
  //     } catch (error) {
  //       console.error('Error fetching roadmap:', error);
  //       setRoadmap(sampleData); // Fallback to sample data if request fails
  //     }
  //   };

  //   fetchRoadmap();
  // }, [wantsTo, knows]);


  const [selectedItem, setSelectedItem] = useState<{
    type: "course" | "resource" | "project"
    title: string
    description?: string
  } | null>(null)

  const handlePersonalize = (type: "course" | "resource" | "project", title: string, description?: string) => {
    setSelectedItem({ type, title, description })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Navbar/>
      <div className="flex flex-1 pt-16">
        <div className="fixed left-0 top-16 bottom-0 w-64">
          <StatsSidebar />
        </div>
        <main className="flex-1 p-6 overflow-y-auto ml-64 mr-64">
          <h1 className="text-2xl font-bold mb-6">Your Learning Roadmap</h1>
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <RoadmapItem key={index} {...item} onPersonalize={handlePersonalize} />
            ))}
          </div>
        </main>
        <div className="fixed right-0 top-16 bottom-0 w-64">
          <PersonalizationSidebar selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      </div>
      <AiChat />
    </div>
  )
}

