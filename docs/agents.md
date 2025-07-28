# Project Overview

This repository contains a full-stack web application with a **React** frontend and a **Node.js/Express** backend. It allows users to view blog posts and provides an admin interface for managing that content. Development is AI-assisted and this document guides both human contributors and AI agents.

# Tech Stack & Architecture

- **Backend**: Node.js with Express. Routes are mounted under `/api`.
- **Database**: MongoDB, accessed via Mongoose.
- **Frontend**: React with React Router.

The React frontend communicates with the backend by calling REST APIs. The backend reads and writes data in MongoDB.

# Setup Instructions

## Backend

```bash
cd backend
npm install
npm run dev
```

The server listens on the `PORT` environment variable (default `5000`). Other settings such as the database URL will live in a `.env` file.

## Frontend

```bash
cd frontend
npm start
```

This runs the React development server on `http://localhost:3000`.

Both projects must have dependencies installed (`npm install`) in their respective directories.

# Structure & Conventions

- Express routes live in `backend/routes/` and all endpoints are prefixed with `/api`.
- Mongoose models go in `backend/models/`.
- React components and pages are under `frontend/src/`, using React Router for navigation.
- All API responses are JSON.
- JWT-based authentication is now implemented.

## API Endpoints

- `GET /api/health` – returns `{ "status": "OK" }`.
- `POST /api/auth/login` – accepts `email` and `password`; returns `{ token }` on success. Include `Authorization: Bearer <token>` when calling protected routes.
- `GET /api/secret` – example protected endpoint that responds with secret data when authenticated.

# Keeping This Document Updated

After any task that adds commands, environment variables, endpoints, or structural changes, update this file so it remains current. This documentation is the first place developers and AI agents should consult for context about the project.
