# 🧠 Personal Task Management App

A simplified personal task management application built to demonstrate core frontend and backend skills using modern web technologies.

## 📚 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Demo](#features)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
  - [Frontend](#demo)
  - [Backend](#backend)
- [Implementation Decisions](#implementation-decisions)
- [AI Tool Usage](#ai-tool-usage)
- [License](#license)

---

## 📌 Overview

This application enables users to manage their personal tasks with features like task creation, categorization, drag-and-drop prioritization, and filtering. The project aims to demonstrate skills in building full-stack applications using React, TypeScript, Express, and Supabase.

---
## 🎥 Demo

[![Watch the Demo video on Youtube](./demo-thumbnail.png)](https://youtu.be/c0BxU14wBQ8)

## 🚀 Tech Stack

### Frontend
- **React with TypeScript**: For building a robust, typed, and scalable UI.
- **React DnD / Drag-and-drop lib**: For prioritizing tasks visually.
- **Axios / Fetch**: For API communication.

### Backend
- **Node.js with Express** : For REST API development.
- **Supabase**: Used for authentication and PostgreSQL database as a backend-as-a-service (BaaS).

### Why This Stack?
- **React with TS** ensures a type-safe and maintainable UI.
- **Express + Supabase** allows rapid API development with secure and scalable authentication/data handling.
- **Supabase** eliminates boilerplate for user auth and DB setup, ideal for quick iterations.

---

## ✅ Features

- 🔐 User authentication (Supabase Auth)
- ✅ Task creation, editing, and deletion
- 🗂️ Task categorization
- 🎯 Drag-and-drop prioritization
- 💾 Persistent storage via Supabase
- ⚙️ Error handling and loading states
- 📱 Responsive UI for mobile and desktop

---


## 🛠 Setup Instructions

### 🔹 Frontend

```bash

git clone git@github.com:ZAID-BAARAB/Task-Management-System.git

# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev



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
