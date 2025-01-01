# Tenzies Game (React)

Welcome to the **Tenzies Game** project built with React and Vite! This repository contains a fun and interactive dice game where the objective is to roll and “hold” dice until all of them show the same value.

## Table of Contents

- [About the Game](#about-the-game)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [How to Play](#how-to-play)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About the Game

Tenzies is a simple dice game with the following rules:

1. Roll 10 dice.
2. Choose a value you want to “aim for.”
3. Click on dice to “hold” them at their current values.
4. Keep rolling until all dice are the same value.

The game is won once all dice show the same face value.

---

## Features

- **React + Vite** setup for a fast development environment.
- **Focus Management**: When the user wins, the “New Game” button is automatically focused (accessible design consideration).
- **Confetti** celebration when you win.
- **Hold/Unhold Dice**: Click on any die to toggle whether it’s held.
- **Responsive** layout designed to fit within a reasonable viewport (optimized for small to medium screens).

---

## Technology Stack

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Nanoid](https://github.com/ai/nanoid) for unique IDs  
- [React-Confetti](https://github.com/alampros/react-confetti) for fun celebration effects  
- [ESLint](https://eslint.org/) for linting JavaScript and JSX code  

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is used in this project)

### Installation

1. **Clone** the repository:
   ```bash
   git clone https://github.com/SnazzyNivesh522/Tenzies-Game-React.git
   ```
2. **Navigate** into the project folder:
   ```bash
   cd Tenzies-Game-React
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

### Running Locally

To start a development server with hot reloading, run:

```bash
npm run dev
```

Then open your browser and go to the URL printed in the console (typically [http://localhost:5173](http://localhost:5173) by default).

---

## How to Play

1. Click the **Roll** button to roll all 10 dice.
2. Click on any die to “hold” it if you like its value.
3. Keep rolling until all dice have the same value.
4. Once you’ve matched all dice, you’ll see a confetti celebration and a **New Game** button.

Tip: Strategically hold certain dice to match them on subsequent rolls!

---

## Scripts

The following scripts are available in the project’s **package.json**:

| Script       | Description                                       |
| ------------ | ------------------------------------------------- |
| `dev`        | Start the development server using Vite           |
| `build`      | Create a production build in the `dist` directory |
| `lint`       | Run ESLint checks                                 |
| `preview`    | Preview the production build                      |
| `deploy`     | Deploy the site to GitHub Pages                   |

You can run them using:
```bash
npm run <script>
```
For example:
```bash
npm run build
```

---

## Project Structure

```
SnazzyNivesh522-Tenzies-Game-React/
├── index.html
├── eslint.config.js
├── public/
├── package.json
├── vite.config.js
├── README.md                 ← You are here
└── src/
    ├── App.jsx               ← Main game logic
    ├── index.css             ← Global styles
    ├── assets/               ← (Optional) Static assets
    ├── components/
    │   ├── Dice.jsx          ← Single die component
    │   └── Dices.jsx         ← Container for all dice
    └── main.jsx              ← ReactDOM.render + App entry
```

- **index.html**: The main HTML file that includes the React app via `script type="module"`.
- **eslint.config.js**: ESLint configuration for code style and best practices.
- **vite.config.js**: Vite configuration file.
- **src/App.jsx**: Contains the main Tenzies game logic.
- **src/components/**: Directory containing reusable React components (`Dice` and `Dices`).
- **package.json**: All dependencies and scripts for running, building, and deploying the application.

---

## License

This project is open source. You are free to use and modify it. (Add or modify a license as needed.)

---

## Acknowledgments

- Original concept of Tenzies dice game adapted into a React app.  
- [Scrimba’s Tenzies Tutorial](https://scrimba.com/) for game inspiration.  
- [React Docs](https://react.dev/) for reference and best practices.

Enjoy playing **Tenzies**—and feel free to open issues or pull requests if you have suggestions or want to contribute! Have fun rolling!