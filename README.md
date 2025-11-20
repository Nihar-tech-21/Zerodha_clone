# Zerodha Clone

A full-stack clone of the Zerodha trading platform. This project is built with separate **backend**, **frontend**, and **dashboard** folders for modularity and ease of development.
You can see the live project by visiting this link : https://zerodha-clone-frontend-sooty.vercel.app

---

## Project Structure

```
Zerodha Clone/
├─ backend/        # Node.js/Express backend API
├─ frontend/       # React frontend application
├─ dashboard/      # React dashboard/admin panel
├─ .gitignore      # Git ignore rules
```

* Each folder has its own `.env` file (ignored from Git) for configuration.
* Node modules and build folders are also ignored.

---

## Features

* User authentication and management
* Portfolio tracking
* Orders and positions management
* Real-time data integration (simulated for clone purposes)
* Interactive frontend and dashboard interfaces

---

## Tech Stack

* **Backend:** Node.js, Express, MongoDB/Mongoose, Axios, Cors
* **Frontend:** React.js, Tailwind CSS
* **Dashboard:** React.js, Tailwind CSS
* **Version Control:** Git, GitHub

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Nihar-tech-21/Zerodha_clone_2.git
cd Zerodha Clone
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env   # Add your environment variables
npm start
```

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # Add your environment variables
npm start
```

### 4. Dashboard

```bash
cd dashboard
npm install
cp .env.example .env   # Add your environment variables
npm start
```

---

## Notes

* `.env` files are **ignored in Git** for security. Add your own `.env` based on `.env.example`.
* Node modules and build folders are ignored by `.gitignore`.

---




