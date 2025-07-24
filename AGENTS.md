# Project Documentation

This repository hosts a full-stack web application consisting of a React
frontend and a Node.js/Express backend.  It allows users to view blog posts and
includes an admin interface for managing that content. Development is assisted
by AI agents, so this document outlines conventions and must be kept up to
date.

## Tech Stack and Architecture

- **Frontend** – React with React Router for navigation.
- **Backend** – Node.js with Express.
- **Database** – MongoDB accessed via Mongoose.

The React frontend calls the backend APIs to fetch or modify data. The backend
persists this data in MongoDB. API responses are JSON and all routes are
prefixed with `/api`.

## Setup Instructions

### Backend

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the development server with nodemon:
   ```bash
   npm run dev
   ```
   The server listens on the `PORT` environment variable or defaults to `5000`.

### Frontend (to be added)

1. Navigate to the `frontend` directory.
2. Install dependencies and start the development server:
   ```bash
   npm install
   npm start
   ```

Environment variables should be stored in a `.env` file in each project folder
(backend and, once created, frontend). Examples include the MongoDB connection
string and JWT secret.

## Project Structure and Conventions

### Backend

- `backend/index.js` – main entry point that mounts routes.
- `backend/routes/` – Express routers (currently contains `health.js`).
- `backend/models/` – Mongoose models.

### Frontend

- `frontend/` – React application (using Create React App or similar). Uses
  React Router for navigation.

Authentication will use JWT and is planned for future implementation.

## Health Endpoint

`/api/health` returns `{"status":"OK"}` to verify the server is up.

## Keeping This Document Updated

After completing any task, update this file with new commands, environment
variables, endpoints or structural changes so it remains the first point of
reference for both humans and AI agents working on the project.
