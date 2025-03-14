# Full Stack React + Express Project

This is a full-stack web application with a **React frontend (client) using Tailwind CSS** and a **Node.js/Express backend (server)**.

## 📁 Project Structure

```
/your-project
├── /client (Next.js + Tailwind CSS + Shadcn/ui)
├── /server (Node.js + Express)
├── package.json
├── README.md
```

## 🚀 **Setup Instructions**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/F4P1E/Athera-AI.git
cd athera-ai-project
```

## **🔹 Client Setup (React + Tailwind + React Router)**

```sh
cd client
npm install
npm run dev
```

#### **Features:**

✅ Next.js 
✅ Tailwind CSS for styling  

## **🔹 Server Setup (Node.js + Express + CORS)**

```sh
cd server
npm install
node server.js
```

#### **Features:**

✅ Express.js as backend  
✅ CORS enabled for API requests  
✅ Simple API endpoint at `http://localhost:8080/`

## **🔗 API Example**

The client fetches data from the server using this endpoint:

```
GET http://localhost:8080/
```

Example response:

```json
{
  "message": "Server started on..."
}
```

## **🎯 Running Both Together**

### Open two terminals:

#### **Client:**

```sh
cd client
npm run dev
```

#### **Server:**

```sh
cd server
node server.js
```

## 📌 **Future Improvements**

- [ ] Add database
- [ ] Implement authentication (JWT, OAuth)
- [ ] Improve UI with more Tailwind components

Feel free to contribute! 😊🎉
