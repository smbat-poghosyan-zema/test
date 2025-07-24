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

## Project Structure

- `backend/index.js` – Main entry and mounts routes.
- `backend/routes/` – Express routers (contains `health.js`).
- `backend/models/` – Placeholder for Mongoose models.

All API routes should be prefixed with `/api`.
