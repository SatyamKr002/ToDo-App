# 📝 Todo App (React + Tailwind + React Hook Form)

This is a simple yet efficient **Todo Application** built using **React**, **Tailwind CSS**, and **React Hook Form**. It supports task addition, deletion, editing, and marking tasks as complete. The app demonstrates clean code, modern React practices, and responsive UI.

---

## ✅ React Hooks & Features Used

- **`useState`**  
  For managing the task list and tracking the `editId` for editing tasks.

- **`useEffect`**  
  Used to reset the form when the user exits edit mode (when `editId` becomes null).

- **`useCallback`**  
  Optimizes and memoizes `deleteTask` and `editTask` functions to improve performance.

- **`useForm`** (from `react-hook-form`)  
  Efficient form handling with built-in methods like `register`, `handleSubmit`, `reset`, and `setValue`.

---

## 🛠️ React Hook Form Methods

- **`register`** – Connects input fields to the form state.
- **`handleSubmit`** – Manages form submission.
- **`reset`** – Clears the form after adding/updating a task or cancelling edit mode.
- **`setValue`** – Pre-fills the input field during editing.

---

## 🧠 JavaScript Concepts Used

- **`.map()`**
  - Used to render task list dynamically.
  - Used to update task text or toggle completion state.

- **`.filter()`**
  - Removes a task by filtering it from the task array.

- **Conditional Rendering**
  - Example: `editId ? "Update" : "Add"` – button label changes based on edit mode.
  - Styles are conditionally applied based on task completion.

- **Spread Operator (`...`)**
  - Maintains immutability when updating or modifying task objects.

- **Ternary Operator**
  - Used for conditional class styling and UI behavior.

---

## 🎨 Styling (Tailwind CSS)

- **Layout** – `flex`, `gap`, `m-4`, `my-10`, etc.
- **Typography** – `text-xl`, `font-bold`, `text-gray-400`, etc.
- **Colors & Gradients** – `from-red-400`, `via-red-500`, `to-red-600`, etc.
- **Design Elements** – Borders, rounded corners, shadows for a clean and modern look.

---

## 🧼 Best Practices Followed

- **Component Reusability**  
  A separate, reusable `Button` component with props like `label`, `onClick`, and `className`.

- **Controlled Input with Validation**  
  Ensures users cannot submit an empty task using form validation via `react-hook-form`.

- **Unique Task IDs**  
  Tasks are assigned unique IDs using `Date.now()`.

- **Single Responsibility Principle**  
  Each function (`onSubmit`, `deleteTask`, `editTask`, `toggleComplete`) has a clear and focused role.

- **User-Friendly UI**  
  Completed tasks are styled with strike-through and faded color for better readability.
