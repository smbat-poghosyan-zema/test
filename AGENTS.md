# Backend Development Instructions

This repository contains a simple Node.js backend located in the `backend/` directory. It uses Express.

## Running the server

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the dev server with nodemon:
   ```bash
   npm run dev
   ```
   The server listens on `PORT` environment variable or defaults to 5000.

## Health Endpoint

`/api/health` returns `{"status":"OK"}` to verify the server is up.

### Authentication Endpoints

- `POST /api/auth/login` – Body: `{ "email": "...", "password": "..." }`. On success returns `{ "token": "<jwt>" }`. Include this token in the `Authorization: Bearer <token>` header when calling protected endpoints.
- `GET /api/secret` – example protected route that requires a valid JWT and returns secret data.

Only an admin user exists by default. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env` to configure the credentials seeded on first run.

## Project Structure

- `backend/index.js` – Main entry and mounts routes.
- `backend/routes/` – Express routers (contains `health.js`).
- `backend/models/User.js` – Mongoose User model with hashed passwords.

All API routes should be prefixed with `/api`.

## Authentication

- Passwords are hashed using `bcrypt` before storage.
- JWT is used for stateless authentication. Include `Authorization: Bearer <token>` header on protected endpoints.
- A default admin account is seeded on first run if no admins exist. Credentials come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables.

### Environment variables

- `MONGO_URL` – MongoDB connection string (defaults to `mongodb://localhost:27017/yourdbname`).
- `JWT_SECRET` – secret used to sign JWT tokens.
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` – credentials for the initial admin user.


# Frontend Development Instructions

The React frontend is located in the `frontend/` directory and was bootstrapped with Create React App.

## Running the React dev server

```bash
cd frontend
npm start
```

This starts the development server on http://localhost:3000.

The app uses **React Router**. Main routes:
- `/` – `HomePage`
- `/login` – `LoginPage`
- `/admin` – `AdminDashboardPage`
- `/posts/:id` – `PostDetailsPage`

Components for these pages live under `frontend/src/pages`.

The frontend communicates with the backend via REST API requests to `http://localhost:5000/api/*`. CORS is enabled on the backend (allowing `http://localhost:3000`) so the React app can make requests during development.

The frontend and backend are separate projects and communicate only via HTTP.
