# ThinkBoard 📝

ThinkBoard is a lightweight, full-stack MERN application designed to demonstrate modern web development practices, including separation of concerns, global rate limiting, and a clean project architecture.

## 🚀 Features

- **Full MERN Stack**: Built with MongoDB, Express, React, and Node.js.
- **Modern Frontend**: React 19, Vite, Tailwind CSS, and DaisyUI for a polished UI.
- **Rate Limiting**: Integrated **Upstash Redis** for robust, scalable rate limiting.
- **Clean Architecture**: 
  - **Backend**: Separated into Controllers, Models, Routes, and Middleware.
  - **Frontend**: Organized by Components, Pages, and Utility libraries.
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Navigation**: Client-side routing with React Router 7.

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite**
- **Tailwind CSS** & **DaisyUI** (Styling)
- **React Router 7** (Routing)
- **Axios** (API Client)
- **Lucide React** (Icons)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js** & **Express**
- **MongoDB** with **Mongoose** (Database)
- **Upstash Redis** (Rate Limiting)
- **Dotenv** (Environment Management)
- **CORS** (Cross-Origin Resource Sharing)

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd thinkboard
```

### 2. Backend Setup
```bash
cd backend
npm install

# Configure environment variables
cp .env.example .env
```
Open `.env` and fill in your credentials:
- `MONGO_URI`: Your MongoDB connection string.
- `UPSTASH_REDIS_REST_URL`: Your Upstash Redis REST URL.
- `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis REST Token.

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Run the frontend
npm run dev
```

The frontend will typically be available at `http://localhost:5173`.

## 📂 Project Structure

### Backend
- `controllers/`: Request handling logic.
- `models/`: Database schemas (Mongoose).
- `routes/`: API endpoint definitions.
- `middleware/`: Custom middleware (e.g., Rate Limiter).
- `config/`: Database and service configurations.

### Frontend
- `src/pages/`: Main application views.
- `src/components/`: Reusable UI elements.
- `src/lib/`: External service configurations (Axios, etc.).
- `src/utils/`: Helper functions.

## 🛡️ Rate Limiting
This project uses `@upstash/ratelimit` to protect API endpoints. It ensures that the application remains stable and prevents abuse by limiting the number of requests a user can make within a specific timeframe, backed by a global Redis instance.
