# 🚀 Superheroes Project

![GitHub repo size](https://img.shields.io/github/repo-size/L-2022/Superheroes)
![GitHub stars](https://img.shields.io/github/stars/L-2022/Superheroes?style=social)
![GitHub forks](https://img.shields.io/github/forks/L-2022/Superheroes?style=social)

A full-stack project built with React, Node.js, and PostgreSQL.

## 📂 Project Structure

```
Superheroes/
│-- client/   # Frontend (React)
│-- server/   # Backend (Node.js, Express, PostgreSQL)
```

## 🌟 Features

✅ Full-stack superhero management system  
✅ RESTful API with Express.js  
✅ PostgreSQL database integration  
✅ React-based frontend  
✅ API Documentation: [http://localhost:PORT/api-docs](http://localhost:PORT/api-docs)

---

## 🚀 Getting Started

### 📌 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

### 🔥 Installation

1️⃣ Clone the repository:
```sh
git clone https://github.com/L-2022/Superheroes.git
cd Superheroes
```

2️⃣ Set up the backend:
```sh
cd server
npm install
```
Create a PostgreSQL database with the name specified in `server/.env`
```sh
npm run dev   # Start the backend server
```

3️⃣ Set up the frontend:
```sh
cd ../client
npm install
npm start    # Start the frontend
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## ⚡ Available Scripts

### 🔧 Backend
| Command          | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start the server in dev mode |

### 🎨 Frontend
| Command          | Description                  |
|-----------------|------------------------------|
| `npm start`     | Run the frontend in dev mode |
| `npm run build` | Build for production         |

---

## 📦 Deployment
To build the frontend for production, run:
```sh
npm run build
```
The build output will be located in the `client/build` directory.
For more details, check the [deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

---

## 📜 License
This project is licensed under the MIT License.

🌟 **Star this repository** if you found it useful! 🚀

