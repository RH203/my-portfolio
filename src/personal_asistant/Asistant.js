const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
require('dotenv').config()

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-latest",
  systemInstruction: "Your name is Bobi",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export default async function runModel(user) {
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Hello! 👋 my name Bobi. It's nice to hear from you. What can I do for you today? 😊 \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "What tech stack is often used by Raihan Firdaus?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Raihan Firdaus has extensive experience in hybrid application development and machine learning. He has worked on several projects using the following tech stack:\n\nPython: Raihan has been using Python for over 5 years, primarily in machine learning development and data analysis. One of the projects includes building predictive models for health data analysis using TensorFlow.\n\nTensorFlow: With TensorFlow, Raihan has developed various machine learning models, including image classification and anomaly detection models. He is also experienced in optimizing models for best performance.\n\nJupyter: Raihan frequently uses Jupyter Notebook for data exploration and rapid prototyping. He has built several interactive reports that help in data visualization and in-depth understanding of the data.\n\nFlutter: In hybrid app development, Raihan has used Flutter to build mobile apps that are efficient and have an attractive user interface. One application is an e-learning platform that helps users learn interactively.\n\nReact Native: Raihan is also experienced with React Native for cross-platform mobile application development. He has worked on e-commerce application projects that integrate with various backend services for a seamless shopping experience.\n\nAre there any other aspects of Raihan's experience that you would like to know?",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(user);
  // console.log(result.response.text());
  return result.response.text()
}

// run();
