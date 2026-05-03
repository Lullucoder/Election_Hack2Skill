# 🇮🇳 ElectionIQ: Indian Election Process Education Assistant

![ElectionIQ Banner](https://via.placeholder.com/1200x400/1e1b4b/6366f1?text=ElectionIQ+:+Empowering+Indian+Voters)

[![Live Demo](https://img.shields.io/badge/Live_Demo-election--iq--india.web.app-success?style=for-the-badge&logo=firebase)](https://election-iq-india.web.app)
[![Tech Stack](https://img.shields.io/badge/React-Vite-blue?style=for-the-badge&logo=react)](#)
[![Powered By](https://img.shields.io/badge/Google-Gemini_AI-orange?style=for-the-badge&logo=google)](#)

## 🎯 Problem Statement
**"Election Process Education: Create an assistant that helps users understand the election process, timelines, and steps in an interactive and easy-to-follow way."**

Democracy thrives on informed participation. However, the Indian electoral process—with its varied phases, EPIC registrations, EVM/VVPAT mechanics, and constitutional guidelines—can be overwhelming for first-time voters. **ElectionIQ** bridges this gap by providing a smart, dynamic, and non-partisan educational platform that simplifies the democratic process.

---

## ✨ Key Features

*   🤖 **Smart AI Assistant (Powered by Google Gemini):** A conversational interface that answers queries about voter registration, Model Code of Conduct (MCC), NOTA, and the Election Commission of India (ECI) in a strictly non-partisan manner.
*   🗺️ **Interactive Voter Journey Timeline:** An engaging 8-step visual guide taking users from checking eligibility to understanding government formation.
*   🎮 **Gamified Learning & Quizzes:** A 12-question interactive quiz testing knowledge of the Indian Constitution, EVMs, and electoral facts. Users earn digital badges for high scores.
*   ✅ **Personalized Dashboard & Readiness Checklist:** A hub where users can track their voter registration progress, view earned badges, and monitor their readiness for polling day.
*   🔔 **Smart Notification System:** Alerts users about electoral roll revisions, phase announcements, and checklist reminders.

---

## 🏆 Hackathon Challenge Expectations Addressed

Our solution strictly adheres to the core hackathon evaluation criteria:

1.  **Code Quality:** Built with a modular React component architecture. Centralized state management (Context API) and reusable UI assets (SVG Icon Resolver) ensure high maintainability.
2.  **Security:** Implemented secure routing for protected pages. The AI system prompt is heavily sandboxed to prevent political bias or partisan hallucinations, ensuring safe and responsible educational outputs.
3.  **Efficiency:** Developed as a lightweight Single Page Application (SPA) using Vite. Utilizes CSS glassmorphism and variables for styling without heavy external libraries, optimizing load times.
4.  **Accessibility:** Fully responsive across mobile and desktop. Replaced all inaccessible emojis with scalable, semantic SVGs (Lucide React + Custom SVG paths) with proper ARIA labels.
5.  **Google Services Integration:** 
    *   Deployed seamlessly on **Firebase Hosting**.
    *   Designed for deep integration with **Google Vertex AI / Gemini API** for intelligent assistant routing.
    *   Architecture prepared for **Firebase Authentication** and **Cloud Firestore**.

---

## 💻 Tech Stack

*   **Frontend Framework:** React 18 + Vite
*   **Routing:** React Router DOM v6
*   **Styling:** Vanilla CSS3 (Glassmorphism, CSS Variables, Modern Flexbox/Grid)
*   **Icons:** Lucide React & Custom SVGs (No Emojis)
*   **Hosting:** Firebase Hosting
*   **AI Engine (Architecture):** Google Gemini / Vertex AI

---

## 🚀 Getting Started (Local Development)

### Prerequisites
*   Node.js (v18+ recommended)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/election-iq.git
    cd "Election Hack2Skill"
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory based on the `.env.example` template:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_GEMINI_API_KEY=your_gemini_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Icons/           # Centralized SVG Icon system (Lucide + Custom)
│   ├── Layout/          # Page wrappers
│   └── Navbar/          # Main navigation
├── context/             # Global state management (Auth)
├── data/                # Indian Election Context Data (Phases, States, Quizzes)
├── pages/               # Main application views
│   ├── Assistant/       # AI Chat Interface
│   ├── Auth/            # Login/Registration
│   ├── Dashboard/       # User Hub & Checklist
│   ├── Landing/         # Marketing / Home
│   ├── Notifications/   # Alert Center
│   └── Timeline/        # Interactive Voter Journey
├── services/            # API and third-party integrations (AI Service)
└── App.jsx              # Routing Configuration
```

---

## 🤝 Designing for Indian Democracy

Every element of ElectionIQ has been localized for the Indian context. From bespoke SVG icons representing the **Ashoka Chakra** and **EVM Machines**, to data structures validating the 543 Lok Sabha seats and 28 States/UTs, this platform is purpose-built to empower the world's largest democracy.

> *Created for the Hack2Skill Hackathon 2026.*
