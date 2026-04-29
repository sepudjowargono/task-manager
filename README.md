# 📝 Task Management Application (React + TypeScript)

## 📌 Overview
This project is a **Task Management Application** built using **React and TypeScript**. It allows users to create, view, edit, and delete tasks in a structured and user-friendly interface. The application also integrates **Auth0 authentication** to ensure secure access.

This project demonstrates key concepts such as:
- TypeScript type safety
- React state management
- Context API for global state
- Authentication and protected routes
- Form validation and error handling

---

## 🚀 Features

### ✅ Task Management
- View all tasks on a dashboard
- Create new tasks
- Edit existing tasks
- Delete tasks
- View detailed task information
  
### 🔐 Authentication (Auth0)
- Secure login/logout system
- Protected routes (only authenticated users can access tasks)
- Displays logged-in user information

### ⚙️ TypeScript Integration
- Strong typing for tasks and components
- Interfaces and type aliases used throughout the project
- Improved code readability and maintainability

### 🌐 State Management
- React `useState` for local state
- Context API for global task management

### ⚠️ Error Handling & Validation
- Required field validation for task creation/editing
- User-friendly error messages

---

## 🏗️ Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── TaskCard.tsx
│   └── ProtectedRoute.tsx
│
├── context/
│   └── TaskContext.tsx
│
├── pages/
│   ├── Dashboard.tsx
│   ├── TaskDetails.tsx
│   ├── CreateTask.tsx
│   ├── EditTask.tsx
│   └── Login.tsx
│
├── types/
│   └── Task.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧠 How It Works

### 🔹 Context API
The **TaskContext** manages all task data globally. It provides functions to:

- Add tasks
- Update tasks
- Delete tasks
- Retrieve tasks by ID

### 🔹 Routing
React Router is used for navigation:

- `/` → Dashboard
- `/create` → Create Task
- `/tasks/:id` → Task Details
- `/edit/:id` → Edit Task
- `/login` → Login page

### 🔹 Protected Routes
The **ProtectedRoute** component ensures only authenticated users can access certain pages.

---

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application
```bash
npm run dev
```

Open in browser:

`http://localhost:5173`

---

## 🔐 Auth0 Setup

1. Go to Auth0 Dashboard
2. Create a Single Page Application
3. Add the following URLs:
```bash
Allowed Callback URLs:
http://localhost:5173

Allowed Logout URLs:
http://localhost:5173

Allowed Web Origins:
http://localhost:5173
```
4. Copy your:
- Domain
- Client ID
  
5. Add them to `main.tsx`:
```bash
<Auth0Provider
  domain="YOUR_AUTH0_DOMAIN"
  clientId="YOUR_AUTH0_CLIENT_ID"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
>
```

---

## 🛠️ Technologies Used
- React
- TypeScript
- React Router
- Auth0 Authentication
- CSS

---

## 📈 Future Improvements
- Connect to a backend database (MongoDB / Firebase)
- Add task filtering and sorting
- Add drag-and-drop functionality
- Improve UI/UX design
- Add due date reminders

---

## 👤 Author

Stephana Pudjowargono
