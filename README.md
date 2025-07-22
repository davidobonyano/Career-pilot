# 🚀 CareerPilot

![CareerPilot Banner](https://github.com/user-attachments/assets/ef04cb5b-4111-40b9-99c2-2cffca04a83f
)  


![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

**CareerPilot** is a sleek job tracking and career management web app built with **React, TypeScript, and Tailwind CSS**.  
It helps you keep track of **job applications, contacts, and tasks** in one organized place.

---


## ✨ Features

- **Job Board (Kanban Style)**  
  Organize job applications by stages: *Applied*, *Interviewing*, *Offer*, *Rejected*.

- **Contact Manager**  
  Add, edit, and delete professional contacts with details like company, role, and notes.

- **Offline Storage with LocalForage**  
  All data persists in your browser via **IndexedDB**.

- **Framer Motion Animations**  
  Smooth transitions and animations for modern UI/UX.

- **Responsive Design**  
  Works flawlessly across devices (desktop, tablet, mobile).

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **React Router** (with `createBrowserRouter`)
- **Tailwind CSS** (custom theme for CareerPilot)
- **Framer Motion** (animations)
- **LocalForage** (offline data persistence)
- **UUID** (unique IDs for contacts/jobs)
- **Vite** (lightning-fast dev environment)

---

## 📂 Project Structure

careerpilot/
├─ src/
│ ├─  # App-level setup (router, providers)
│ ├─ features/ # Feature modules (jobs, contacts, tasks)
│ ├─ components/ # Shared UI (Button, Modal, Input, etc.)
│ ├─ pages/ # Page components (Intro, Board, Contacts)
│ ├─ layouts/ # Layout components (RootLayout)
│ ├─ utils/ # Hooks & helpers (useContacts)
│ ├─ types/ # TypeScript interfaces
│ └─ assets/ # Icons & images
├─ public/
├─ index.html
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
└─ package.json


---

## 🚀 Getting Started

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/careerpilot.git
cd careerpilot
npm install
npm run dev

## 🤝 Contributing

Contributions are always welcome!
Fork this repository and create a pull request for any new feature or improvement.


📜 License
This project is licensed under the MIT License – you’re free to use and modify it.