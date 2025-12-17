# Farmer Disease Prediction Portal

This is a full-stack web application designed to empower farmers with AI-powered disease diagnosis for plants and animals, a vibrant community Q&A forum, and a streamlined complaint registration system. Built with React, Vite, Tailwind CSS, Node.js, Express, MongoDB, and Groq LLM API.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **AI Disease Diagnosis Chatbot:**  
    Describe symptoms in a chat interface to receive instant AI-powered diagnosis and treatment suggestions for crops and livestock.

- **Community Forum:**  
  Ask questions, share knowledge, and get answers from other farmers and experts.

- **Complaint Registration:**  
  Register complaints about agricultural issues, upload images, and track resolution.

- **User Authentication:**  
  Secure signup and login for personalized experience.

- **Responsive UI:**  
  Modern, mobile-friendly interface using Tailwind CSS and Material UI.

---

## Project Structure

```
Farmer-Disease-Prediction/
│
├── public/                  # Static assets (images, SVGs)
│   ├── vite.svg
│   ├── assets/
│   └── img/
│
├── server/                  # Backend (Node.js, Express, MongoDB)
│   ├── backend.js           # Main Express server
│   ├── Gpt.js               # Groq LLM integration for AI diagnosis
│   ├── randomIds.js         # Unique ID generator
│   ├── db/                  # Mongoose models
│   └── middleware/          # Auth middleware (JWT)
│
├── src/                     # Frontend (React)
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   ├── componets/           # Reusable UI components (Header, Footer, etc.)
│   ├── pages/               # Page-level components (Homepage, Chat, Community, etc.)
│   │   ├── Community/       # Community Q&A forum
│   │   ├── Login/           # Login/Signup
│   │   └── ...              # Other pages (About, ComplaintRegister, etc.)
│   ├── assets/              # Frontend assets
│   └── styles.css           # Custom styles
│
├── package.json             # Frontend dependencies and scripts
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.js           # Vite config
├── README.md                # Project documentation
└── ...
```

---

## How It Works

### 1. AI Disease Diagnosis Chatbot

- Users describe symptoms via the chat interface ([`src/pages/ChatInterface.jsx`](src/pages/ChatInterface.jsx)).
- The frontend sends the data to the backend endpoint `/ai/prob`.
- The backend ([`server/Gpt.js`](server/Gpt.js)) uses Groq LLM to generate a structured JSON diagnosis and treatment plan.
- The response is parsed and displayed step-by-step in the chat.

### 2. Community Q&A Forum

- Farmers can ask questions, answer others, and upvote in the Community section ([`src/pages/Community/`](src/pages/Community/)).
- Questions and answers are stored in MongoDB via Mongoose models ([`server/db/index.js`](server/db/index.js)).
- Each question and answer is uniquely identified using [`server/randomIds.js`](server/randomIds.js).

### 3. Complaint Registration

- Users can register complaints about animal or plant issues ([`src/pages/ComplaintRegister.jsx`](src/pages/ComplaintRegister.jsx)).
- Complaints include images, descriptions, and issue types.
- Option to call a specialist directly from the UI.

### 4. Authentication

- Signup and login handled via JWT ([`server/middleware/auth.js`](server/middleware/auth.js)).
- User info is stored in MongoDB.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Groq API key

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Farmer-Disease-Prediction.git
cd Farmer-Disease-Prediction
```

### 2. Setup Backend

```sh
cd server
npm install
# Create a .env file with:
# MONGO_URL=your_mongodb_connection_string
# SECRET_KEY=your_jwt_secret
# TOKEN_TIMEOUT=1d
# GROQ_API_KEY=your_groq_api_key
node backend.js
```

### 3. Setup Frontend

```sh
cd ..
npm install
npm run dev
```

- The frontend runs on [http://localhost:5173](http://localhost:5173)
- The backend runs on [http://localhost:8001](http://localhost:8001)

---

## Available Scripts

- `npm run dev` – Start frontend in development mode
- `npm run build` – Build frontend for production
- `npm run lint` – Lint frontend code
- `node backend.js` (in `/server`) – Start backend server

---

## Environment Variables

Create a `.env` file in `/server` with:

```
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
TOKEN_TIMEOUT=1d
GROQ_API_KEY=your_groq_api_key
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Groq LLM](https://groq.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Material UI](https://mui.com/)

---
