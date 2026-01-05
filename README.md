📊 Study Abroad Admin Dashboard

A modern, responsive Admin Dashboard built with Next.js (App Router), Material-UI (MUI), and Zustand.
The dashboard allows admins to manage users and products using the DummyJSON API.

🚀 Tech Stack

Next.js 14+ (App Router)

TypeScript

Material-UI (MUI)

Zustand (State Management)

Tailwind CSS (layout utilities only)

DummyJSON API

✨ Features
🔐 Authentication (Bypassed for Stability)

Login UI implemented

Token stored in Zustand (and localStorage)

Route protection logic implemented

DummyJSON auth is unstable, so a mock token fallback is used (explained below)

👤 Users Management

List users with pagination

Search users

View single user details

Responsive UI

📦 Products Management

List products with pagination

Search products

Filter by category

View detailed product page

INR price conversion

Fully responsive layout

🎨 UI & UX

Fully responsive (desktop, tablet, mobile)

MUI-based modern UI

Mobile hamburger menu

Single global header & footer

No unnecessary scrolling

⚡ Performance Optimizations

API-side pagination

useCallback for handlers

Zustand in-memory caching

Optional localStorage caching

📁 Project Structure

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

⚙️ Setup Instructions

1️⃣ Clone the Repository

git clone [https://github.com/<your-username>/study-abroad-admin-dashboard.git](https://github.com/Vardaan2409/Study-Abroad-Frontend)

cd study-abroad-admin-dashboard

2️⃣ Install Dependencies -- 
npm install

3️⃣ Run the Development Server -- 
npm run dev


Open:

http://localhost:3000

🔐 Authentication Note (Important)

DummyJSON’s authentication endpoint is inconsistent and may return errors like:

"Access Token is required"


even for valid credentials.

✅ Solution Used

Login UI and flow are implemented

Zustand manages auth state

Route protection logic exists

A mock token is used to bypass API instability

setToken("mock-token");


👉 This ensures:

Assignment flow works end-to-end

API integration, state management, and routing are still demonstrated

🌱 Environment Variables

❌ No environment variables required

Token is stored in:

Zustand store

localStorage (optional caching)

🧠 Why Zustand?

Zustand was chosen because:

Minimal boilerplate

Built-in async support

Easy global state management

Better suited than Redux for small–medium applications

Excellent performance with simple mental model

🗃️ Caching Strategy

In-Memory (Zustand)

Prevents repeated API calls

Faster navigation between pages

Optional localStorage Cache

Persists data across reloads

Improves perceived performance

📱 Responsiveness

✔ Desktop

✔ Tablet

✔ Mobile

Hamburger menu for small screens

Adaptive layouts for lists and detail pages



Note on Authentication:

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
