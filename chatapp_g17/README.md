# Simple Messaging App (Phase 1)

A minimal, working messaging app you can run locally with Docker Compose.

- frontend: Express static server serving HTML/JS/CSS
- auth-service: Handles registration and login with JWT
- chat-service: Socket.IO real-time messaging with JWT authentication
- database: MongoDB (with in-memory fallback if `MONGO_URL` is not provided)

## Quick Start

1. Prerequisites:
   - Docker and Docker Compose installed

2. Start the stack:
   ```bash
   docker-compose up --build
   ```

3. Open the app:
   - http://localhost:3000

4. Try it:
   - Register a user, log in, and open another browser window to see messages appear in real-time.

## Project Structure

```
.
├─ docker-compose.yml
├─ frontend/
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ server.js
│  └─ public/
│     ├─ index.html
│     ├─ app.js
│     └─ styles.css
├─ auth-service/
│  ├─ Dockerfile
│  ├─ package.json
│  ├─ server.js
│  └─ users.js
└─ chat-service/
   ├─ Dockerfile
   ├─ package.json
   ├─ server.js
   └─ messages.js
```

## Environment

- JWT secret:
  - By default, a development secret `dev-secret` is used.
  - For better security, set `JWT_SECRET` in your environment or `.env` when running Docker Compose:
    ```
    JWT_SECRET=some-long-random-secret
    ```

- Service URLs:
  - Frontend reads `AUTH_URL` and `CHAT_URL` from environment via `/env.js`.
  - Defaults (work with the provided compose file):
    - `AUTH_URL=http://localhost:3001`
    - `CHAT_URL=http://localhost:3002`

- MongoDB:
  - Compose sets `MONGO_URL=mongodb://mongo:27017/chatapp`.
  - If you run services outside Docker without Mongo, they fall back to in-memory storage.

## Milestone 1 Validation

- Run:
  ```bash
  docker-compose up --build
  ```
- Open http://localhost:3000
- Register, login, and exchange messages between two browser windows.

Commit this code to your repository when it's working.

## Notes

- Authentication: Simple JWT with 12h expiry.
- Chat: Socket.IO used for simplicity and reliability in local dev.
- Storage: In-memory fallback for both users and messages enables quick iteration without DB.
- CORS: Allowed for `http://localhost:3000` in chat-service; auth-service is permissive for local dev.