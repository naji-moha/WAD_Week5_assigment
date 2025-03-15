# Week 5 Assignment: To-Do List App with Firebase

## Project Overview
This is a **To-Do List Application** built with **React** and **Vite**, featuring **Firebase Authentication** for user login and sign-up. Users can add, edit, and delete tasks, and their tasks persist using **local storage**.

---

## Features
- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Task Management**: Add, edit, and delete tasks.
- **Local Storage**: Tasks persist even after refreshing the page.
- **Automatic Navigation**: Users are redirected to the correct pages after login/sign-up.
- **Modern UI**: Clean and professional design with a gradient background and smooth animations.

---

## Setup Instructions

### Requirements
- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **Git**

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
Install dependencies:

bash
Copy
npm install
Set up Firebase:

Create a Firebase Project here.

Enable Authentication (Email/Password).

Copy the Firebase config and update src/firebase.js:

javascript
Copy
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
Run the app:

bash
Copy
npm run dev
Open http://localhost:5173/ in your browser.

Key Learnings
Setting up Firebase Authentication in a React app.

Using React hooks (useState, useEffect) for state management.

Implementing local storage for task persistence.

Handling user authentication errors properly.

Building a responsive and modern UI with CSS.

Challenges Faced
Authentication Redirection: Users were not redirected correctly after login. (Fixed using useNavigate())

Firebase Config Issues: Incorrect API keys caused login failures. (Solved by rechecking Firebase settings)

Tasks Disappearing on Refresh: Fixed by saving tasks to local storage.

Deployment Instructions
Build the Project
bash
Copy
npm run build
Deploy Using
Vercel:

bash
Copy
vercel
Netlify:

bash
Copy
netlify deploy
Firebase Hosting:

bash
Copy
firebase init hosting
firebase deploy
Submission Details
GitHub Repository: [Insert Your Repo Link Here]
Live Demo: [Insert Live Demo Link Here]

