# 📊 React-Spreadsheet

A fast and modern spreadsheet application built with **React**, **JSX**, and **Tailwind CSS**, powered by the blazing-fast **Bun** runtime. Integrated with popular spreadsheet libraries like **Handsontable**, **React-Spreadsheet**, and **JSpreadsheet CE**.
 
---

## 🚀 Demo

<div align="center" style="background-color:#f9fafb;padding:20px;border-radius:8px">
  <a href="https://nakul-react-spreadsheet.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?style=for-the-badge&logo=react" alt="Live Demo Badge" />
  </a>
</div>

---

## 🧰 Tech Stack

- ⚛️ **React** – Component-based UI
- 🌀 **Tailwind CSS** – Utility-first styling
- ⚡ **Bun** – Fast JS runtime, bundler & package manager
- 📦 **JSX** – For modern component structure

---

## 📚 Libraries Used

| Library                        | Purpose                                      |
|-------------------------------|----------------------------------------------|
| `@handsontable/react`         | Excel-like table functionality               |
| `react-spreadsheet`           | Lightweight spreadsheet component            |
| `@jspreadsheet-ce/react`      | Customizable spreadsheet UI with Excel feel  |

---

## ⚙️ Setup Instructions

```bash
curl -fsSL https://bun.sh/install | bash
bun create vite
bun install tailwindcss @tailwindcss/vite
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
@import "tailwindcss";
bun install
bun run dev


---
### 1. 📥 Clone the Repository

```bash
git clone https://github.com/NKNakulkumar/React-Spreadsheet-Clone.git
cd React-Spreadsheet-Intern-Assignment
bun dev
