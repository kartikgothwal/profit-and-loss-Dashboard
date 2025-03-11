

# Profit-Loss Dashboard

## 📌 Project Overview
The **Profit-Loss Dashboard** is a React-based web application built with Vite and the Backend is built on pythong FastAPI. It provides an interactive dashboard for tracking profit and loss data using modern frontend technologies.


## Features

- 📊 **Real-time Profit & Loss Tracking**  
- ⚡ **Fast & Optimized with Vite**  
- 🌐 **API Integration using Axios**  
- 🔥 **React Query for State Management**  
- 🎨 **Styled with Tailwind CSS**  
- 🎨 **Component Based Routing with React Router DOM**  
- 🔔 **Notifications using React-Hot-Toast**

## Tech Stack

- **Client**: React 19, Vite, Tailwind CSS, Typescript  
- **State Management**: React-Tanstack-Query  
- **API Calls**: Axios  
- **Notifications**: React-Hot-Toast  
- **Linting & Formatting**: ESLint
- **Routing**: React Router DOM
- **Server**: Python FastAPI

## Frontend Routes

This project uses **React Router** for navigation. Below are the available frontend routes and their corresponding components:

### 1. `/` - Profit and Loss Report
   - **Component:** `ProfileLossReport`
   - **Description:** This route displays the **Profit and Loss Report**, showing financial data such as income, expenses, and net profit/loss.

### 2. `/balance-sheet` - Balance Sheet
   - **Component:** `BalanceSheet`
   - **Description:** This route provides a detailed **Balance Sheet**, including assets, liabilities, and equity for financial analysis.


## Frontend Project Setup

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/kartikgothwal/profit-and-loss-Dashboard.git

cd profit-loss-dashboard-frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```

### 5️⃣ Preview the production build
```bash
npm run preview
```

## Backend Project Setup

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/kartikgothwal/profit-and-loss-Dashboard.git

cd Pythoin-FASTAPI-Backend-Interview
```
### 3️⃣ Start the Backend development server
```bash
pip install -r server/requirements.py
python server/main.py
```

## Environment Variables

Create a .env in **profit-loss-dashboard-frontend** file in the root directory and add any required API keys or environment variables.

```bash
VITE_BACKEND_URI=http://localhost:8000
```

## ✅ Linting
Run ESLint to check for issues:

```bash
npm run lint
```

## 🤝 Contributing

    1. Fork the repository
    2. Create a new branch (git checkout -b feature-branch)
    3. Commit your changes (git commit -m "Add new feature")
    4. Push to the branch (git push origin feature-branch)
    5. Create a Pull Request

All contributions are welcome! 🎉


## 🛠️ Scripts

The project includes several scripts to streamline development, testing, and deployment.

| Script           | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`   | Starts the development server                     |
| `npm run build` | Builds the app for production                     |
| `npm run preview` | Previews the built production app               |
| `npm run lint`  | Runs ESLint to check for code issues              |

### Running Scripts

To execute a script, use:

```bash
npm run <script-name>
```
## Demo Video

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/3ea9113c79b3450fa50ccd88b3893885-with-play.gif)](https://www.loom.com/share/3ea9113c79b3450fa50ccd88b3893885?sid=178ef821-d8fc-47b0-968c-ad888633a2c0)


## Folder Structure
### Frontend 

```
PROFIT-LOSS-DASHBOARD/
│-- node_modules/        # Dependencies installed via npm/yarn
│-- public/              # Static assets (e.g., favicon, images)
│-- src/                 # Main source code directory
│   │-- apiQuery/        # API request handling
│   │   ├── useAPIQuery.tsx  # Custom hook for API calls
│   │-- assets/          # Static assets (SVGs, images, etc.)
│   │   ├── react.svg
│   │-- axios/           # Axios configurations
│   │   ├── getRequestHandler.ts # API request handler
│   │-- components/      # Reusable components
│   │   ├── helper/      # Helper components
│   │   │   ├── Provider.tsx  # Context provider
│   │-- Layout/          # Layout components
│   │   ├── Heading.tsx  # Page heading component
│   │   ├── LoadingComponent.tsx  # Loading spinner component
│   │-- ui/              # UI components
│   │   ├── RowComponent.tsx  # Row-based UI component
│   │   ├── RowHeroComponent.tsx  # Hero row component
│   │-- constant/        # Global constants
│   │   ├── index.ts
│   │-- types/           # TypeScript types
│   │   ├── index.ts
│   │-- utils/           # Utility functions
│-- .env                 # Environment variables
│-- .gitignore           # Git ignore file
│-- eslint.config.js     # ESLint configuration
│-- index.html           # HTML entry point
│-- package.json         # Project metadata and dependencies
│-- package-lock.json    # Package lock file
│-- README.md            # Project documentation
│-- tsconfig.json        # TypeScript configuration
│-- tsconfig.app.json    # Additional TypeScript config
│-- tsconfig.node.json   # TypeScript config for Node.js
│-- vite.config.ts       # Vite configuration file
```

### Backend

```
PYTHON-FASTAPI-REPORT/
│-- assets/                # Contains financial data and documents
│   ├── balance-sheet.json                  # JSON file with balance sheet data
│   ├── profit-and-loss-sample-table.png    # Sample table image
│   ├── profit-and-loss.json                # JSON file with profit and loss data
│   ├── Sandbox Us 1 ProfitandLoss.pdf      # Sample profit & loss PDF
│   ├── vocabulary of allowed terms.rtf     # Reference document for terminology
│   ├── vodafone_annual_report_reduced.pdf  # Sample annual report (Vodafone)
│
│-- server/                # Backend server code
│   ├── __pycache__/       # Compiled Python files
│   ├── config.py          # Configuration settings for FastAPI
│   ├── main.py            # Entry point of the FastAPI application
│   ├── requirements.py    # Dependencies and package requirements
│   ├── service.py         # Business logic and API service functions
│
│-- .gitignore             # Git ignore file for excluding unnecessary files
│-- .python-version        # Python version specification
│-- ProfitandLoss Table.pdf  # Additional financial data in PDF format
│-- readme.md              # Project documentation
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 00178d6 (adding the table)

## Screenshots

   ### Profit and Loss Report 
   ![image](https://github.com/user-attachments/assets/d89a65de-2d50-4004-b96d-17637d58271d)

   ![image](https://github.com/user-attachments/assets/f9055e38-cc90-4df7-a582-0055c93f54aa)
   
   ![image](https://github.com/user-attachments/assets/b389f47c-269b-41e4-94c4-5fe7f98fb125)


   ### Balance Sheet
   ![image](https://github.com/user-attachments/assets/d2b554c7-2008-4158-8660-da51a87a48d4)
   
   ![image](https://github.com/user-attachments/assets/0698dbf9-b8fe-4d26-a165-848865e68e85)

   ![image](https://github.com/user-attachments/assets/81f6477b-64dd-4265-8cdd-4da8bf5b4f06)








