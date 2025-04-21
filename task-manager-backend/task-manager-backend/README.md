
---

## 📁 `backend/README.md`

```md
# 🛠️ Backend – Personal Task Management App

This is the backend of the Personal Task Management App, built using **Node.js**, **Express**, and **Supabase**. It exposes RESTful APIs to manage users, tasks, and categories.

---

## 🚀 Tech Stack

- **Node.js** with **Express.js** or **NestJS**
- **Supabase** (PostgreSQL + Auth)
- **dotenv** for environment configuration
- **CORS**, **helmet**, **body-parser**, etc.
- **RESTful API structure**

---

## 📌 Features

- User authentication via Supabase
- CRUD operations:
  - ✅ Tasks (Create, Read, Update, Delete)
  - ✅ Categories (Create, Read, Update, Delete)
- Task prioritization (stored in DB)
- Filtering and querying based on user/session
- Middleware-based validation and error handling

---
## 🎥 Demo

[![Watch the video](./demo-thumbnail.png)](https://www.youtube.com/watch?v=PX1ToOxt9nY&ab_channel=WardaProd)
## 🔧 Setup Instructions

### 1. Clone the repository and navigate to backend

```bash
git clone git@github.com:ZAID-BAARAB/Task-Management-System.git
cd task-manager-backend\task-manager-backend
npm install
npm run dev