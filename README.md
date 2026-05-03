# 🗳️ Online Voting System

A secure and user-friendly **Online Voting System** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to register, login, and cast their vote digitally while ensuring **one person, one vote**.

---

## 🚀 Features

* 🔐 User Authentication (Signup/Login with JWT)
* 🧑‍🤝‍🧑 Secure Voting System (One user can vote only once)
* 📊 Real-time Vote Counting
* 🗳️ Multiple Candidates Support
* ⚡ Fast and Responsive UI (React + Tailwind CSS)
* 🌐 REST API Integration
* 📩 Contact Form Support

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Tailwind CSS
* Axios
* React Router

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt (Password Hashing)

---

## 📂 Project Structure

```
online-voting-system/
│
├── frontend/        # React Application
├── backend/         # Node.js + Express API
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/online-voting-system.git
cd online-voting-system
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file in backend:

```
PORT=3000
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔄 API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| POST   | /api/auth/register | Register user        |
| POST   | /api/auth/login    | Login user           |
| GET    | /api/candidates    | Get all candidates   |
| POST   | /api/vote          | Vote for a candidate |

---

## 🔐 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Duplicate voting prevention
* Protected routes

---

## 📸 Screenshots

*Add screenshots of your UI here*

---

## 👨‍💻 Team Members

* Frontend Developer
* Backend Developer
* Database Manager
* Integration & Deployment

---

## 🎯 Future Improvements

* 🧾 Admin Dashboard
* 📊 Live Results Visualization (Charts)
* 🔔 Email Notifications
* 🧠 Voting Key

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---


## 🌟 Acknowledgement

Built for hackathon and learning purposes 🚀

---
