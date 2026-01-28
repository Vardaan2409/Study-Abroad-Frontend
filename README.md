This project was given as an assignment by the company.


# 📊 Study Abroad Admin Dashboard

A modern, responsive Admin Dashboard built with Next.js (App Router), Material-UI (MUI), and Zustand.
The dashboard allows admins to manage users and products using the DummyJSON API.

## 🚀 Tech Stack

Next.js 14+ (App Router)

TypeScript

Material-UI (MUI)

Zustand (State Management)

Tailwind CSS (layout utilities only)

DummyJSON API

## ✨ Features
### 🔐 Authentication (Bypassed for Stability)

Login UI implemented

Token stored in Zustand (and localStorage)

Route protection logic implemented

DummyJSON auth is unstable, so a mock token fallback is used (explained below)

### 👤 Users Management

List users with pagination

Search users

View single user details

Responsive UI

### 📦 Products Management

List products with pagination

Search products

Filter by category

View detailed product page

INR price conversion

Fully responsive layout

### 🎨 UI & UX

Fully responsive (desktop, tablet, mobile)

MUI-based modern UI

Mobile hamburger menu

Single global header & footer

No unnecessary scrolling

### ⚡ Performance Optimizations

API-side pagination

useCallback for handlers

Zustand in-memory caching

Optional localStorage caching

## 📁 Project Structure

src/
 ├─ app/
 
 │   ├─ page.tsx
 
 │   ├─ login/
 
 │   ├─ dashboard/
 
 │   │   ├─ users/
 
 │   │   ├─ products/
 
 │   └─ layout.tsx
 
 │
 
 ├─ components/
 
 │   ├─ Header.tsx
 
 │   ├─ Footer.tsx
 
 │   ├─ UsersTable.tsx
 
 │   ├─ ProductCard.tsx
 
 │
 
 ├─ store/
 
 │   ├─ authStore.ts
 
 │   ├─ usersStore.ts
 
 │   ├─ productsStore.ts
 
 │
 
 ├─ providers/

 │   └─ ThemeRegistry.tsx
 
 │
 
 └─ styles/
 
     └─ globals.css

## ⚙️ Setup Instructions

1️⃣ Clone the Repository

git clone [https://github.com/<your-username>/study-abroad-admin-dashboard.git](https://github.com/Vardaan2409/Study-Abroad-Frontend)

cd study-abroad-admin-dashboard

2️⃣ Install Dependencies -- 
npm install

3️⃣ Run the Development Server -- 
npm run dev


## Open:

http://localhost:3000

### 🔐 Authentication Note (Important)

DummyJSON’s authentication endpoint is inconsistent and may return errors like:

"Access Token is required"


even for valid credentials.

## ✅ Solution Used

Login UI and flow are implemented

Zustand manages auth state

Route protection logic exists

A mock token is used to bypass API instability

setToken("mock-token");


👉 This ensures:

Assignment flow works end-to-end

API integration, state management, and routing are still demonstrated

## 🌱 Environment Variables

❌ No environment variables required

Token is stored in:

Zustand store

localStorage (optional caching)

## 🧠 Why Zustand?

Zustand was chosen because:

Minimal boilerplate

Built-in async support

Easy global state management

Better suited than Redux for small–medium applications

Excellent performance with simple mental model

## 🗃️ Caching Strategy

In-Memory (Zustand)

Prevents repeated API calls

Faster navigation between pages

Optional localStorage Cache

Persists data across reloads

Improves perceived performance

## 📱 Responsiveness

✔ Desktop

✔ Tablet

✔ Mobile

Hamburger menu for small screens

Adaptive layouts for lists and detail pages



### Note on Authentication:

DummyJSON’s authentication endpoint is inconsistent and may return
“Access Token is required” even for valid login requests.
To ensure assessment flow completion, a fallback login mechanism is used
while still demonstrating API integration, state management, and route protection.



### Why Zustand?

Zustand was chosen for state management because it is lightweight,
simple to use, and well-suited for small to medium-sized applications.

Unlike Redux, Zustand does not require boilerplate code such as
actions, reducers, or dispatchers. It supports async actions
out of the box, making API calls easy to manage directly inside the store.

Zustand also provides better readability and faster development
while maintaining scalability, which makes it ideal for this project.

# Screenshots

<img width="2879" height="1545" alt="Screenshot 2026-01-05 230811" src="https://github.com/user-attachments/assets/2a114910-959f-497b-9d84-a7d95f362627" />
<img width="2879" height="1543" alt="Screenshot 2026-01-05 230822" src="https://github.com/user-attachments/assets/f0e0c0f2-efb7-4df3-be96-be04fb3347a4" />
<img width="2879" height="1546" alt="Screenshot 2026-01-05 230835" src="https://github.com/user-attachments/assets/d2148d17-0798-465b-8ef5-88aa92ddf199" />
<img width="2849" height="1543" alt="Screenshot 2026-01-05 230850" src="https://github.com/user-attachments/assets/4ba1d3eb-669d-4625-a172-a2408575e562" />
<img width="2844" height="1541" alt="Screenshot 2026-01-05 230859" src="https://github.com/user-attachments/assets/5cedae73-9cec-4f94-9854-c20a3579fab1" />
<img width="2849" height="1541" alt="Screenshot 2026-01-05 230914" src="https://github.com/user-attachments/assets/87f45ece-be29-4a40-be94-ef25d9690371" />
<img width="2848" height="1539" alt="Screenshot 2026-01-05 230928" src="https://github.com/user-attachments/assets/68bfbb43-031b-4802-8f0a-a1c7f5f62de9" />
<img width="2867" height="1539" alt="Screenshot 2026-01-05 230940" src="https://github.com/user-attachments/assets/bbec482c-10ee-4ccd-93bc-7944a2a65785" />
