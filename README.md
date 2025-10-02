# Tic Tac Toe 🎮
A modern, interactive Tic Tac Toe game built with React and TypeScript. This project was developed as a learning exercise to master React fundamentals, state management, and component architecture.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## 🚀 Live Demo

Play the game here: [tic-tac-toe-react-dz.vercel.app](https://tic-tac-toe-react-dz.vercel.app)

## ✨ Features

### 🎯 Game Modes
- **1 Player Mode** - Challenge the AI with three difficulty levels:
  - 🟢 **Easy** - Random moves
  - 🟡 **Medium** - Strategic AI that blocks wins and tries to win
  - 🔴 **Impossible** - Perfect play using Minimax algorithm (never loses!)

- **2 Player Mode** - Play against a friend on the same browser

### 🎮 Game Features
- ✨ Beautiful UI with smooth animations and hover effects
- 🎨 Visual feedback with different colors for X and O
- 🔄 Game state management with reset functionality
- 🏆 Win detection and draw conditions
- ⏳ AI thinking delay for realistic gameplay

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **State Management**: React Hooks (useState, useEffect, useCallback)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 🧠 What I Learned

This project helped me learn:
- **React Fundamentals**: Components, props, state, and hooks
- **TypeScript Integration**: Type safety and interfaces
- **State Management**: Lifting state up and proper state updates
- **Algorithm Implementation**: Minimax algorithm for perfect AI
- **CSS Architecture**: Component-scoped styling and responsive design
- **Project Structure**: Organizing React applications effectively
- **Deployment**: CI/CD with Vercel and GitHub integration

## 📂 Project Structure
```
src/
├── components/
│ ├── Board/ # Game board component
│ ├── Square/ # Individual square component
│ └── MainMenu/ # Main menu with game options
├── utils/
│ └── gameLogic.ts # Pure game logic functions
├── App.tsx # Main application component
└── main.tsx # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidzhengc/tic-tac-toe-react.git
   cd tic-tac-toe-react
2. **Install dependencies**
   ```bash
   npm install
3. **Run the development server**
   ```bash
   npm run dev
4. **Open your browser**\
   Navigate to http://localhost:5173
## 👨‍💻 Author
[David Zheng](https://www.linkedin.com/in/david-zheng-2b4a1428b/)
## 📄 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- React documentation and tutorial for initial inspiration
- Vercel for seamless deployment
