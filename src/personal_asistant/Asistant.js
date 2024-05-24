// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
            text: "Raihan Firdaus has extensive experience in hybrid application development and machine learning. He has worked on several projects using the following tech stack: Python, Flutter, React native, and Keras\n\nAre there any other aspects of Raihan's experience that you would like to know?",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa hobi Raihan Firdaus" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Raihan sangat menyukai bermain game, menonton anime, dan dengarkan musik.\n\nApa lagi yang ingin kamu ketahui tentang Raihan?",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Apakah ada playlist lagu yang biasa didengarkan Raihan?" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Berikut link playlist Spotify Raihan: \n\n- https://open.spotify.com/playlist/1Ou3P3yrMapfNOh9gjh9de?si=10f50bd7bcde415c",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Dimana Raihan tinggal?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Surabaya\n\nApakah ada hal lain yang ingin kamu tanyakan ? 😊 \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa kegiatan Raihan Firdaus ?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Saat ini Raihan Firdaus mahasiswa aktif di Universitas Telkom Surabaya dan sedang menempuh semester 4 Informatika. \n\nApakah ingin tahu lebih lanjut tentang Raihan? 😊 \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apakah Raihan mempunyai link Github?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Ya, tentu saja! Kamu bisa mengunjungi profil Github Raihan di https://github.com/RH203.  \n\nApakah ada hal lain yang ingin kamu ketahui tentang Raihan? 😊 \n",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(user);
  // console.log(result.response.text());
  return result.response.text();
}

// run();
